//jshint esversion:6
// To run DB use --> mongod --dbpath /Users/nata/data/db/ --bind_ip 127.0.0.1 --noauth

require('dotenv').config()
const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const encrypt = require("mongoose-encryption");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// find out which other process is running on Mac:
// ps -eaf | grep mongod
// To stop this process use terminal command --> kill -2 [722732] (number of process in brackets, remove brackets)

// mongoose.connect("mongodb+srv://admin-sasha:Sasha123Test@cluster0.2dc10pe.mongodb.net/wikiDB");
mongoose.connect("mongodb://localhost:27017/userDB");

const userSchema = new mongoose.Schema ({
  email: String,
  password: String
});

// When password just stored to DB as is --> it is Level 1 of Security
// Here is Password encrypted in DB using mongoose-encryption package (Level 2 of Security)


userSchema.plugin(encrypt, {secret: process.env.SECRET, encryptedFields: ["password"]});

const User = mongoose.model("User", userSchema);

app.get("/", function(req, res) {
  res.render("home");
});

app.get("/register", function(req, res) {
  res.render("register");
});

app.get("/login", function(req, res) {
  res.render("login");
});

app.post("/register", function(req, res){

  const user = new User({
    email: req.body.username,
    password: req.body.password
  });

  user.save(function(err) {
    if(err) {
      console.log(err);
    } else {
      res.render("register");
    }
  });
});

app.post("/login", function(req, res) {

const username = req.body.username;
const password = req.body.password;

  User.findOne({email: username}, function(err, foundUser) {
    if(!err) {
      if(foundUser) {
        if(foundUser.password === password) {
          res.render("secrets");
        }
      }
    }
  })
});



app.listen(3000, function() {
  console.log("Connection is successful on port 3000");
})
