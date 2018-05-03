const mongoose = require("mongoose");
const User = require("../models/user");

const userController = {};

userController.list = function(req, res) {
  User.find({}).exec(function(err, users) {
    if (err) {
      console.log("Error:", err);
    } else {
      res.render("users/index", { users });
    }
  });
};

userController.edit = function(req, res) {
    res.render("users/create");
  };
  
  userController.create = function(req, res) {
    var user = new User(req.body);
  
    user.save(function(err, newUser) {
      if (err) {
        console.log(err);
        res.status(500);
        res.json(err);
      } else {
        console.log("Successfully created a user.");
        res.json(newUser);
      }
    });
  };

module.exports = userController;

