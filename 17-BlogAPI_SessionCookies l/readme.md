# Nodejs Session Class-notes - Cookies

```jsx
Chrome gibi tarayicilar her bir sekme- doamin icin minimal
duzeyde saklama alani sunarlar.
Mesela bir sayfaya giris yapinca onun yaninda ayni sayfadan sekme acabiliyorsun.
Senin giris yapmis oldugunu algilar. Tarayici login olmus oldugumu hatirlamak icin
benim login bilgilerimi bir yerde tutar.
Her tarayici bu hizmeti verir.

```

### Tarayicilarin 3 cesit veri saklama yontemi vardir.

```jsx
Local Storage => Kendi kendine silinmez.
Cookies => Belli bir surelik omru vardir.
Session Storage => Oturum boyunca silinmez. Oturumu kapatinca silinir.
Sessionlar da cookie'dir.  Cookie'ye bir tarih belirmezsen session olur.

Bu 3 de cok guvenli yontemler degildir. Token kullanmak daha guvenlidir.
```

### SessionCookies:

```jsx
* $ npm i cookie-session

bu kodla bu modulu indiriyoruz ve modul yonetimini u modulle yapariz.
Bu modul ayni zamanda bir middleware'dir.Normalde Cookies'e direk yalin haliyle
sifrelemeden kayit edebilirsin. cookie-session  bize sifreleme imkani verir.

const session = require('cookie-session')

Daha sonra require ederiz.


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

###

```jsx

```
