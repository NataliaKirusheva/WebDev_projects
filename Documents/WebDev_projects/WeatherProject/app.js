const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req, res) {
  const url = "https://api.openweathermap.org/data/2.5/weather?q=Paris&units=metric&appid=09e4f3e2db7a54595263e6dacae0bbdc";
  https.get(url, function(response) {
    console.log(response.statusCode);

    response.on("data", function(data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const description = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

      console.log(temp);
      console.log(description);

      res.write("<h1>The Weather is currently " + description+"<h1>");
      res.write("<h1>The temperature in Paris is " + temp + " degrees by Celcius</h1>")
      res.write("<img src=" + imageUrl + ">");
      res.send();
    })
  })
})

app.listen(3000, function() {
  console.log("App is running on port 3000")
})
