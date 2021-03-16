const express = require("express");
var indexRouter = require('./index');
var homeRouter = require("./home");
var usersRouter = require("./users");

module.exports = function(app) {
  app.use(express.json());
  app.use("/", indexRouter);
  app.use("/users", usersRouter);
  app.use("/home", homeRouter);
};