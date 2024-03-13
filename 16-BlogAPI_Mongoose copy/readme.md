# NoSQL DB 2 -MONGO DB - MONGOOSE

```jsx
eger DB 'ye yeni birsey eklersek default ekleyerek senkronize
edebiliriz.
 Yada manual yapmak gerekir.Bu projede sync.js dosyasi bu guncellemeyi yapacak. Bu islemi onceki kayitlari senkronize etmek icin kullaniriz. Yoksa yeni kayitlarda bir problem yok.
Dosyami hazirladiktan sonra index.js dosyasinin en altina

"// require('./src/sync')()"

bu kodu ekleriz. Bu kodun bir kez calismasi gerekir.
Sonra yoruma aliriz.


```

### Neden Mongoose kullaniyorum?

```jsx
Mongo DB bir veri tabanidir ve bize bir standart sunmaz.
Data standardini koruyan ise mongoose dir. Mongoose bir ORM moduludur.
Mongoose'u model mantigi icin kullaniyorum
Mongoose da model yazmak icin sema yazarsin, sonra model olusturursun.
Sema 2 parametre alir.
1. parametre  => Field
2. parametre => ayarlar bolumu

```

### Validation email

```jsx
Validate bir fonksiyondur. Validasyon gecer true doner yada gecmez ve false olur.
Gelen veri arrow function ile yakalanir.
  validate: [
      (email) => email.includes("@") && email.includes("."),
      "Email type is incorrect",
    ],

```

### Validation password

```jsx
Veri tabani hacklenme durumunda benim user passwordunun
ele gecirilemmeis icin benim onu sifreli bir sekilde yollamam lazim.


password: {
  type: String,
  trim: true,
  required: true,
  // set: (password) => { return password + '123' },
  // set: function (password) { return password + '123' },
  set: (password) => passwordEncrypt(password)
  // set: passwordEncrypt
  set bir fonk dur.
  Set fonk ciktisi veri tabanina yazilir. Sen ne ayarlarsan fonk ciktisi
  ne olursa olsun senin yolladigin degeri kayit ediyor.
  Nu methodu kullanarak sifreleme islemi yapilabilir.
},

PBKDF2 kullanici sifrelerini sifrelemek icin kullanilan bir metoddur.
Sadece node js'e ozel degildir.

Islem su sekilde olur.
password -> Sifrelemek istedigim sifreyi
salt -> bir anahtarla
iterations -> kac sefer meseela 1000 kere - JS 10_000 yazmayi destekliyor.
keylen -> bana ciktiyi su kadar karakterde ver.Mesela 64 karakter ver
digest->su sifreleme algoritmasi kullan mesela 'sha512' gibi. Bircok cesidi var.
returns->

const passwordEncrypt = function (password) {
    return crypto.pbkdf2Sync(password, keyCode, loopCount, charCount, encType).toString('hex')
}
pbkdf2Sync => senkron method bunun async olani da var.
toString('hex') => string yapiyoruz ve okunabilecek type olsun diye hex decimal olarak
ceviyoruz.

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

```jsx
. ile baslayan dosya gizli doyadir. ve .env dosyasi gitignore tarafindan gizlenir.
Eger yollamak istiyorsak .env-sample olarak yazrsak gorunur.
Bu sekilde github'a yollayabiliriz.

```
