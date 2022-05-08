const express = require("express");
const app = express();

app.get("/", function(req, res) {
  res.send("<h1>Natashka!!!!!</h1>");
});

app.get("/contact", function(req, res) {
  res.send("Contact me at nata@kir.com");
});

app.get("/about", function(req, res) {
  res.send("I am Natasha, big lover of mountains, helicopters and kids. " +
"Let's hang out together some time to have fun!");
});

app.get("/pets", function(req, res) {
  res.send("Raddish and Carrot!");
});

app.listen(3000, function() {
  console.log("Server starts on port 3000");
});
