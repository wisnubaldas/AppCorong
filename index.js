const express = require("express");
const app = express();
const path = require("path");
const sqlite3 = require("sqlite3").verbose();

const db_name = path.join(__dirname, "data", "apptest.db");
const db = new sqlite3.Database(db_name, err => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Successful connection to the database 'apptest.db'");
});

app.listen(3000, () => {
  console.log("Server started (http://localhost:3000/) !");
});

app.get("/", (req, res) => {
    //   res.send ("Hello world...");
    res.render("index");
});

app.set("view engine", "ejs");
// app.set("views", __dirname + "/views");

app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));