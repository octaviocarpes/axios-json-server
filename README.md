# This repository have an example of HTTP requests using axios!
Axios is a Javascript lib that can be used to make HTTP requests and also use the promise feature!
This program was made with 3 more libraries, concurrently, live-server and json-server. Those libraries can run a fake API that listens the HTTP requests made through axios.

## Before you start using the program:
The response from our fake API is based on a file named "db.json", so you gotta erase all its data and type {employees[]} if you want to inser employees data. This file contains the data from our "database", that means that every POST we make is going to insert the values of the JSON into this file.<br>
      For Example, if we make a POST with the following values:<br>
      "id": 1,<br>
      "first_name": "Sebastian",<br>
      "last_name": "Kappan",<br>
      "email": "sebastiankappan@gmail.com"<br>
Then in our db.json file we will have the same values like this:<br>
{<br>
  "employees": [<br>
    {<br>
      "id": 1,<br>
      "first_name": "Sebastian",<br>
      "last_name": "Kappan",<br>
      "email": "sebastiankappan@gmail.com"<br>
    }<br>
  ]<br>
}<br>


## How to start the project:
1 - clone the repository into a empty folder.<br>
2 - navigate to the repository and open a terminal.<br>
3 - use the following command: npm run start-dev <br>

Then a webpage will open and you are ready to go! Use this program to learn all the features from axios ;)<br>
<br>
P.S: This program was inspired by https://medium.com/codingthesmartway-com-blog/getting-started-with-axios-166cb0035237
