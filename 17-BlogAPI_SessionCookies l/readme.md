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

### Cripto

```jsx

Node js 'te cripto modulu icindedir bu metod. Cripto bir built-in methoddur.
Bunu kullanarak PBKDF2 sifreleme yapiyorum.

BUILT-IN METHOD: Node ile otomatik gelen metodlardir. Ektra indirmeye gerek yok.
Hatta node: yazinca sistem bana onerir.
 const crypto = require('node:crypto')
 Bu sekilde direk cagirilir.

```

### .env

```jsx
. ile baslayan dosya gizli doyadir. ve .env dosyasi gitignore tarafindan gizlenir.
Eger yollamak istiyorsak .env-sample olarak yazrsak gorunur.
Bu sekilde github'a yollayabiliriz.

```

### Ne zaman app.use() ne zaman require kullanilir?

```jsx
app.use( )
kullnacaksam ya route yada middleware olmali, ozetle icinde req,res olmali


```
