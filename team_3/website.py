from flask import Flask

app = Flask(__name__)

users = {
    "vmn358":"duckiemomo", 
    "bob123":"joe456"
}

@app.route('/login')
def login():
    return 'Testing 1 2 3'

# @app.route('/username/', methods=["POST"])
# def u_ser():
#     data = request.json
#     global user
#     user = data['username']
#     print(user)
#     return '1'

# @app.route('/password/', methods=["GET"])
# def pwd():
#     username = request.form['username']
#     password = request.form['password']

#     for un in users:
#         if(user == un):
#             return json.dumps({'password':users[un]})
#         else: json.dumps({"User not Found"})


# @app.route('/username/', methods = ['GET', 'POST'])
# def LogIn():
#     if request.method == 'GET':
#         username = request.form['username']
#         password = request.form['password']

#         if username in users and users[username] == password:
#             return
#         else:
#             return "Invalid Login"
#     return




@app.route('/signup', methods=['POST'])
def SignUp():
    if request.method == 'POST':
        username = request.form['userName']
        password = request.form['password']
        confirm_password = request.form['confirm_password']
        if username in users:
            return "Username already in use"
        elif password != confirm_password:
            return "Passwords do not match"
        else: 
            users[username] = password   #this inserts the combination into the users dictionary
            return "Signup Successful"

    return