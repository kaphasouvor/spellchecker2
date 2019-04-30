// creating an express app/load express module.
const express = require('express');

// exports from data.js file
const users = require('./data.js');

const getemail = require("./getemail.js");

// function call that creates an app object. Can name 'app' anything.
const app = express();

console.log(users);

// function getemail(name){
//   const user = users.filter(userObj=>{
//     return userObj.name === name
//   })
//   return user[0].email
// }
 console.log("Email: ", getemail(users, "Jason"));
// });



//get user name by email
app.get("/getemail", (req, res) =>{
    const name = req.query.name;
    const email = getemail(users, name);
    res.send(email);
});

// get user by index
app.get("/getuser", function(req, res) {
    // getting request from browser
    const index = req.query.index;
    const oneUser = users[index]; // getting user object
    res.send(oneUser);
});

// using get method from app. Function request respose.
// using request(input) object to take in a file.
// response (output).
// app.get ("/", (req, res) =>{ }
app.get("/greet", function(req, res) {
    // getting request from browser
    const userName = req.query.user;
    res.send("Helloooo " + userName + "!");
});

app.get("/goodbye", function(req, res) {
    // getting request from browser
    const userName = req.query.user;
    res.send("Goodbye " + userName + "!");
});

app.get("/weather", function(req, res) {
    // getting request from browser
    const userName = req.query.user;
    res.send("How is the weather, " + userName + " ?");
});

// process.env.PORT port is the door gateway
const port = 8080;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
