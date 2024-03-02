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
Express'te butun yazilim app'te doner. App'tenb bagimsiz router tanimlarsam onu app'e bildirmem gerekir.
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

```jsx

```

```jsx

```
