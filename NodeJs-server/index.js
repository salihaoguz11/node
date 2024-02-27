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
  // console.log(req.method);
  // console.log(req.url);

  //End Points home:/,list:/list, test:/test

  // if (req.url == "/") {
  //   res.end(`<h1>Home Page</h1>`);
  //   // res.end(`<h1>welcome </h1>`);//burada ilk satirdaki end'i  alir bu satiri almaz.
  //   //birinci satirdan sonra ise hata veriri.
  // } else if (req.url == "/list") {
  //   res.end(`<h1>List Page</h1>`);
  // } else if (req.url == "/test") {
  //   res.end(`<h1>Test Page</h1>`);
  // }

  //Multiple end points

  // if (req.url == "/") {
  //   res.write("This");
  //   res.write(" is ");
  //   res.write("home ");
  //   res.write("page ");
  //   res.end();

  // } else if (req.url == "/list") {
  //   res.end(`<h1>List Page</h1>`);
  // } else if (req.url == "/test") {
  //   res.end(`<h1>Test Page</h1>`);
  // }

  //add methods
  if (req.url == "/") {
    if (req.method == "GET") {
      res.write("This");
      res.write(" is ");
      res.write("home ");
      res.write("page ");
      res.end();
    } else if (req.method == "POST") {
      res.statusCode = 400; //default 200
      res.statusMessage = "You cannot post";
      res.end("can not use this method.");
    } else if (req.method == "DELETE") {
      res.writeHead(405, "you can not delete", {
        "Content-Type": "text/html",
        "another-header": "another-content",
      });
      res.end("can not use this method");
    } else res.end("can not use this method");
  } else if (req.url == "/list") {
    const obj = {
      error: false,
      message: "this is list page",
      deneme: "deneme",
    };
    res.end(JSON.stringify(obj)); //objeyi json formatina ceviririz.
  } else if (req.url == "/test") {
    res.end(`<h1>Test Page</h1>`);
  }
});
app.listen(8000, () => console.log(`server run:http://localhost:8000`));
