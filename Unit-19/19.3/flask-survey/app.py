from flask import Flask, render_template, redirect, request, flash, session
from flask_debugtoolbar import DebugToolbarExtension
import surveys

app = Flask(__name__)
app.config['SECRET_KEY'] = "secrets"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False

debug = DebugToolbarExtension(app)

curr_question = -1
num_questions = 0
survey_dict = surveys.surveys

@app.route('/')
def survey_start():
    global num_questions
    num_questions = len(survey_dict["satisfaction"].questions)
    session["responses"] = [None for x in range(num_questions)]
    title = survey_dict["satisfaction"].title
    instructions = survey_dict['satisfaction'].instructions
    print(num_questions)
    print(session["responses"])
    return render_template("survey_start.html", title=title, instructions=instructions)

@app.route('/questions/<question>')
def question(question):
    global curr_question
    responses = session["responses"]
    if None in responses and int(question) > curr_question:
        question = responses.index(None)
        flash("Invalid Question: Please complete the questions in order")
    elif None not in responses:
        flash("Survey is already completed")
        return redirect('/thank')
    curr_question = int(question)
    question_obj = survey_dict['satisfaction'].questions[curr_question]
    print(responses)
    session["responses"] = responses
    return render_template("question.html", index=curr_question, question=question_obj)


@app.route('/next', methods=['POST', 'GET'])
def next():
    global curr_question
    responses = session["responses"]
    if request.method == 'POST':
        print(curr_question +  1)
        responses[curr_question] = request.form["response"]
        print(responses)
    curr_question += 1
    if curr_question >= num_questions:
        curr_question = -1
        session["responses"] = responses
        return redirect('/thank')
    session["responses"] = responses
    return redirect('/questions/'+str(curr_question))

@app.route('/back')
def back():
    global curr_question
    curr_question -= 1
    if curr_question < 0:
        curr_question = -1
        return redirect('/')
    return redirect('/questions/'+str(curr_question))

@app.route('/thank')
def thank():
    return render_template('thank.html')

if __name__ == '__main__':
    app.run()