# EMAIL - UPLOAD

```jsx
    $ cp .env-sample .env
    $ npm init -y
    $ npm i express dotenv mongoose express-async-errors
    $ npm i morgan swagger-autogen swagger-ui-express redoc-express
    $ mkdir logs
    $ npm i jsonwebtoken
    $ npm i nodemailer multer
    $ nodemon


```

###

```jsx
Nodemailer node js'in popular mail gonderme modullerinden biridir.
Ethernal mail ise nodemailin fake mail gonderme servisidir.

```

### NEDEN FAKE MAIL SERVISI KULLANIRIZ?

```jsx
Ben mail ayarlarini yaparken bazi ayaralr yapmam lazim.
Fake oldugu icin mail gonderme islemi yapilmiyor.
Fakle mailin bize verdigi bilgilerle biz email servisimizin on ayarlarini yapariz.
Sonra email servisimizin calsitigina emin olunca onu bir fonksiyona ceviririz.

```

### EMAIL: FAKE ACCOUNT OLUSTURMA

```jsx

$ npm i nodemailer - modulunu indir.

USEFUL WEBSITES
// nodemailer
// https://www.nodemailer.com/
// https://www.npmjs.com/package/nodemailer
// https://ethereal.email/

const nodemailer = require('nodemailer')

// Create Test (Fake) Account:
Bana fake bir mail olustur ve bana bu mailin verilerini ver

nodemailer.createTestAccount().then((data)=>console.log(data))

Bundan sonra gelen datayi alip bir yerde sakliyoruz ve
createTestAccount satirini yoruma aliyoruz.



// Connect to MailServer:

```

###

```jsx
Mail serverlar cift hizmete sahiptir. Mail gondermek ve almak
Bir mail serverda iki tane server kurulmus oluyor.
Biri mail alan hizmet digeri de mail gonderen hizmet.

  smtp: Mail gonderen protocol
  imap: Mail alan protocol
  pop3: imap in gelismis halidir.

```

### MAIL GONDERME ISLEMI

**\*\*** MAIL SERVISINE BAGLANMA **\***

```jsx

// Connect to MailServer:
const transporter =nodemailer.createTransport({
   // SMTP:
  host:'smtp.ethereal.email',
  port: 587,
  secure: false, // ssl, tls
  auth:{
      user: 'yb3iukq2u3sfgsgk@ethereal.email',
  pass: 'cYW1UAnBGdkUwCEYzA',
  }
})
transporter:mail gondercegim obje. Artik mail gondermeye hazir bir obje.
Ilk mail serverina baglaniyoruz ve eger kabul ederse mail gonderiyoruz.
host: ail gonderceegim host bilgisi
port:port bilgisi
auth:kimlik bilgilerini gonderiyorum.

```

### MAIL GONDERME

```jsx
transporter.sendMail(
  {
    from: "yb3iukq2u3sfgsgk@ethereal.email",
    // from yazilmak zorunda degil.buraya baska mail adresi yazilirsa spama duser.
    to: "developersaliha@gmail.com",
    //  birden fazla adrese gondermek istersek "," ve bosluk birakarak eklerim.
    subject: "Hello",
    //Mesaj gondermenin iki yontemi var
    text: "Hello There. How are you?",
    // html kodu normal yazi gibi algilar.
    html: "<b>Hello There.</b> <p>How are you?</p>",
  },
  (error, success) => {
    success ? console.log("SUCCESS", success) : console.log("ERROR", error);
  }
);
response: 250 Accepted geldiyse islem basarili demektir.
Asenkrone bir fonksiyon ve callback fonsiyou aliyor.
Bu sekilde email gonderme islemini yapiyoruz.

```

### GoogleMail (gmail) ile mail gonderme

```jsx
Nodemailin GMAIL ve YANDEX icin onceden ayarli tanimlari vardir.
Bu yuzden bir cok seyi yazmadan kolayca yazabiliriz.

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth:{
    user:"developersaliha@gmail.com",
    pass:
    //password bizim mail passwordumuz degil.
    //gmaile gidiyoruz
  }

})



```

### GMAIL HESABINDA KI ISLEMLER

```jsx
 Google -> AccountHome -> Security -> Two-Step-Verify -> App-Passwords
  1-Go to your gmail
  2- Click avatar
  3-Click manage your account
  4- 2 factor authentication
  5- scrool down app password
  6- click arrow
  7- Write app name
  8-Click create
  9- Get your password.
   Sifreyi alip bir yere kopyalamak lazim.
  Yoksa bir daha erisemeyiz. Tekrar abstan almak lazim.
  10- Click done

```

### MAIL GONDERME ISLEMI - GMAIL

```jsx
transporter.sendMail(
  {
    // from: 'developersaliha@gmail.com'
    to: "developersaliha@gmail.com",
    //birden fazla mail adresine gonderilebilir.
    subject: "Hello",
    text: "Hello There. How are you?",
    html: "<b>Hello There.</b> <p>How are you?</p>",
  },
  (error, success) => console.log(success, error)
);
```

### YANDEX ILE GONDERME

```jsx
//? YandexMail (yandex):
const transporter = nodemailer.createTransport({
  service: "Yandex",
  auth: {
    user: "username@yandex.com",
    pass: "password",
    // your emailPassword
  },
});
```

### SEND MAIL FONKSIYONU

```jsx
Email islemleriyle birisi sisteme kayit olunca hosgeldin maili atabiliri,.
Ama benim bunu fonksiyona dokmem lazim.
Helper dosyasinda sendMail diye yeni bir file olusturuyoruz.

sendMail(to, subject, message):
3 parametreden olusur.
1- kime gidecek
2-mail konusu
3- icerigi

```

### SEND MAIL FONKSIYONU

```jsx

const nodemailer = require('nodemailer')

module.exports = function (to, subject, message) {



  transporter.sendMail(
    {
      // from: 'developersaliha@gmail.com'
      to: to, //"developersaliha@gmail.com",
      subject: subject, // "Hello",
      text: message, // "Hello There. How are you?"
      html: message, //"<b>Hello There.</b> <p>How are you?</p>",
    },
    (error, success) => console.log(success, error)
  );

Artik butun veriler parametre olarak gelir.
Artik bu fonksiyonu istedigim yerde cagirip kullanabilirim.

}


```

### ORNEK KULLANIM

````jsx

Bir user kayit oldugunda veya order tamamladiginda ona  mail atabiliriz.


      /* SendMail */
      sendMail(
        data.email,  //to
        "Welcome",  // subject
            // Message
            `
                <h1>Welcome ${data.username}</h1>
                <p>Welcome to our system</p>
            `
      )

      ```
````

## DOSYA YUKLEME ISLEMLERI

```jsx
 HTML de bir form olusturdugmuz zaman form default olarak urlencoded dur.
Tarayici benim formumda ki verileri aliyor ve onu bir url verisiymis gibi BE/ servera  gonderiyor.

key=value&key1=value2  sekilinde gonderir.

Eger bir dosya / uploading gondermek istersem onu bir multipart/form-data olarak gondermem gerekir. Bu sekilde form da ki bilgiler data olarak gider.

THUNDER
Form-encode => HTML form verileri
Form        => dosya gonderebiliriz.


POSTMAN
Body /
form-encoded => HTML form verileri
form-data    => dosya gonderebiliriz.


```

###

```jsx
Biz normalde put islemini genelde JSON formatinda yollariz ama
eger form formatinda kabule tsin istersek index js sayfasinda
asagida ki kodu yazariz ve form-data verilerini de kabul et deriz.
// Accept Form-Data:
app.use(express.urlencoded({ extended: true }))

```

### MULTER

```jsx
 Bir dosya yollamak istersem Form u secmem lazim.
 Form-data veri tipinin adidir. Bir form degildir.
 multer module ile "form-data" verileri kabul edebiliriz.
 Yani dosya yükleme yapılabilir.
 Dosya yuklemek icin MULTER  modulune ihtiyacim var.
 Resim gonderirken JSON ile gondereme. O bizden string veri bekler.
 Resim BINARY bir veridir.





```

### DOSYA YUKLEME - MULTER

```jsx

* UPLOAD
? $ npm i multer
https://expressjs.com/en/resources/middleware/multer.html
multer module ile "form-data" verileri kabul edebiliriz. Yani dosya yükleme yapılabilir.

const multer = require('multer')
const upload = multer({
    // dest: './uploads',
    storage: multer.diskStorage({
      //storage ile daha fazla ayar yapabiliir.
        destination: './uploads',
        // ana dosyada upload isminde bir dosya olustur ve gelen dosyalari buraya koy diyoruz.
        //upload dosyasi otomatik kendi olusur.

  // filename fonksiyonunu yazmazsak sistem dosyaya kafasina gore isim verir.
        filename: function(req, file, returnCallback) {
            returnCallback(error, filename)
            returnCallback(null, 'saliha.jpg') // error null, dosya ismim saliha olsun
            console.log(file)
            returnCallback(null, file.originalname)
            // file ile gelen original name i  kullan
            //mesela user avatar resmi gonderip ismini kendi verebilir.
            returnCallback(null, Date.now() + '-' + file.originalname)
            //dosya isimleri ayni olursa uzerine yazar. Ama bu sekilde
            // yazarsak zamani da ekler ve dosya uzerien yazma olayi olmaz.
        }
    })
})

const upload = require('../middlewares/upload')


req  => request
file => dosya ile ilgili bilgi
returnCallback => filename fonksiyonunu calistirir.

const upload = require('../middlewares/upload')

```

###

```jsx
MULTER bir middlewaredir ama genel bir middleware degildir. Dosya yukleme isini nerede yapacaksak
orada cagiririz.Permissionlar gibidir. Index te cagirmayiz, nerede kullanacaksak orada cagiririz.
Mesela pizza create islemi yaparken bir dosya yuklemek istiyorum.
Orada middleware  olarak cagiririm.
3 tane methodu vardir.

1- Single => sadece bir dosya yuklemeye izin verir.
2- Array  => birden fazla dosya yuklemeye izin verir. en islevsel methoddur.
3- Any    => inputun ismi ne olursa olsun, kac dosya olursa olsun. Guvenli degil.

* Input name ile upload ( inputname ) ayni olmalidir.

    router
  .route("/:id")
  .get(pizza.read)
  .put(isAdmin, upload.array("images"), pizza.update)
  .put(isAdmin, upload.array("fileInputName"), pizza.update)
  // form secip guncelleme yaparsin. Mesela pizza adi guncelleme gibi.å
  .patch(isAdmin, upload.array("images"), pizza.update)
  .delete(isAdmin, pizza.delete);
```

### BIR MIDDLEWARE NASIL IPTAL EDILIR

```jsx

module.exports = {
  isLogin: (req, res, next) => {
    return next(); //BURAYA return NEXT KOYARSIN
    if (req.user && req.user.isActive) {
      next();
    } else {
      res.errorStatusCode = 403;
      throw new Error("NoPermission: You must login.");
    }
  }
  },

```

### FILE YUKLEME

```jsx

THUNDER => form files tikla
POSTMAN => form-data key yaninda oku tila files sec.

Thunder da Form sec sonra files tikla ve filed namei yaz.
Burada yazdigin ile (images)
.put(isAdmin, upload.array("images"), pizza.update)
buraya yazdigin isim ayni olmali.
```

###

```jsx

```

###

```jsx

```

###

```jsx

```
