from flask import Flask, send_from_directory,request,json
from flask_cors import CORS
import json
import os
import src.Project_DB as Project_DB

app = Flask(__name__, static_folder="./build", static_url_path="/")
CORS(app)

global firstNameInput

@app.route("/", methods=["GET"])
def index():
    return send_from_directory(app.static_folder, "index.html")


@app.route("/sign_up/", methods=["POST"])
def sign_up():
    print('post request working')
    data = request.json
    userInput = data['user']
    userIDInput = data['userID']
    passwordInput = data['password']
    if(Project_DB.user_exists(userInput) == '1'):
        return '-1' #username already exists, sign up fails
    else:
        Project_DB.write_user_db(userInput, userIDInput, passwordInput)
        return '1'      #sucessfully signs up

@app.route("/log_in/", methods=["POST"])
def Log_in():
    print('post request working')
    data = request.json
    userInput = data['user']
    userIDInput = data['userID']
    passwordInput = data['password']
    if(Project_DB.read_user_db(userInput, userIDInput, passwordInput) == '1'):
        return '1'      #log in successful
    else:
        return '-1'     #log in fail

@app.route("/lastname/", methods=["GET"])
def lastName():
    print('GET request working')
    nameList = {"Abhay": "Samant"}
    returnValue = ""

    for firstName in nameList:
        if (firstNameInput == firstName):
            returnValue = nameList[firstName]
        else:
            returnValue = "User Not Found"

    return json.dumps({'lastname':returnValue})

if __name__ == '__main__':
    app.run(host="0.0.0.0", debug=False, port=os.environ.get("PORT", 80))