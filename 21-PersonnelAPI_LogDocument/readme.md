# DOCUMENTATION - LOGDOCUMENT - SWAGGER

###

```jsx
Bir backend proje yazdigim zaman,bazi standartlarimin olmasi lazim.
Bir dokumantation hazirlamak lazim. Piyasa da en cok kullanilanlar SWAGGER ve REDOC.
Bazi calisanlar remote calisiyor olabilir.Bu sekilde herkes dokumantasyonla
rahat bir sekilde bilgilere ulasabilir.
```

### LOG KAYDI TUTMA

```jsx
Ziyaretci istatistiklerini tutma gibidir. Benim sistemime kim ne zaman girmis,neden baglandi
sekilinde veri tutarim. Kurumsal bir site yonetiyorsaniz LOG kaydi tutmalidir.
Denetlemesi yapilir bunlarin. Mesela bir satici trendyoldan satis yapiyor ve
dolandiricilik yaptiginda, siber suclar subesi trendyoldan satici ile ilgili
bilgi isteyebilir. O zaman LOG kayitlarini vermek gerekir,dolayisiyla da bu kayitlari tutmak gerekir.

```

### MORGAN ILE DOC OLUSTURMA

```jsx
Morgan not tutmaya yardimci official bir middleware dir.
$ npm i morgan // indir.

const morgan = require("morgan"); //cagir


```

### MORGAN ONDEN TANIMLI FORMATLAR

```jsx

COMBINED: app.use(morgan("combined"));
gelen veri bu sekilde olur.
Thunder da ana URL le istek atiyoruz.
// ::ffff:127.0.0.1 - - [23/Mar/2024:14:31:39 +0000] "GET / HTTP/1.1" 200 52 "-" "Thunder Client (https://www.thunderclient.com)"
COMMON: app.use(morgan("common"));
// ::ffff:127.0.0.1 - - [23/Mar/2024:14:34:40 +0000] "GET / HTTP/1.1" 200 52
DEV:app.use(morgan('dev'))
// GET / 200 42.571 ms - 52
SHORT: app.use(morgan("short"));
// ::ffff:127.0.0.1 - GET / HTTP/1.1 200 52 - 35.085 ms
TINY: app.use(morgan("tiny"));
// GET / 200 52 - 32.728 ms
```

### MORGAN KENDI AYARLADIGIM FORMATLAR

```jsx
 app.use(morgan('IP=:remote-addr | TIME=:date[clf] | METHOD=:method | URL=:url | STATUS=:status | LENGTH=:res[content-length] | REF=:referrer | AGENT=":user-agent"'))
 Bu sekilde istedigim gibi ayarlama yapabilirim. Ve bu sekilde kayit tutulmus olur.
 // IP=::ffff:127.0.0.1 | TIME=23/Mar/2024:14:39:43 +0000 | METHOD=GET | URL=/ | STATUS=200 | LENGTH=52 | REF=- | AGENT="Thunder Client (https://www.thunderclient.com)"

```

### BIR DOSYAYA LOG KAYIDI TOPLAMA

```jsx
Log kayitlarini bir yerde toplamam gerekir. Morgan bir dosyada tutmaz, o sebeple   "fs" build-in modulundn yararlaniyorum.
 const fs = require('node:fs')
app.use(morgan('combined', {
    stream: fs.createWriteStream('./access.log', { flags: 'a+' })
}))
 'combined' tarzi yazmasini istiyorum.
  flags: 'a+'  Dosyaya nasil davranmasi gerektigi ile ilgili komut.
  Dosya yoksa ac ve hem okuma hemde ekleme yap.
  Bu sekilde ./access.log dosyasinda otomatik olarak log'larim yazilir.
  Dosyayi kendi olusturmuyorum. Otomatik olarak olusuyor bu kodu yazinca.


```

### Write to file day by day:

```jsx
Verilerini gunu gunune tutar.

const fs = require('node:fs')
const now = new Date()
// console.log(typeof now, now)
const today = now.toISOString().split('T')[0]
// console.log(typeof today, today)
app.use(morgan('combined', {
    stream: fs.createWriteStream(`./logs/${today}.log`, { flags: 'a+' })
}))

 Anayolda kendimiz logs klasoru olusturduk. Daha sonra asagida ki kodu yazinca
./logs/${today}.log   logs kilasoru icerisinde o gunun tarihinde bir file olusturur.
Bu sekilde log verilerini gun be gun tutariz.

Morgan islerini ayri  bir yere tasimak lazim. middlewares/logging.js seklinde index tekileri bu doyaya tasiriz. Ve index'te bu middleware'i cagiririz.

// Logging:
app.use(require('./src/middlewares/logging')) // index.js

log kayitlarini gitignore dosyasiyla github'a gitemsini engelleriz.
```

### SWAGGER AND REDOC

```jsx
Ben  SWAGGER AND REDOC  dokumasyon hazirlarke JSON dokumantasyonu hazirlarim.
"OpenAPI"  standarti ile yazarim. Normal sartlarda json dosyasini manual olarak yazmak lazim.
Bazen model sayim artarsa dokumantasyonu json formatinda yazmam lazim.
Bunun express js de kisa yolu vardir.

 https://swagger-autogen.github.io/docs/
 $ npm i swagger-autogen - Sistemi tarayip otomatik swagger json dosyasi ortaya cikarir.
 $ npm i swagger-ui-express  - json'i gorsele cevirecek.
 $ npm i redoc-express

 Ana dizinde bu sekilde bir file olustur. Icerisine verileri yaz.
 swaggerAutogen.js

 Daha sonra  yeni terminal ac ve "node swaggerAutogen.js"  yazarak terminalde calistir. Her sey yolundaysa
kendisi swagger json dosyasi olusturur. Benim icin kolayca olusturdu. Bir degisiklik yaparsan terminali
durdur ve daha sonra tekrar ayni kod ile calsitir ki degiskligi algilasin.



```

###

```jsx

 SWAGGER: index sayfasinda bu kod blogunu yazariz
const swaggerUi = require('swagger-ui-express')
const swaggerJson = require('./swagger.json')
app.use('/documents/swagger', swaggerUi.serve, swaggerUi.setup(swaggerJson, { swaggerOptions: { persistAuthorization: true } }))

app.use('/documents/swagger', ) => bu URL de  swagger yayini yap
setup("hangi json dosyasi","token calistirma ayari ") // iki parametre alir.

Daha sonra Chrome gec ve arama motoruna asagida ki URL'i yaz
 http://127.0.0.1:8000/documents/swagger

```

### JSON

```jsx

app.use("/documents/json", (req, res) => {
  res.sendFile("swagger.json", { root: "." }); //bir dosya icerigini ekrana basiyoruz.
});
 { root: "." } => dosyayi anadizinde ara.
 Ben json olrark ekrana basrsam FE istedigi yerde acip bakabilir.

```

### REDOC:

```jsx
const redoc = require("redoc-express");
app.use(
  "/documents/redoc", //url
  redoc({ // obje olarak ayarlar yaziyorum.
    title: "PersonnelAPI",
    specUrl: "/documents/json", // bu ayar onemli. Bu json'dan alacak veriyi.
  })
);

   specUrl: "/documents/json",
    bu ayar onemli. Bu json'dan alacak veriyi.
    Jsonda once yayinlamam lazim.

```

###

```jsx
Daha sonra controller'a giderek bu asagida ki kod blogunu ekliyorum.
 #swagger bu sekilde yazinca swagger # ile yakaliyor. Bunlar yorum satinin icinde olmali.

   /*
            #swagger.tags = ['Authentication']      => grup ismi
            #swagger.summary = 'Login'              =>ozet baslik,ufak aciklama
            #swagger.description = 'Login with username and password' => genis aciklama
            #swagger.parameters['body'] = {
                in: 'body',
                required: 'true',
                schema: {
                    username: "testF0",
                    password: "1234"
                }
            }
        */

        #swagger.parameters  =>  Bazen parametreleri otomatik yakalar ama bazen yakalamaz. Manual yazariz.
        Yakalayamazsa swagger da canli test ortami imkani vermez.

    * token.contoller.js sayfasina git. Ilgili yerlere yapistir.
    Bu sayfada ki bilgilerin gorunmesine gerek yok.

         /*
            _swagger.deprecated = true  // _ basa koyarsan swagger algilamaz.
            #swagger.ignore = true     // swagger bunu almasin dersen ignore yapiyorsun
        */

```
