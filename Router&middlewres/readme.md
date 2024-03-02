# Routers & Middleware

```jsx
Router kullanma sebibe routing sistemini baska bir yerde tanimliyor olabilmek.
Bu sekilde routerlari baska sayfaya tasiyabilirz.
 Amaci URL kontrolu saglayan bir application'dir.

 const router = require('express').Router();

 Burada tanimlamis oldugumuz router URL yonetimi yapabilecegimiz bir degiskendir.

```

## Router tanimlama yontemleri

### 1.yontem

```jsx

router.get('/', (req, res) => res.send({ message: "Home Area" }))

app.use(router);
Express'te butun yazilim app'te doner. App'ten bagimsiz router tanimlarsam onu app'e bildirmem gerekir.
Bu sekilde bildirim yapmis olurum(satir 20)
app.use() komutu ile app'e dahil etmek istediklerimizi eklemis oluruz.


```

### 2.yontem

```jsx

router.route('/')
    .get((req, res) => res.send(' message: "get"'))
    .post((req, res) => res.send({ message: "post" }))
    .put((req, res) => res.send({ message: "put" }))
    .delete((req, res) => res.send({ message: "delete" }))

Bu sekilde butun methodlari bir yere toplamis olduk.

```

## Router baska sayfada tanimlama yontemi

```jsx

 const router = require('express').Router();

router
  .route("/")
  .get((req, res) => res.send(' message: "get"'))
  .post((req, res) => res.send({ message: "post" }))
  .put((req, res) => res.send({ message: "put" }))
  .delete((req, res) => res.send({ message: "delete" }));

module.exports = router;
Bu sekilde baska sayfada tanimlar ve export ederiz.

Kullanmak istedigimiz sayfada bu kodla cagiririz.
const router = require("./path ...");


```

# Middlewares

```jsx

Middleware bir ara yazilimdir. Bir routerdir ama 3. parametreyi de alir. Bir routeri middleware yapan ozellik 3 parametre almasidir. Burada parametrelerin isimleri degil siralari onemlidir.

app.get("/", (req, res, next) => {
  console.log("Middeware started.");
  // Go to next route:
  next();// en sonda yazilir.

});

Middleware bir gorevi de baska routelara  data gondermektir.

  req.welcome = 'Welcome' //obje (req) icine property(welcome) ekliyorum
  res.username = req.query?.username

Bu sekilde de bir sonraki routeta kullaniriz.
app.get('/', (req, res) => {

    res.send({
        // message: 'Welcome'
        message: req?.welcome + ' to ' + res?.username
    })
})



```

### Ne zaman req ne zaman res kullanmaliyiz?

```jsx
Eger gonderdigimiz veri ciktiya hizmet ediyorsa response(ekrana yazdirma)
Diger turlu her zaman req kullanmaliyiz.

```

## res.send() & res.end()

```jsx
res.send() veriyi json olarak gondermek cok kolay. Veriyi hem string hemde istersek kolayca json olarak gonderebiliriz.
res.send('message:"get"') bu sekilde string olarak gondeririz.
res.end() bunda ise benim kendimin veriryi json stringify olarak gondermem gerekir. Daha zahmetlidir.
```

```jsx
 It can use URL:
app.get('/abc', [middleFunc1, middleFunc2]) // only /abc and only get
app.use('/abc', [middleFunc1, middleFunc2])  //only /abc/*
 and all methods -butun metodlar ve abc ile baslayan ve onun tum alt patlerinde calisir.

 app.all('/*', [middleFunc1, middleFunc2])
 yildizi yazarsak butun pathlerde gecerli. Ama app.use()icin
 yazmaya gerek yok.

```

```jsx

```
