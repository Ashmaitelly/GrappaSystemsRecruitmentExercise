Website: https://ashmaitelly.github.io/spa/

Instructions for setting up and running locally:

Database:
1-run php my admin in xampp
1- create a database named 'grappasystems' 
2- import data from the provided sql file

API:
1- open the solution in visual studio 2019
2- select WebAPI instead of IIS Express and run

SPA:
1-Install node if you haven't
2-open the spa directory in command line
3-run 'npm install' command to install the requires dependancies
4- create a .env file in the spa directory with the following line 'REACT_APP_API=http://localhost:5000/'
5-run 'npm start' to start the app with xampp and the api running in the background



