const express = require("express");
const cors = require("cors");

const app = express();

const db = require("./app/models");
const { signup } = require("./app/controllers/auth.controller");
const Role = db.role;

db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Db');
  initial();
});

var corsOptions = {
  origin: "http://localhost:8080"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const path = require('path');

app.use(express.static(__dirname+'/public'))

// simple route
app.get("/", (req, res) => {
  res.sendFile(__dirname+"/public/pages/index.html");
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname+"/public/pages/index3.html");
});

app.get("/signUp", (req, res) => {
  res.sendFile(__dirname+"/public/pages/index2.html");
});

app.get("/entradoUser", (req, res) => {
  res.sendFile(__dirname+"/public/pages/index4.html");
});

app.get("/entradoModerator", (req, res) => {
  res.sendFile(__dirname+"/public/pages/index5.html");
});

app.get("/entradoAdmin", (req, res) => {
  res.sendFile(__dirname+"/public/pages/index6.html");
});

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}