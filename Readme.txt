- To run this assignmenet first you need to make sure that
  mongodb service is running on your machine.
  For mongodb configuration plz check the ./config/default.json file.

- To start the nodejs server run the below command on console.
  $ npm start

- To run all the unit test cases run the below command on console.
  $ npm test

API description:
----------------

- Student:
     1. Add
        API: http://localhost:8090/api/student
        METHOD: POST
        PAYLOAD: {
            "roll_no": 2,
            "fname":"Rahul",
            "lname": "Shelake",
            "class": "10",
            "address": "5e4e88001a760f0f757b609d",
            "parent_contact_no": 9700000000
        }
    
    2. Get all student
        API: http://localhost:8090/api/student
        METHOD: GET

    3. Get single student
        API: http://localhost:8090/api/student/{id}
        METHOD: GET
    
    4. Update student
        API: http://localhost:8090/api/student/{id}
        METHOD: PUT
        PAYLOAD: {
            "fname":"Rahul",
            "lname": "Shelake",
            "class": "10",
            "address": "5e4e88001a760f0f757b609d",
            "parent_contact_no": 9700000000
        }
    
    5. Delete student
        API: http://localhost:8090/api/student/{id}
        METHOD: Delete


- Address:
     1. Add
        API: http://localhost:8090/api/address
        METHOD: POST
        PAYLOAD: {
            "state": "Maharashtra",
            "district" : "Solapur",
            "pin": 413251,
            "landmark": "Hanuman Temple",
            "housename": "Sai Krupa",
            "housenumber": 01
        }
    
    2. Get all address
        API: http://localhost:8090/api/address
        METHOD: GET

    3. Get single address
        API: http://localhost:8090/api/address/{id}
        METHOD: GET
    
    4. Update address
        API: http://localhost:8090/api/student/{id}
        METHOD: PUT
        PAYLOAD: {
            "state": "Maharashtra",
            "district" : "Mumbai",
            "pin": 413251,
            "landmark": "Hanuman Temple",
            "housename": "Sai Krupa apt",
            "housenumber": 02
        }
    
    5. Delete address
        API: http://localhost:8090/api/student/{id}
        METHOD: DELETE
