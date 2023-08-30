from flask import Flask, render_template, session, request, jsonify
from flask_debugtoolbar import DebugToolbarExtension
from boggle import Boggle

boggle_game = Boggle()
app = Flask(__name__)
app.config['SECRET_KEY'] = "oh-so-secret"

debug = DebugToolbarExtension(app)

word_list = []



@app.route('/')
def home():
    """View the main page and start a new game."""
    global word_list
    word_list = []
    if not session.get('high_score'):
        session['high_score'] = 0
    if not session.get('games'):
        session['games'] = 0
    session['board'] = boggle_game.make_board()
    return render_template('home.html', board=session['board'], high_score=session['high_score'], games=session['games'])


@app.route('/guess')
def guess():
    """Check a guess against the current board."""
    word_guess = request.args.get("word_guess")
    if word_guess not in word_list:
        board = session['board']
        result = boggle_game.check_valid_word(board, word_guess)
        
        if result == "ok":
            word_list.append(word_guess)
        return result
    else:
        return "not-on-board"

@app.route('/score')
def score():
    """Takes the final score for the current game, compares it to the high
    score, and displays the new high score. Iterates the current number of games
    in the session.
    """
    final_score = int(request.args.get("final_score"))
    if final_score > session.get('high_score'):
        session['high_score'] = final_score
    session['games'] += 1
    info = {"games": session.get('games'), "high_score": session.get('high_score')}
    info = jsonify(info)
    return info


if __name__ == '__main__':
    app.run(debug=True)