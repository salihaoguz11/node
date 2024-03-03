//* npm init -y
//* npm i express  dotenv
//* gitignore
//*echo PORT=8000> .env
//*nodemon error.toJSON()

"use strict";
/* -------------------------------------------------------/
    EXPRESSJS - ERROR MANAGEMENT
    ------------------------------------------------------- */
const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- *
app.get("/", (req, res) => {
  // console.log(abc)
  //burada ust satiri yazinca hata verecek ve terminal dolacak ve hata thunder da html olarak gelecek.
  //   throw new Error("Error Message");
  //sistemin kendi kendine hata vermesini istemeyiz.Bunu bizim istedigimiz sekilde ayarlamamiz gerekiyor.
  res.send("Hello");
});

/* ------------------------------------------------------- */

/* ------------------------------------------------------- *
app.get("/user/:id", (req, res) => {
  const id = req.params.id || 0; //id d'yi req icerisinden aliyoruz.
  if (isNaN(id)) {
    throw new Error("ID is not a number");
  } else {
    res.send({
      message: "OK",
      id,
    });
  }
});

/* ------------------------------------------------------- */

//?sistemin istedigimiz gibi hata verm,esi icin try-catch kullanabiliriz
/* ------------------------------------------------------- */
app.get("/user/:id", (req, res) => {
  const id = req.params.id || 0; //id d'yi req icerisinden aliyoruz.
  try {
    if (isNaN(id)) {
      throw new Error("ID is not a number");
    } else {
      res.send({
        message: "OK",
        id,
      });
    }
  } catch (err) {}
});

/* ------------------------------------------------------- *
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */

app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));