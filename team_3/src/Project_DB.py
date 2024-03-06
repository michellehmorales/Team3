def get_database():
	from pymongo import MongoClient
	import pymongo

	# Provide the mongodb atlas url to connect python to mongodb using pymongo
	CONNECTION_STRING = 'mongodb+srv://Michelle:Morales@cluster0.y67scyk.mongodb.net/'

	# Create a connection using MongoClient. You can import MongoClient or use pymongo.MongoClient
	client = MongoClient(CONNECTION_STRING)

	# Create the database for our example (we will use the same database throughout the tutorial
	return client['Project_Database']
	
class Project_DB():
    if __name__ == "__main__":	
        
        # Get the database
        dbname = get_database()

        # Create a new collection
        collection_name = dbname["Projects"]

        # Create the first document
        Project1 = {
        "Name" : "Michelle",
        "Description" : "Project for Michelle",
        "ProjectID" : "1000"
        }

        # Create the second document
        Project2 = {
        "Name" : "Michelle2",
        "Description" : "Project for Michelle2",
        "ProjectID" : "2000"
        }
        
        # Insert both the documents at once using insert_many()
        collection_name.insert_many([Project1, Project2])

