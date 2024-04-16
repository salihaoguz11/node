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

FE bana header authorization da bearer yazarak access tokeni yollayacak.
Bunun icinde usser bilgisi oldugu icin veri tabanina gidip sorgu gerekmez.
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

### JWT TOKEN OLUSTURMA - jwt.sign

```jsx

                    const accessInfo = {
                             // kisa omurlu ama kritik datalar icerir.
                        key: process.env.ACCESS_KEY,
                        time: process.env?.ACCESS_EXP || '30m',
                        data: {
                            //user bilgileri comple saklanacak.
                            _id: user._id,
                            id: user.id,
                            username: user.username,
                            email: user.email,
                            password: user.password,
                            isActive: user.isActive,
                            isAdmin: user.isAdmin,
                        },
                    }
                    AccessToken access key ile sifreleyip ,30 dakika omur verip,
                    onun icine de user datalrini comple gomuyorum.

                    const refreshInfo = {
                         //uzun omurlu ve kritik datalar icermez.

                        key: process.env.REFRESH_KEY,
                        time: process.env?.REFRESH_EXP || '30m',
                           //kritik olmayan verileri gonderiyoruz.
              id: user.id,
                        data: {
                            id: user.id,
                            password: user.password // encrypted password
                        },
                    }
                    RefreshToken refresh key ile sifreleyip ,3 gun  omur verip,
                    onun icine de daha az kritik datalari gomuyorum.

                    ** jwt.sign(access_data, access_key, { expiresIn: '30m' }) **

                    const accessToken = jwt.sign(accessInfo.data, accessInfo.key, { expiresIn: accessInfo.time })

                    jwt.sign => jwt kodu olusturma kodu
                    accessInfo.data => bu datayi jetona donustur -imzala
                    accessInfo.key, => jetona donusturken kullanilacak key
                    expiresIn => omur bic


                    const refreshToken = jwt.sign(refreshInfo.data, refreshInfo.key, { expiresIn: refreshInfo.time })

                    /* JWT */

                    res.status(200).send({
                        error: false,
                        token: tokenData.token, //simple token
                        bearer: {
                            access: accessToken,
                            refresh: refreshToken,
                        },
                        user
                    })




```

### token dogrulama - jwt.verify

```jsx
      Bu bolum authenticationa mw e  eklenir. Verify iki parametre alirsa senkron olur
      ama 3 parametre alirsa asenkron olur.

      Ayni isimde bir metodu farkli parametrelerle kullanmak OVERLOADING denir.

    jwt.verify(
        tokenKey[1],
        process.env.ACCESS_KEY,
        function (error, accessData) {
            // burada JWT ile gonderdigim user datalar var
          req.user = accessData ? accessData : false;
          // req.user'a atama yapiyoruz.
        }
      );

       tokenKey[1] verisini   process.env.ACCESS_KEY ile cozdukten sonra
        function ya error yada  accessData doner.
        Burada db e gidip sorgu yapilmadan verify yaptim.




```

###

```jsx

```

### nested populate

```jsx
['userId', { path: 'pizzaId', select: '-__v', populate: { path: 'toppingIds', select: 'name' } }]
nested populate
bu sekilde pizzaId icerisinde ki  toppings detaillerine ulasabilirim.
select: 'name' sadece name goster diyoruz.
select: '-id' gormek istemedigim seyin basina - yazabilirim. Zaten sadece id default olarak gelir.
select: '-__v', bu haric digerleri gozukur.

```

###

```jsx

```

### THUNDER DENEMELER - ADMIN

```jsx
{
  "username": "suzan12345",
  "email": "suzan123412@gmail.com",
  "password": "aA?1234567",
  "isActive": true,
  "isAdmin": true
}


```

### THUNDER DENEMELER - user

```jsx
        {
  "username": "suzan1234",
  "email": "suzan1234456@gmail.com",
  "password": "aA?12344",
  "isActive": true,
  "isAdmin": false
}




```

### refresh yapmak ve yeni access token icin Thunder

```jsx

auth route ta refresh route olusturuyoruz.
http://127.0.0.1:8000/auth/refresh

body kismina  bu kod blogunu yapistirip yeniden access token isteriz.
 "bearer": {
    "refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDVmNTY3NjY5NjY3YTE1N2U5NGE5MSIsInBhc3N3b3JkIjoiZWE3NjMzNGI2YmYwZDY5NzdlOWM3OTI2MmU1MGUyOWJlM2ZiMTFhM2VmYTRkNzMwMGY1MTU5Yzg0NjA5NWNhYiIsImlhdCI6MTcxMTY2NjY1NywiZXhwIjoxNzExOTI1ODU3fQ.yCX8FF_HAjRdHD0eeSmWQSYCAjOooCYRogfudNKXPuk"
  }



```
