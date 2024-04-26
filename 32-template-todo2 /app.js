"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
// Accept json data and convert object:
app.use(express.json());

// Accept form-urlencoded and convert to object:
app.use(express.urlencoded({ extended: true }));

// Catch async-errors:
require("express-async-errors");
/* ------------------------------------------------------- */
//* TEMPLATE - EJS
// $ npm i ejs
// https://ejs.co/
// https://www.npmjs.com/package/ejs
// https://github.com/mde/ejs/wiki/Using-EJS-with-Express

// Setting template engine:
// console.log(app)
app.set("view engine", "ejs");

// default template folder: ./views/
app.set("views", "./public");

app.all("/", (req, res) => {
  // API:
  // res.send({
  //     message: 'Hello'
  // })
  // View Template:
  // call ejs file in ./views/
  // res.render('index.ejs')
  res.render("index");
});

/* ------------------------------------------------------- */
// Routes:

app.use("/api", require("./app/routes/todo.router"));
app.use("/view", require("./app/routes/todo.view.router"));

/* ------------------------------------------------------- */
// ErrorHandler:
app.use(require("./app/errorHandler"));
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
