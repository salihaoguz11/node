# Nodejs Session Class-notes- FILTERING & SEARCHING & SORTING & PAGINATION

```jsx
Get ile data gondereceksem URL kullaniyoruz.
URL ? sonrasi query olarak adlandirilir.

```

###

```jsx
Filter => Direk icinde arama yapar. Exact kelimeyi arar.
search => icende geciyor mu ona bakar.
```

### Queries

```jsx
queries key-value seklinde yazilir. Yani aralarinda " = " olmalidir.aralarina & koyup tekrar yeni bir query yazabilirim.
Mesela search[title]=test search ana basligim, title icinde test ara diyorum.
URL sisteminde false yada true yazamazin ,onun yerine 1-0 kullanilir. 1-true,0-false temsil eder.

```

###

```jsx

app.use(session({
    secret: process.env.SECRET_KEY, // Şifreleme anahtarı
    // maxAge: 1000 * 60 * 60 * 24 * 3  // miliseconds // 3 days
}))

secret => bu parametre sifreleme anahtaridir.
maxAge => Milisecond cinsinden yapar.1000 - 1 saniye yapar.

app.use() kullandigim icin global alanda ayar yapmis olurum.
Ve maxAge verince artik session olmaz cunku bir omur bicmis oluruz.
Cookies'e kayit yapinca sistemin genelinden ulasabilirim.
Mesela anasayfa URL den de ulasirsin.
```

### LOGIN - LOGOUT ISLEMLERI

```jsx
* GET data yollamayiz ve guvenligi onemsiz islemlerde kullanilir.

Logutta get kullanabiliriz.


```

###

```jsx

```
