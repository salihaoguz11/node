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


```

## NEDEN SEQUELIZE KULLANIYORUM?

```jsx
1-Model yapisi kurmak icin.
2-ORM yapisini kullanabilmek icin.
ORM mantigiyla haberlesmek ve database'e baglanmak icin.
```

```jsx

```

```jsx

```
