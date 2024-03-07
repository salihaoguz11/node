# Model - Todo

##

##

## MVC / Model View Controller

```jsx
3 farkli ulkede 3 farkli marka ayni model araba  uretiyor. Sablon ayni olunca
markalar farkli olsa da ayni urun ortaya cikiyor.

Bir model tanimlamasi neden yapilir?
Model olmazsa bir standandart olmaz. Bir standart olusturmak icin model yapisi kullanirim.
Express js ve guncel frameworklerde model, veri tabani tablosu demektir.

```

```jsx
MODEL  => Database yonetimi

VIEW   => Ui kismi yani goruntuleme kismi

CONTROLLER =>CRUD islemleri burada yapilir.
Kurgu tarafi ise controllerdir.
Asil is yapan controller.
Middleware ler de birer controllerdir.
```

## ORM Yapisi / Object Relation Map

```jsx
SOFTWARE CONTROLLER              ORM                         SQL / DATABASE
 Js ile kod yaziyoum.    => Js kodlari alir           =>      SQL kodlari
                            SQL kodlarina cevirir.
                         <=  translete gorevi gorur.   <=

ORM benden Js kodlarini alir ve SQL kodlarina cevirir ve Databaseden gelen SQL kodlarini da
yine JS olrak obje olarak dondurur.
```

## ORM Faydalari

```jsx
1-SQL translater olarak calisir.
2-Farkli veri tabanlarina rahatlikla gecis yapmama olanak saglar.
MySQL ,PostgreSQL,MySQL bbilinen SQL dilleridir ama aralarinda 20% oraninda farklar olabilir.
ORM sayesinde mySQL ile  yazdigim database i daha sonra farkli bir veri tabani diline
kolaylikla cevirebilirim.
```

```jsx
Obje bir veri yapisidir.
JSON ise  alis veris verisidir.
MONGOOSE => MONGODB ORM yapisidir.
SEQUELIZE => SQL ORM yapisidir.
Package json da dosyamizin adi main ise ve biz app yada farkli ise pj'da
adini degistirmek gerekir.
```

## app.all() ile app.use() farklari.

```jsx
        app.all()                                       app.use()
URL tanimlandigi gibidir.                    URL olarak anasayfa tanimlandiysa
Yani anasayfa tanimlandiysa                  anasayfa ve devam eden butun URL lerde calisir.
sadece orada gecerlidir.                     ('/abc') calisir.
('/abc') calismaz.
Butun metodlara izin verir.                  Butun metodlara izin verir.
```

#SEQUELIZE

```jsx
Butun veri tabanlarina destek veren bir ORM  moduludur.
Bunu kullaninca ORM + MODEL yapisini kullanabilir.
npm install sequelize sqlite3 diyerek modulumu ve kullancagim veri tabanimi ekliyorum.
sequelize => ORM modulum
sqlite3   => veri tabanim/database
sqlite dosya gibi cagrilip kullanabilen bir veri tabanidir.
Rahatlikla tasinabilir bir dosyadir.
Mobil uygulamalarda kullanilabilir.
```

## NEDEN SEQUELIZE KULLANIYORUM?

```jsx
1-Model yapisi kurmak icin.
2-ORM yapisini kullanabilmek icin.
ORM mantigiyla haberlesmek ve database'e baglanmak icin.
```

##Sequelize ile bir model olusturma

```jsx
1-Define metodu ile modul olusturma
const { Sequelize, DataTypes } = require('sequelize')

 sequelize instance oluştur:
const sequelize = new Sequelize('sqlite:./db.sqlite3')

define methodu sequelize modeli oluşturur:
 her bir model, veritabanında bir tabloya denk gelir.

 sequelize.define('tableName', {  modelDetails  })

 Not need define createdAt & updatedAt fields.
 createdAt ve updatedAt tanımlamaya gerek yoktur. Sequelize otomatik oluşturur/yönetir.
  createdAt create islemi  yapilinca tarihi otomatik olusturur.
  updatedAt  tarihi update eder.
```

```jsx
2-Syncronization:
Model bilgilerini Database uygun hale getirme.
Terminalde ki yazilarin degistigini ve artik SQL diline dondugunu goreceksin.
Bu komut surekli acik kalmamali. Islem tamalninca hemen yoruma almak lazim.
Acik kalirsa surekli calisir.

 sequelize.sync() // CREATE TABLE
 sequelize.sync({ force: true }) // DROP TABLE & CREATE TABLE
 sequelize.sync({ alter: true }) // TO BACKUP & DROP TABLE & CREATE TABLE & FROM BACKUP

```

```jsx
3- Connect to db:Database'e baglanma
sequelize.authenticate()
    .then(() => console.log('* DB Connected *'))
    .catch(() => console.log('* DB Not Connected *'))

Bu son islemnden sonra artik modelim hazir.
Modeli baz alarak CRUD islemleri yapacagim.
Todo tablomun standartlarini da belirledim (Field kismi)
Artik bu standratlara uymami model yonetecek ve standart disina cikmama engel olacak.
```

##

```jsx

```

##

```jsx

```

##

```jsx

```

##

```jsx

```
