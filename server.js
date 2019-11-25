var express = require("express");
var mongoose = require("mongoose");

var PORT = 3000;

var User = require("./userModel.js");
mongoose.connect("mongodb://localhost/userSchema", { useNewUrlParser: true });

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.post("/submit", function(req, res) {
  User.create(req.body)
    .then(function(data) {
      res.json(data);
    })
    .catch(function(err) {
      res.json(err);
    });
});

app.listen(PORT, function() {
  console.log("We are listeing on port 3000!");
});
