
var express = require("express");
var bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {

  var num1 = Number(req.body.n1);
  var num2 = Number(req.body.n2);
  var result = num1 + num2;

  res.send("Result of calculation is " + result);
});

// bmicalculator

app.get("/bmicalculator", function(req, res) {
  res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmicalculator", function(req, res) {

  var w = parseFloat(req.body.weight);
  var h = parseFloat(req.body.height);
  var result = w/(h*h);
  res.send("Your BMI: " + result);
});

app.listen(3000, function() {
  console.log("Server starts on port 3000");
});
