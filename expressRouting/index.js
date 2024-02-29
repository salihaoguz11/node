"use strict";

//!Express js routing

//npm init -y
//npm i dotenv
//npm i express
require("dotenv").config();

const PORT = process.env?.PORT || 8000;
const HOST = process.env?.HOST || "127.0.0.1";

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  //   res.write("hello");
  //   res.end();
  /* res.write(
    JSON.stringify({
      message: "hello",
    })
  );
  res.end();
*/
  /*
  res.send({
    //?tercih edilen. Node js'de res end gibi sondaki islemi yapiyor.
    //?ama otomatik olarak veriyi json formati olarak gonderiyor.
    message: "hello2",
  });
  res.send("hello fs15"); //birden fazla send mesaji anlamsiz 
  */
});
// app.post("/", (req, res) => {
//   res.send({ message: "POST method called" });
// });

// app.put("/", (req, res) => {
//   res.send({ message: "PUT method called" });
// });
// app.delete("/", (req, res) => {
//   res.send({ message: "DELETE method called" });
// });
/*
app.all("/", (req, res) => {
  res.send({ message: "ALL method called" });
});
//?butun methodlari calistirir. Hangi methodla istek atilirsa atilsin calisir.
//?Routing yaparken siralamaya dikkat etmek lazim.Ustte yazilani alir once. Mesela app.all()
//?uste yazarsak onu alir. Alttakileri almaz.
*/
// app.get("/drive1/drive2", (req, res) => {
//   res.send({ message: "GET method called" });
// });

//!joker characters
/*app.get("/ab(x)?12", (req, res) => {
  res.send({ message: " ab12 or abx12" });//araya x yada yok. abx12 yada ab12
});
app.get("/ab(x)+12", (req, res) => {
  res.send({ message: " abx......x12" }); //araya istedigin kadar x gelir.
});
*/
app.listen(PORT, HOST, () => console.log(`Server run http://${HOST}:${PORT}`));
