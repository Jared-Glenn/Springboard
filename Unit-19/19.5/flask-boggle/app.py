from flask import Flask, render_template, session, request
from flask_debugtoolbar import DebugToolbarExtension
from boggle import Boggle

boggle_game = Boggle()
app = Flask(__name__)
app.config['SECRET_KEY'] = "oh-so-secret"

debug = DebugToolbarExtension(app)



@app.route('/')
def home():
    session['board'] = boggle_game.make_board()
    return render_template('home.html', board=session['board'])


@app.route('/guess')
def guess():
    word_guess = request.args.get("word_guess")
    board = session['board']
    result = boggle_game.check_valid_word(board, word_guess)
    return result


if __name__ == '__main__':
    app.run(debug=True)