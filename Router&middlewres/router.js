"use strict";
/* -------------------------------------------------------
    EXPRESSJS - ROUTING
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

//? "Router" is special app for URL control in ExpressJS.

// const router = express.Router();

//?Route tanimlama 1.yontem
/*
router.get("/", (req, res) => {
  res.send({ message: "Home area" });
});
router.post("/", (req, res) => {
  res.send({ message: "post" });
});
router.put("/", (req, res) => {
  res.send({ message: "put" });
});
router.delete("/", (req, res) => {
  res.send({ message: "delete" });
});
// alt kisimi yazdiktan sonra sayfanin altina alttaki stairlari ekleriz.
app.use(router);
app.listen(8000, () => console.log(`server run:http://127.0.0.1:8000`));
*/

//?Route tanimlama 2.yontem
/*
//?tek bir url ye birden fazla method tanimlayabilirim.
//?Bu sekilde butun metodlari bir araya topladik.
//?router.route()
router
  .route("/")
  .get((req, res) => res.send({ message: "get" }))
  .post((req, res) => res.send({ message: "post" }))
  .put((req, res) => res.send({ message: "put" }))
  .delete((req, res) => res.send({ message: "delete" }));
  //? After finished router-design, it will call like middleware:
*/
const router = require("./routes/index");
// const router = require('./routes/index')
// const router = require('./routes/')
//? Move to /routes/index.js:

app.use(router);
app.listen(8000, () => console.log(`server run:http://127.0.0.1:8000`));
