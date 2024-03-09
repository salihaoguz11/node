"use strict";
/* -------------------------------------------------------
   BLOG API with Mongoose
------------------------------------------------------- */
const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST;

/* ------------------------------------------------------- */

/* ------------------------------------------------------- */
app.use(express.json()); //yukarida kalmali.

/* ------------------------------------------------------- */
/* ------------------------------------------------------- */

app.all("/", (req, res) => {
  res.send("Welcome to blog Api");
});
app.use(require("./src/errorHandler"));
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log(`Running: http://${HOST}:${PORT}`));
