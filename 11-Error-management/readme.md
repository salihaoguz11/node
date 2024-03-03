# Error management

## Some useful commands

```jsx
echo PORT=8000> .env
echo HOST =127.0.0.1 >> .env
 2 tane >> alt satira ekleme yapar

cat > .env
bos bir alana surukler ve icine istediklerimizi yazariz. cat ile birden fazla satir ekleriz.
Cat ile birden fazla satir ekleriz. daha sonra Ctrl+C ile cikariz.

touch router.js
Dosya olusturma komutu.
```

## Why we do error management?

```jsx
 Hata yonetiminin sebepleri?
 1-Terminal cok kalabalik olmasin diye.
 2-Ekrana HTML olarak basilir error fakat backend dili JSON dir. Hatayi JSON olarak gormek icin.

JSON objenin string halidir.Gelen ve giden data her zaman stringdir.Bu yuzden objeyi JSON'a ceviririz.

```

## Express Error Handler

```jsx
Surekli try-catch blogu yazarak hata yonetimi yapmak oldukca zahmetlidir. Tam bu noktada express bize bir
fonksiyon imkani saglar. Hatayi bizim icin otomatik olarak yakalar. Bu fonksiyonun adi Error Handler dir.


app.get("/*", (req, res) => {
  throw new Error("Error Message");
});

const errorHandler = (err, req, res, next) => {
  res.send({
    error: true,
    message: err.message,
  });
};

app.use(errorHandler);





```

```jsx
*Error Handler bir middlewaredir. Ayni zamanda da bir route'tur.
*4 parametre alir ve error parametresi en basa gelir.
*Error Handler kullaninca muhakkak app.use 'e bildirmek gerekir.
*Error Handler  her zaman en son gelen middleware olmalidir. Sayfanin altina yazilir.
*Error handler next() kullanmayiz. Sebebi ise hata olunca devam etmesin istiyoruz.
Ama fonksiyona next ekleriz. Middleware oldugundan dolayi next ekleriz. Parametrelerin sirasi karismasin diye
next'i kullanmasam da ekleriz.

```

```jsx
RES ve REQ ile datalari tasiyabilirim.
Hata yonetimide her zaman STATUS CODE onemlidir.

Eger  res & req  => Route
Eger  res & req & next => Middleware
Eger  err & res & req & next   => errorHandler


```

```jsx

```

```jsx

```
