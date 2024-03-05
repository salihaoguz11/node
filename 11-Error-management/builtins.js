"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BUILTIN MIDDLEWARES
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
//* DATA RECEIVING:
//? Accept JSON and convert to object:
app.use(express.json());
//? Accept TEXT:
app.use(express.text());
//? Accept Form-Data:
// extended must be define. (if true, it supported nested form-data.)
app.use(express.urlencoded({ extended: false }));
//Bu kod olmadan form datayi alamaz.Array'i  algilamasi icin true yapiyoruz.

//* Allow staticfiles:
// Call staticFiles from real-path
//Css ve static JS dosyalari,resimleri kolaylikla yollayamam.
//Bu tur dosayalri express/e bildirmem lazim.
app.use("/static", express.static("./public/images"));
// http://127.0.0.1:8000/static/monalisa.jpg -bunu taraciya yazinca resimi goruruz.

app.all("/", (req, res) => {
  res.send({
    body: req.body, // bu sekilde gonderilmis bir veriyi alabiliyorum.
    message: "Hello",
  });
});

/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
