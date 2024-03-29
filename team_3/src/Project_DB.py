def get_database():
	from pymongo import MongoClient
	import pymongo

	# Provide the mongodb atlas url to connect python to mongodb using pymongo
	CONNECTION_STRING = 'mongodb+srv://Michelle:Morales@cluster0.y67scyk.mongodb.net/'

	# Create a connection using MongoClient. You can import MongoClient or use pymongo.MongoClient
	client = MongoClient(CONNECTION_STRING)

	# Create the database for our example (we will use the same database throughout the tutorial
	return client['Project_Database']

def user_exists(user):
    print("Processing does user exist")
    dbname = get_database()
    collection_name = dbname["Users"]
    myquery = {"Username": user}
    queryresult = collection_name.find_one(myquery)
    if queryresult == None:
        return '-1'
    else:
        return '1'
	 

def write_user_db(user, userID, password):
    print("Processing write user")
    dbname = get_database()
    collection_name = dbname["Users"]
    user_post = {"Username": user,
                "UserID": userID,
                "Password": password,
                }
    collection_name.insert_one(user_post)
		
	
def read_user_db(user, userID, password): #check if username and password match
    print("Processing read user")
    dbname = get_database()
    collection_name = dbname["Users"]
    myquery = {"Username": user}
    queryresult = collection_name.find_one(myquery)
    if queryresult == None:
         return '-1'
    elif(queryresult['UserID'] == userID and queryresult['Password'] == password):
         return '1'	
    else:
         return '-1'  
    
def read_HWSet(hw_name):
    print("Processing read HW Set")
    dbname = get_database()
    collection_name = dbname["HWSets"]
    myquery = {"HW_name": hw_name}
    queryresult = collection_name.find_one(myquery)
    print(queryresult['total'], queryresult['available'])
    return queryresult['total'], queryresult['available'] #return array [total, available]

def checkIn_HWSet(hw_name, qty):
    print("Processing check in HW Set")
    dbname = get_database()
    collection_name = dbname["HWSets"]
    myquery = {"HW_name": hw_name}
    queryresult = collection_name.find_one(myquery)
    if (queryresult['available'] + int(qty)) > queryresult['total']:
        collection_name.update_one({'HW_name' : hw_name}, {"$set": {'available' : queryresult['total']}})
    else:
        collection_name.update_one({'HW_name' : hw_name}, {"$set": {'available' : (queryresult['available'] + int(qty))}})


def checkOut_HWSet(hw_name, qty):
    print("Processing check in HW Set")
    dbname = get_database()
    collection_name = dbname["HWSets"]
    myquery = {"HW_name": hw_name}
    queryresult = collection_name.find_one(myquery)
    if (queryresult['available'] - int(qty)) < 0:
        collection_name.update_one({'HW_name' : hw_name}, {"$set": {'available' : 0}})
    else:
        collection_name.update_one({'HW_name' : hw_name}, {"$set": {'available' : (queryresult['available'] - int(qty))}})



def projectExists(id):
    print("Processing if project exists")
    dbname = get_database()
    collection_name = dbname["Projects"]
    myquery = {"ProjectID" : id}
    queryresult = collection_name.find_one(myquery)
    if queryresult == None:
        return 1
    else:
        return -1

    
def createProject(name, id, description):
    print("Creating project")
    dbname = get_database()
    collection_name = dbname["Projects"]
    project_post = {"Name": name,
                    "Description": description, 
                    "ProjectID": id}
    collection_name.insert_one(project_post)

def getProject(id):
    print("Retrieving Project")
    dbname = get_database()
    collection_name = dbname["Projects"]
    myquery = {"ProjectID":id}
    queryresult = collection_name.find_one(myquery)
    return queryresult["Name"], queryresult["Description"]



    
    
	
# class Project_DB():
#     if __name__ == "__main__":	
        
#         # Get the database
#         dbname = get_database()

#         # Create a new collection
#         collection_name = dbname["Projects"]

#         # Create the first document
#         Project1 = {
#         "Name" : "Michelle",
#         "Description" : "Project for Michelle",
#         "ProjectID" : "1000"
#         }

#         # Create the second document
#         Project2 = {
#         "Name" : "Michelle2",
#         "Description" : "Project for Michelle2",
#         "ProjectID" : "2000"
#         }
        
#         # Insert both the documents at once using insert_many()
#         collection_name.insert_many([Project1, Project2])

