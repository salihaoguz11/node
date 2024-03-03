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
/* ------------------------------------------------------- *
app.get("/user/:id", (req, res) => {
  const id = req.params.id || 0; //id d'yi req icerisinden aliyoruz.
  // try blogu icine hata alma ihtimali oldugum blok yazilir
  //catch blogu icine ise hata alirsam yapacklarim komutunu yazarim.
  try {
    if (isNaN(id)) {
      throw new Error("ID is not a number");
    } else {
      res.send({
        message: "OK",
        id,
      });
    }
  } catch (err) {
    res.send({
      error: true,
      message: err.message,
    });
  }
});

/* ------------------------------------------------------- */

//*Error Handler
//? errorHandler is middleware and has must be four parameters. (error, request, response, next)

/* ------------------------------------------------------- *

app.get("/*", (req, res) => {
  res.errorStatusCode = 404; // basina res yazarak baska bir yerde cagirabilirim.
  //Bu sekilde disari cikarabilirim.
  throw new Error("Error Message");
});

const errorHandler = (err, req, res, next) => {
  console.log("errorHandler started.");
  const errorStatusCode = res?.errorStatusCode || 500;

  res.status(errorStatusCode).send({
    //status kodu da yolluyorum.
    error: true,
    message: err.message,
  });
};

//? for run errorHandler call in use.
//? It must be at last middleware.
app.use(errorHandler); // bunun eklemezsek app'in haberi olmaz ve fonk calismaz.
/* ------------------------------------------------------- */

/* ------------------------------------------------------- *

app.get("/", (req, res) => {
  throw new Error("Error Message");
});

app.get("/user/:id", (req, res, next) => {
  const id = req.params.id || 0;
  try {
    if (isNaN(id)) {
      throw new Error("ID is not a number");
    } else {
      res.send({
        message: "OK",
        id,
      });
    }
  } catch (err) {
    // next içinde bir hata objesi gönderirsek, errorHandler yakalar.
    next(err);

    // res.send({
    //   error: true,
    //   message: err.message,
    // });
  }
});

const errorHandler = (err, req, res, next) => {
  console.log("errorHandler started.");
  const errorStatusCode = res?.errorStatusCode || 500;

  res.status(errorStatusCode).send({
    //status kodu da yolluyorum.
    error: true,
    message: err.message,
  });
};

//? for run errorHandler call in use.
//? It must be at last middleware.
app.use(errorHandler); // bunun eklemezsek app'in haberi olmaz ve fonk calismaz.
/* ------------------------------------------------------- */

/* ------------------------------------------------------- *
app.get("/*", (req, res) => {
  res.errorStatusCode = 404;
  throw new Error("Error Message", { cause: "No reason" }); //bir obje olarak yazilir
});

const errorHandler = (err, req, res, next) => {
  console.log("errorHandler started.");
  const errorStatusCode = res?.errorStatusCode || 500;

  res.status(errorStatusCode).send({
    //status kodu da yolluyorum.
    error: true,
    message: err.message,
    cause: err.cause, // yukarida cause tanimlandi ve burada cagiririz. Yukarida belirtilmezse calismaz.
    stack: err.stack, // terminalde yazmasini bekledigim hatayi  gostermek icin kullanilir.
  });
};

//? for run errorHandler call in use.
//? It must be at last middleware.
app.use(errorHandler); // bunun eklemezsek app'in haberi olmaz ve fonk calismaz.
/* ------------------------------------------------------- */

//?Asyncrone Error Handling
/* ------------------------------------------------------- */
const asyncFunction = async () => {
  throw new Error("Error in async-function");
};
//*Bir asyncrone fonksiyonu baska bir fonksiyonda kullanacaksam onun da asycrone olmasi gerekir ve
//*ve icinde await kullanmam gerekir.

//? Control with catch(next)
app.get("/async", async (req, res, next) => {
  // await asyncFunction() // eger bu sekilde yazarsam fonksiyon ascync
  //oldugu icin cevabini beklemeden devam ediyor ve hata geride kaliyor ve sistem dagiliyor.
  // bunu engellemek icin then ve catch kullaniyoruz.

  // await asyncFunction().then().catch((err) => { next(err) })) // Catch error by errorHandler.
  await asyncFunction().then().catch(next); // Catch error by errorHandler.
});

/* ------------------------------------------------------- */
/* ------------------------------------------------------- */

/* ------------------------------------------------------- */
//? errorHandler:
//? It must be at last middleware.
// app.use(require("./errorHandler"));
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
