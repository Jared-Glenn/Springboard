from flask import Flask, render_template, redirect, request
from flask_debugtoolbar import DebugToolbarExtension
import surveys

app = Flask(__name__)
app.config['SECRET_KEY'] = "secrets"

debug = DebugToolbarExtension(app)

curr_question = -1
responses = []
survey_dict = surveys.surveys

@app.route('/')
def survey_start():
    title = survey_dict["satisfaction"].title
    instructions = survey_dict['satisfaction'].instructions
    return render_template("survey_start.html", title=title, instructions=instructions)

@app.route('/questions/<question>')
def question(question):
    global curr_question
    curr_question = int(question)
    question_obj = survey_dict['satisfaction'].questions[int(question)]
    return render_template("question.html", index=curr_question, question=question_obj)


@app.route('/next', methods=['POST', 'GET'])
def next():
    if request.method == 'POST':
        print('GET REQUEST NOT LOGGED!!!!!!!!!!!!!!!!')
        multi_dict = request.args
        for key in multi_dict:
            print(key)
            print(multi_dict.get(key))
            print(multi_dict.getlist(key))
    global curr_question
    curr_question += 1
    return redirect('/questions/'+str(curr_question))

@app.route('/back')
def back():
    global curr_question
    curr_question -= 1
    if curr_question < 0:
        curr_question = -1
        return redirect('/')
    return redirect('/questions/'+str(curr_question))