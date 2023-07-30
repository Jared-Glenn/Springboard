from flask import Flask, request
import operations

app = Flask(__name__)


@app.route('/math/<op>')
def all_in_one(op):
    a = int(request.args.get("a"))
    b = int(request.args.get("b"))
    operators = {
        "add": operations.add,
        "sub": operations.sub,
        "mult": operations.mult,
        "div": operations.div
    }
    
    res = operators[op](a, b)

    return f"""
<html>
    <body>
    <h1>{res}</h1>
    </body>
</html>
"""

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

@app.route('/sub')
def sub(): 
    a = int(request.args.get("a"))
    b = int(request.args.get("b"))
    res = operations.sub(a, b)
    return f"""
<html>
    <body>
    <h1>{res}</h1>
    </body>
</html>
"""

@app.route('/mult')
def mult(): 
    a = int(request.args.get("a"))
    b = int(request.args.get("b"))
    res = operations.mult(a, b)
    return f"""
<html>
    <body>
    <h1>{res}</h1>
    </body>
</html>
"""

@app.route('/div')
def div(): 
    a = int(request.args.get("a"))
    b = int(request.args.get("b"))
    res = operations.div(a, b)
    return f"""
<html>
    <body>
    <h1>{res}</h1>
    </body>
</html>
"""