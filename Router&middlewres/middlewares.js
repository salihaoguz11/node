"use strict";
/* -------------------------------------------------------
    EXPRESSJS - MIDDLEWARES
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

//? Middleware functions must be has three parameters.
//? Last parameter is for next().

//Middleware
app.get("/", (req, res, next) => {
  console.log("Middeware started.");
  // Go to next route:
  next();

  // res.send({
  //     message: "Middleware",
  //   });next ten sonra baska bir komut yazilmaz bu sekilde.
  //Cunku burayi hic gormeden sonrakine gider.
});

//Route-path
app.get("/", (req, res) => {
  console.log("Route started.");
  res.send({
    message: "Welcome",
  });
});

app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
