# BIR PROJE NASIL DEPLOY EDILIR?

## 1-AYRI AYRI KLASOR ORTAMI ICIN - MONGODB

```jsx
Render sayfasina git
build command=> npm install
start command=> node index.js
Free option sec.
env dosyasi bilgilerini yapistir.

```

###

```jsx
Mongodb yi ac
Ekranda live gor.
Mongodb de network access'e gir IP adresi kisminda edite sec ve
0.0.0.0/0 yaz ve  kaydet

```

###

```jsx
Compass'i ac
cloud edit yap ve
URL' i kopyala
.env dosyasina yapistir.
VSCode mongodb cluster aktif hale getir.

```

###

```jsx
Render'a gec ve yukarida verilen linki kopyaLA
Frontend klasorune gec
.env ye react_app_url kismina yapistir. Tirnak olmayacak.


```

###

```jsx
Vercel'e gec
Frontend kismini deploy et.


```

###

```jsx
Backend'e gec
index kismina cors kodunu yapistir.

```

###

```jsx
render da ki url'i al thunder'a yapistir ve get post yap.
He rhangi bir degsiklik durumunda hem backend hemde frontend kismini github'a
push yapmayi unutma.

```

## 2-AYRI AYRI KLASOR ORTAMI VE TEK BIR YERDE DEPLOY ICIN - MONGODB

## (SEMIH MENTOR ILE STOCK API )

```jsx
1-Frontend klasorunde
npm install yap
base url kismina backende istek yazilacak sekilde degistirilir.
Mesela  baseURL:"/api/v1",  sekilde olabilir.



2- $ npm run build  kodu  terminale yazilir.

3- build altinda ki tum dosyalari kopyala. Build dosyasinin ici kendisi degil
 (shift tusu ile kolayca coklu dosya kopyalayabilirsin).
  Bu sekilde backend doyamiza frontend kismini eklemis oluyoruz. Yani
projemiz backend doyasinda birlesmis oluyor.

4- Backend dosyasini ac ve orada public  yeni bir folder olustur.
Ve kopyaladigin bu dosyalari o dosyanin icine yapistir.

5- Mongodb de ki url i al. Ve env dosyasinda mongodb sifresinin karsisina  yaz.
Database/ connect/compass ve orada ki linki al.Mongodb de network accesse gir
IP adresi kisminda edite sec ve 0.0.0.0/0 yaz ve  kaydet
Eger bir database yoksa olustur.

6- Backend ana index sayfasinda ki route bolumunu bu sekilde guncelle
app.use("api/v1",require('./src/routes'))
//api versiyon1 Bunu istedigimiz gibi adlandirabilirz.

app.all('/api/v1/documents', (req, res) => {

    res.send(`
        <h3>Stock Management API Service</h3>
        <hr>
        <p>
            Documents:
            <ul>
                <li><a href="/api/v1/documents/swagger">SWAGGER</a></li>
                <li><a href="/api/v1/documents/redoc">REDOC</a></li>
                <li><a href="/api/v1/documents/json">JSON</a></li>
            </ul>
        </p>
    `)
})

7-  Ana index sayfasina bu kodlari  ekliyoruz.
const path = require("node:path");
const path = require("path");//bu sekilde de olabilir. Bazen node: yazinca problem olabiliyormus

8-Ana index sayfasina bu kodlari  ekliyoruz.
app.use(express.static(path.join(__dirname, "public")));
static dosyalarimin yerini gostermek icin

9- Ana index sayfasina bu kodlari  ekliyoruz.
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./public", "index.html"));
  });
  // index.html static olarak render edilecek. File'i file olarak browser a gonderir.

  app.use("*", (req, res) => {
    res.status(404).json({ msg: "not found" });
  });
  // olmayan bir route erisim talebinde verilecek response

  10- Backend dosyasini tekrardan calistir ve hata var mi diye kontrol et.
  Database Connected yazisini gor.

  11- Hata varsa gider. Uyarilar varsa guncelle.

  12- Terminali durdur ve tekrar calistir.

  13- Canli da calisiyor mu bak

  14- sync dosyasini aktif et ve database e veri yukle.
  env dosyasinda mongodb ye baglati uri eklenmis oldugundan emin ol.

  15- Projeyi browser da kontrol et, calisyor mu bak.

  16- Github a backend klasorunu bagla

  17- Render a gec ve orada githuba yukledigimiz repoyu deploy ediyoruz.

  18-build command=> npm install

  19-start command=> node index.js

  20-Free option sec.

  21-env dosyasi bilgilerini yapistir.

  22-ENV dosyasini da eklemeyi unutma (add from .env)

  23-Create web service a bas.

```

## 3-AYNI KLASOR ORTAMI VE DOCKER ILE DEPLOY - STOCK API

## DOCERIZE

```jsx

Backend dosyasi ve forntend dosyasi ayni dosyada olacak.

1- Backend de terminal ac ve $ npm i  diyoruz.
2- Ana dizimde logs klasoru olustur.
3- env dosyasini olustur yada duzenle.

env ye bu kodu yapistir. Docker icinden disarida ki bir local hosta baglanti kuruyoruz.
Bu sebeple bu kodu yaziyoruz ve mongo db ye baglaniyoruz.
MONGODB=mongodb://host.docker.internal:27017/stockAPI

Ama remote taki db ye baglanacaksak eski halinda birakabilirz.
# MONGODB=mongodb+srv://qadir:uKcF6V6InKg75w9q@cluster0.um9yyhm.mongodb.net/stockAPI


4- package json da
nodemon yazisi yerine node index js olarak degistir
  "scripts": {
    "start": "node index.js",
    "debug": "DEBUG=* node index.js"
  },

  nodemon yap ve projeyi calistir. Dababase not connected yaziyor cunku
  container yapisini henuz olusturmadik

  Daha sonra ekranda cikti olursa CTRL + C yap terminali durdur.

  Ana dizinde dockerignore dosyasi olustur.



```

```jsx

1- Frontend dosyasina gec ve terminali ac ve

 $ npm i  kodunu yaz yada
 $ pnpm i yaz (vite ise)


2- package json da burayi guncelle 0.0.0.0 yaz. Asagida ki gibi

 "scripts": {
    "start": "vite --host 0.0.0.0",}

3- Ana dizinde dockerignore dosyasi olustur. Ve icindekileri kopyala yapistir.

4- $ npm run dev yaz terminale

5-  Daha sonra ekranda cikti olursa CTRL + C yap terminali durdur.

6- Frontend ve backend ana dizininde ayri ayri dockerfile olustur.

7- Ana  terminali ac ve  $  docker build ./backend -t backend  yaziyoruz.

8- $ docker run --name backend -p 7000:8000  backend

icerdeki 8000 i disarida ki 7000 e yonlendir.

$ docker run -d -p <ext_port_number>:<int_port_number> --name <container_name> <image_name>

* DB Connected *
* Synchronized. yazacak terminalde

9- Docker logosunu tikla container yesil renkli olacak ve saga tikla stop de



```

```jsx

```

```jsx

```
