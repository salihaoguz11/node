"use strict";

//Node Js Server Olusturma

// console.log("Holle");

require("dotenv").config(); //env file dan verileri alir ve process.env ye ekler.;
// const PORT = process.env.PORT;
// const HOST = process.env.HOST;

const PORT = process.env?.PORT || 8000;
const HOST = process.env?.HOST || "127.0.0.1";

// const http = require("http");
// sadece bu sekilde yazarsam once node modules klasorune
//bakar http var mi diye ama bulamazsa o zaman global'e bakar.

const http = require("node:http");

// Bu sekilde yazarsam yolunu kisaltmis oluyorum.
//Bulid in oldugunu gostermis oluyorum.
/*
// http.createServer((param1, param2) => {
//   //2 tane parametre ve call back function alir.
//   //1.parametrenin karsilgi requesttir.Ikincinin
//   //ise response'dur. Burada sira onemli ama isim onemli degildir.
// });

// http.createServer((request,response)=>{

// })

//1.yol
http
  .createServer((req, res) => {
    //Genelde bu sekilde yazilir(req,res).
    res.end(`<h1>welcome to node js server</h1>`);
    //eger res.end()komutunu yazmazsak sayfa hep loading'de kalir. Bu requesti sonlandirmak gerekir.
  })
  // .listen(8000, () => console.log("server run:http://127.0.0.1:8000"));
  //.listen(8000, () => console.log(`server run:http://${HOST}:${PORT}`)); //buradaki 8000 port numarasi yani sanal yollardan biri. Node genelde best practise olarak 8000
  //numarali portu kullanir. Mesela reactta genelde 3000 nolu port kullanilir.Daha sonra bir call back function yaziyoruz ve server'in calisip calismadigini kontrol ediyoruz.
  //Bu server local de calisiyor. Localin id 127.0.0.1 dir.
  .listen(8000, () => console.log(`server run:http://localhost:8000`));
*/

//2.yol -best practise
const app = http.createServer((req, res) => {
  // console.log(req);
  console.log(req.method);
  console.log(req.url);
  res.end(`<h1>welcome to node js server</h1>`);
});
app.listen(8000, () => console.log(`server run:http://localhost:8000`));
