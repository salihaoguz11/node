"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
/*
 * $ npm init -y
 * $ npm i express dotenv express-async-errors
 * $ npm i mongoose
 */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
// TEMPLATE:

// Default: open and close delimiter -> <% ... %>
// const ejs = require('ejs')
// ejs.delimiter = '#' // <# ... #>
// ejs.openDelimiter = '{' // {# ... #>
// ejs.closeDelimiter = '}' // {# ... #}

app.set("view engine", "ejs");
app.set("view options", {
  // delimiter: '%',
  openDelimeter: "{",
  closeDelimeter: "}",
});
app.set("views", "./public");

/* ------------------------------------------------------- */
// SessionCookies:
// http://expressjs.com/en/resources/middleware/cookie-session.html
// https://www.npmjs.com/package/cookie-session
//* $ npm i cookie-session
const session = require("cookie-session");
app.use(
  session({ secret: process.env.SECRET_KEY || "secret_keys_for_cookies" })
);
/* ------------------------------------------------------- */
// Accept json data & convert to object:
app.use(express.json());

// Connect to MongoDB with Mongoose:
require("./src/dbConnection");

// Searching&Sorting&Pagination:
app.use(require("./src/middlewares/findSearchSortPage"));

// HomePage:
app.all("/", (req, res) => {
  res.redirect("/views/blog/post");
  //   res.send("WELCOME TO BLOG API");
});

// Routes: // VIEWS:
app.use("/views/user", require("./src/routes/views/userRoute"));
app.use("/views/blog", require("./src/routes/views/blogRoute"));

// Routes: // API:
app.use("/api/user", require("./src/routes/api/userRoute"));
app.use("/api/blog", require("./src/routes/api/blogRoute"));

/* ------------------------------------------------------- */
// Synchronization:
// require('./src/sync')()

// errorHandler:
app.use(require("./src/errorHandler"));

app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
