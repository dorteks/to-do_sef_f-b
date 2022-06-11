const express = require("express");
const Joi = require("joi");
const { validate } = require("uuid");
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => "server is listening on port " + PORT);

app.set("view engine", "ejs");
app.set("views", "views");

// //front end
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/home", (req, res) => {
  res.redirect("/");
});

app.get("/about-us", (req, res) => {
  res.render("about.ejs");
});

app.get("/contact-us", (req, res) => {
  res.render("contact.ejs");
});

app.get("/score-keeper", (req, res) => {
  res.render("scorekeeper.ejs");
});

app.get("/todolist", (req, res) => {
  res.render("todolist.ejs");
});
