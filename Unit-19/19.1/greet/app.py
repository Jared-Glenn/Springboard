from flask import Flask

app = Flask(__name__)

@app.route('/welcome')
def welcome():
    return """
<html>
    <body>
    <h1>welcome</h1>
    </body>
</html>
"""

@app.route('/welcome/home')
def welcome_home():
    return """
<html>
    <body>
    <h1>welcome home</h1>
    </body>
</html>
"""

@app.route('/welcome/back')
def welcome_back():
    return """
<html>
    <body>
    <h1>welcome back</h1>
    </body>
</html>
"""