
                                                Planner App
                                            ___________________
The front is built with React/Redux, and the backend is a Spring boot project. The backend connects to a SQL (MariaDB) database.

Users can create a list of tasks which are stored in the database.


                                                Documentation
                                            _____________________
The backend server listens to port 3001 by default. This port number can be changed in application.properties file. The frontend server listens to port 3000.

Create task example:

POST http://127.0.0.1:3001/api/tasks

HEADER: Content-type: application/json

BODY: { 
  "task": "This is task description"
}
