# CSE481H

* Required installations
    * Python >= 3.7
    * Node / npm >= ????
    * GNU Make
* Running the server
    * Navigate to the root directory of this project
    * Activate a virtual environment (not required, but reccommended)
        * `python3 -m pip install virtualenv`
        * `python3 -m venv venv`
        * `source venv/bin/activate`
    * Install requirements: `make bootstrap`
    * Run on port 5000: `make server`
* Running the client
    * Navigate to the root directory of this project, then `cd client`
    * Install requirements: `npm i`
    * Run on port 3000: `npm start`