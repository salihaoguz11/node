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
//! SessionCookies:
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

//!Middlewares
// Check logined User:
// app.use(require("./src/middlewares/userControl"));
// Filter, Search, Sort, Pagination:
app.use(require("./src/middlewares/errorHandler.js"));
app.use(require("./src/middlewares/findSearchSortPage.js"));

/* ------------------------------------------------------- */
app.all("/", (req, res) => {
  // res.send('WELCOME BLOG API PROJECT')
  if (req.isLogin) {
    res.send({
      error: false,
      message: "WELCOME BLOG API PROJECT",
      session: req.session,
      user: req.user,
    });
  } else {
    res.send({
      error: false,
      message: "WELCOME BLOG API PROJECT",
      session: req.session,
    });
  }
});

app.use("/blog", require("./src/routes/blog.router.js"));
app.use("/user", require("./src/routes/user.router.js"));
//blog path'ine istek atildigi zaman seklinde yaziyoruz.
/* ------------------------------------------------------- */
app.use(require("./src/middlewares/errorHandler")); // aşağıda kalsın
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log(`Running: http://${HOST}:${PORT}`));
// require("./src/sync")();
