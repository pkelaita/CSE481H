# CSE481H

### Running the project
* Running the server
    * Navigate to the root directory of this project, then `cd server`
    * Ensure that Python > 3.7 is installed
    * Activate a virtual environment (not required, but reccommended)
        * `python3 -m pip install virtualenv`
        * `python3 -m venv venv`
        * `source venv/bin/activate`
    * Install requirements: `make bootstrap`
    * Run on port 5000: `make server`
* Running the client
    * Navigate to the root directory of this project, then `cd server`
    * Install requirements: `npm i`
    * Run on port 3000: `npm start`