from flask import Flask, request
import operations

app = Flask(__name__)

@app.route('/add')
def add(): 
    a = int(request.args.get("a"))
    b = int(request.args.get("b"))
    res = operations.add(a, b)
    return f"""
<html>
    <body>
    <h1>{res}</h1>
    </body>
</html>
"""