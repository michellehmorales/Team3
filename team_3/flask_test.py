from flask import Flask

# pass the variable that holds the name of the current python module
app = Flask(__name__)

@app.route('/') # this means it responds to web requests for the url specified
def hello():
    return 'Hello, World!'
