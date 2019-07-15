To create restful api in nodejs ...
1) Install required packages for restful api like express, mongoose, body-parser
    npm install --save express mongoose body-parser
2) Then create a server.js file.
3) Use nodemon for tracking live changes in your program. You never need to restart your
application. Nodemon can automatically refresh the server.
To install nodemon type the following command : npm install --save nodemon
Then go to packages.json in scripts add key and value :
    "start": "nodemon <filename.js>" (NOte: <> are use for syntax only add the filename of your starting point file from where your server is started)

Then start your project by typing this command in terminal : npm start
// FOR API creation...
https://www.zeptobook.com/how-to-create-restful-crud-api-with-node-js-mongodb-and-express-js/


After creating schema, models and controllers ...
import routes to the main server file.
Then enable cors....