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

@app.route("/get_HWSet/", methods=["POST"])
def get_HWSet():
    print('HWSet request working')
    data = request.json
    name = data['HW_name']
    HWSet = Project_DB.read_HWSet(name)
    return json.dumps({'total': HWSet[0], 'available' : HWSet[1]})

@app.route('/checkIn_hardware', methods=['POST'])
def checkIn_hardware():
    data = request.json
    set = data['setName']
    qty = data['qty']

    print('Recieved Qty:', qty)
    Project_DB.checkIn_HWSet(set, qty)
    return json.dumps({'qty': qty})

@app.route('/checkOut_hardware', methods=['POST'])
def checkOut_hardware():
    data = request.json
    set = data['setName']
    qty = data['qty']

    print('Recieved Qty:', qty)
    Project_DB.checkOut_HWSet(set, qty)
    return json.dumps({'qty': qty})

@app.route('/createProject', methods=["POST"])
def createProject():
    data = request.json
    name = data['projectName']
    id = data['projectID']
    descript = data['description']

    result = Project_DB.projectExists(id)
    if result == 1:
        Project_DB.createProject(name, id, descript)
        return '1'
    elif result == -1:  # denotes that the name and id combo exists
        return '-1'
    
global idInput
@app.route('/id/', methods=["POST"])
def checkOut_project():
    data = request.json
    global idInput
    idInput = data['projectID']
    return '1'

@app.route("/name_description/", methods=["GET"])
def getNameAndDescription():
    result = Project_DB.projectExists(idInput)
    if result == -1: # the project exists
        name, description = Project_DB.getProject(idInput)
        return json.dumps({'projectName':name, 'description':description})
    else:
        return json.dumps({'projectName':"Not available", 'description':"N/A"})



    

if __name__ == '__main__':
    app.run(host="0.0.0.0", debug=False, port=os.environ.get("PORT", 80))