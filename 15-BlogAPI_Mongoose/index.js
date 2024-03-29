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

//!DB Connection
require("./src/dbConnection"); // app use demedik. Bir defa calisacak ve bitecek.
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */

app.all("/", (req, res) => {
  res.send("Welcome to blog Api");
});
app.use("/blog", require("./src/routes/blog.route.js"));
//blog path'ine istek atildigi zaman seklinde yaziyoruz.
app.use(require("./src/errorHandler.js")); // aşağıda kalsın
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log(`Running: http://${HOST}:${PORT}`));
