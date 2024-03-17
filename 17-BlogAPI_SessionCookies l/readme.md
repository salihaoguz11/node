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
Mesela anasayfa URL den de ulasirsin. O yuzden index sayfasinda maxAge
aktif etmiyoruz. Yoksa butun siste cookies olmus olur.
```

### LOGIN - LOGOUT ISLEMLERI

```jsx
* GET data yollamayiz ve guvenligi onemsiz islemlerde kullanilir.

Logutta get kullanabiliriz.



```

### SESSION

```jsx
B sekilde password'u kontrol ederiz.
 if (user && user.password == passwordEncrypt(password))
 user.password db'de ki sifre ile sifreli kullanici sifresi ayni mi diye bakar.req.body den gelen ve sifrelenmis veriye bakar
  Her sefereinde sifreleme ayni sekilde yapilir.
 Buraya direk password yazamayiz, cunku o direk sifresiz olarak bulunur.
Artik bu noktadan sonra bu bilgileri kayit etmem lazim ki tarayici bundan sonra hatirlasin bu bilgileri ve diger sayfalara girerken kontrol yapilmis olsun. Bu noktada session yada cookies'e kayit yapmak lazim. Bir session yada cookie'e kayit edilen veriler sistemin genelinden ulasilabilir.

http://127.0.0.1:8000/
index'te bu guncellemeyi yaparsan,

app.all('/', (req, res) => {
    // res.send('WELCOME BLOG API PROJECT')
    if (req.isLogin) {
        res.send({
            error: false,
            message: 'WELCOME BLOG API PROJECT',
            session: req.session,
            user: req.user
        })
    } else {
        res.send({
            error: false,
            message: 'WELCOME BLOG API PROJECT',
            session: req.session,
        })
    }
})

req.session verilerine artik ulasabildigini test edebilrsin.

Postman'de deneme yaparsan cookie kismini da gorebilirsin. Orada cookie expire zamanini da gosterir. Postman tarayici tarzi calistigi icin bize extra bilgi verir. Postmani kapatip acinca session gitmis oldugunu goruruz.

```

### COOKIE

```jsx

Eger REMIND ME secerse user bu veriyi 3 gun sakla yani veriyi cookie de sakla diyebilriz.

 if (req.body?.remindMe) {
          req.session.remindMe = req.body.remindMe;
          // SET maxAge:
          req.sessionOptions.maxAge = 1000 * 60 * 60 * 24 * 3; // 3 days
          // remind me secerse user, 3 gun boyunca veriler  kayitli olsun
        }

 **** postman/thunder ****
        {
  "email": "deneme1@gmail.com",
  "password": "deneme",
  "remindMe":"true"
}

```

### SIFRELERIN CALINMASI DURUMU

```jsx
eger sifrelerimin calindigindan suphelenirsem SECRET_KEY degistiririm.Fakat bu en son caredir. Bunu degistriresem butun sifreler ve cookieler iptal olur. Deploy edilen bir projede yaparsam proje cop olur.

```

### LOGOUT

```jsx

  logout: async (req, res) => {
    // Session destroy:
    req.session = null; //verileri silersin
    res.status(200).send({
      error: false,
      massage: "Logout OK",
    });
  },
Logout session da olsa cookie de olsa her turlu veriyi yok eder.
Verielri silince de zaten cikis yapilmis olacak.

```

###

```jsx
Benim cookie verilerim calsinirsa tarayiciya bilgilerimi kopyalayip
sanki benmisim gibi giris yapilabilir.
Ilk yapmam gereken sey sifremi degistirmek gerekir ama sistem bu degisikligi nasil algilayacak?
Bunun icin session daki verilerin dogrulugunu kontrol eden bir middleware yazariz.


const User = require("../models/user.model");

module.exports = async (req, res, next) => {
  if (req?.session?.id) {

    sessinda veri var mi? Eger session da veri varsa
    id ve passwordu al.
    const { id, password } = req.session;

    const user = await User.findOne({ _id: id });
    //db de ki id ile girilen id 'yi kontrol eder
    if (user && user.password == password) {
    password => bu da session da sifrelenmis zaten
      req.user = user;
      req.isLogin = true;
    } else {
      req.session = null;
      req.isLogin = false;
    }
  }
  next();
};

app.use ile cagiriri.

// Check logined User:
app.use(require('./src/middlewares/userControl'))


```
