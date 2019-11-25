var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    required: "Username is Required",
    trim: true
  },
  password: {
    type: String,
    required: "Password is Required",
    trim: true,
    validate: [
      function(input) {
        return input.length >= 6;
      },
      "Password should contain more than 6 characters"
    ]
  },
  email: {
    type: String,
    match: [/.+@.+\..+/, "Please enter a proper email"]
  },
  userCreated: {
    type: Date,
    default: Date.now
  }
});

var User = mongoose.model("User", UserSchema);

module.exports = User;
