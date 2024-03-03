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

app.get("/ab*", (req, res) => {
  res.send({ message: "GET method called- ab***" });//sonuna ne gelirse gelsin
});

app.get("/a*b", (req, res) => {
  res.send({ message: "GET method called- a***b" });
   //a ile baslayip b ilke bitsin araya ne gelirse gelsin.
});
*/

//!regex
//regexr.com
/* bunlar calismiyor!! bir hata var.
app.get(/abc$/, (req, res) => {
  res.send({ message: "end with any" });
}); // sonu ne olursa olsun
app.get(/^\/abc/ ,(req,res)=>{ res.send({ message:"start with any" })}) // başlangıç ne olursa olsun
app.get(/\/*abc/ ,(req,res)=>{ res.send({ message:"start with any" })}) // başlangıç ne olursa olsun
app.get(/abc/ ,(req,res)=>{ res.send({ message:"find abc  in path" })}) // başlangıç ne olursa olsun
*/

//!url parameters
/*
//?burada : koyunca express senin parametre gonderecgini anliyor.
//?Bundan sonrasi bir degisken ismi olarak kabul ediliyor.Pespese birkac parametre gelebilir.
//?aralarina (/:) koyariz.

//? /:userId[\\d]+1 ve daha fazla digit olmali
//? /:userId[\\w]+ words karakteri
//? /:userId[\\D] digit olmayanlar.
// http:127.0.0.1:8000/:222/location/:london //bu url"i postman yada thunder'a yazarsin.
app.get(`/:blogId/location/:location`, (req, res) => {
  res.send({
    blogId: req.params.blogId,
    url: {
      protocol: req.protocol,
      domain: req.hostname,
      method: req.method,
      url: req.url,
      path: req.path,
      params: req.params,
      body: req.body,
      query: req.query,
      header: req.headers,
    },
  });
});
*/

//?baslangic ne olursa olsun
/*
// app.get("/", (req, res) => {
//   res.status(200).send({
//     message: "congrats you have signed up ",
//   });
// });

// app.post("/", (req, res) => {
//   res.status(201).send({ message: "POST method called" });
// });


app.put("/", (req, res) => {
  res.status(202).send({ message: "PUT method called" });
});

app.delete("/", (req, res) => {
  res.status(202).send({ message: "DELETE method called" });
});
*/

//!redirect (sadece 300 lu kodlar)
/* calismadi, tekrar kontrol et
app.get("/", (req, res) => {
  res.redirect(301, "http://google.com");
});
*/

//!show file contents
/*

app.get('/file',(req,res)=>{
    // __dirname bulunduğun klasör 
    res.sendFile(__dirname+'/readme.md' ) //__dirname bulundugun klasor demek    // res.redirect(302,'/about')
})
//bu da calismnadi, tekrar bak
app.get("download", (req, res) => {
  res.download("./read.me", "express routing");
});
download'da baska bir isimle karsida indir dersin senin ektra verdigin isimle  karsida indir dersin
senin  ektra verdigin isimle karsi tarafa inecek.
*/
app.listen(PORT, HOST, () => console.log(`Server run http://${HOST}:${PORT}`));
