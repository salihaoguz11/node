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
require("./src/configs/dbConnection.js"); // app use demedik. Bir defa calisacak ve bitecek.
/* ------------------------------------------------------- */

/* ------------------------------------------------------- */
// SessionCookies:
// http://expressjs.com/en/resources/middleware/cookie-session.html
// https://www.npmjs.com/package/cookie-session
//* $ npm i cookie-session

const session = require("cookie-session");
app.use(
  session({
    secret: process.env.SECRET_KEY, // sifreleme anahtari
    // maxAge: 1000 * 60 * 60 * 24 * 3  // miliseconds // 3 days
  })
);

/* ------------------------------------------------------- */

/* ------------------------------------------------------- */

app.all("/", (req, res) => {
  res.send("Welcome to blog Api");
});
app.use("/blog", require("./src/routes/blog.router.js"));
app.use("/user", require("./src/routes/user.router.js"));
//blog path'ine istek atildigi zaman seklinde yaziyoruz.
app.use(require("./src/middlewares/errorHandler.js")); // aşağıda kalsın
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log(`Running: http://${HOST}:${PORT}`));
// require("./src/sync")();
