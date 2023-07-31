from flask import Flask, render_template, request
from flask_debugtoolbar import DebugToolbarExtension
import logging
from stories import Story, story

app = Flask(__name__)

app.config['SECRET_KEY'] = "oh-so-secret"

debug = DebugToolbarExtension(app)

@app.route("/")
def home():
    return render_template("home.html", prompts=story.prompts)

@app.route("/final_story")
def final_story():
    # madlib_dict = {}
    # for prompt in story.prompts:
    #     print("*************************************************" + prompt)
    #     answer = request.form.get(prompt)
    #     madlib_dict[prompt] = answer
    # print(madlib_dict)
    final_story = story.generate(request.args)
    return render_template("final_story.html", final_story=final_story)