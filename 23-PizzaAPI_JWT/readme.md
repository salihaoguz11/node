# JWT - json web token

```jsx

JWT are an open,industry standart RFC 7519 method
RFC standardi almissa uluslararasi standarta uygundur.
Ne icin kullanilir?

Authorization
yada
information exchanges-veri alisverisi

```

### INSTALATION

```jsx
$
npm i jsonwebtoken

```

### JWT nin simple tokendan farki

```jsx
JWT nin simple tokendan farki icinde bir data barindiriyor olmasidir.
JWT data 3 parcadan olusur. Her parca birbirinden nokta ile ayrilir.
1-Header - token type - data ne ile sifrelendi
2-Payload - en onemli alandir. Benim yolladigim veridir. Ama sifrelenmis halidir.
3-Verify Signature - datayi cozmem icin gereken imza.

simple Token da gelen user bilgilerini veri tabaninda sorgularim.
Ama JWT ile veri tabaninda bu sorgulamaya ihtiyac yok.

* Simple token da veri tabanin checking yapariz.
JWT ile DB de hic sorgu yapilmaz
* Simple token bir data tasimaz
JWT icinde data ile gelir. Ve bu sebpten veri tabanina gitmeme gerek kalmiyor.
JWT database sorgusu yapmadigi icin performanis artirir.

```

### Neden simple token daha cok tercih edilir?

```jsx
User bilgileri database e gelir ve daha sonra FE ye JWT verilir.
JWT verirken icinde bir data gomup gonderirim yani userbilgileri-kritik veriler.
Bu data yanlis ellere gecebilir. Bu yuzden datayi verirken sinirli surede veririm Mesela 30 dk sonra
bu veri bir ise yaramayacak.

Ben FE ye verirken iki veri veririm
1-Access Token
2-Refresh Token

FE bana header authorization da bearer yazarak access token'i yollayacak.
Bunun icinde usser bilgiis oldugu icin veri tabaniona gidip sorgu gerekmez.
Ama bu access token 30 dk lik mesela. 30 dk sonra cop olacak.
Bu sebepten FE tekrar bir sorgu gonderecek ve refresh kodu gonderecek.
Tekrar access kod isteyecek. BE database de gelen veriyi check edecek.
Surekli bu islem tekrar edecek. Bu sebeten JWT pek tercih edilmiyor.
Access kod bu 30 dk boyunca db de check edilmez. Ama refresh kod check edilir.
Access kod header da refresh kod req.body de gelir.


```

### Neden JWT kullaniliyor?

```jsx

Buyuk projelerde micro services ler kullanilir. Butuncul bir servisi parcalara
ayirip farkli yerlerde tutma.
BIr e ticaret projesinde, cok trafik olacak. Trafigi dagitmak gerekir.
Mesela user service ayri bir server da olur.
Email ayri bir server da olur. Bu yapiya "micro service"  denir.
Bu kurguda token bilgisi user da kaldi ama sepet diger server da
Ve benim ikisinin arasinda iletisim kurmaya ihtiyacim var iste burada JWT devreye girer.
JWT asil kullanim alani micro servislerdir.

User sisteminde JWT olusturdum ve ozel bir anahtarla JWT yi imzaliyorum Ben bu veriyi
micro service 1 ve 2 ye gonderiyorum. Ve bu iki service te de bu "secret key" lerin ayni olmasi gerekir.
Eger secret key olmazsa bu micro serviste calismaz.

```

### JWT ZAYIF YONLER

```jsx
1-Decode edilebiliyor olmasi.

```

###

```jsx
$
npm i jsonwebtoken

```
