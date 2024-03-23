# TOKEN PERMISSIONS

###

```jsx
Frontend bir login bilgisi gonderince o benim login controllerima girer.
Frontend  her baska sayfaya girdiginde benim bu user bilgilerini hatirlamam lazim.
Tarayicialrda veya serverlarda session ve cookies alanalri vardir ve user bilgileri
burada saklariz ve bu sekilde FE baska bir URL ye gelmek istedigi zaman ben sistem
olarak session-cookie ye bakar ve ona gore islem yaparim.
Fakat session-cookie guvenli bir yontem degildir. Bu sebeple devreye Token girer.

```

### TOKEN CESITLERI

```jsx
Token
Simple Token
Basic Token
Classic Token
Token Authentication

```

### AUTHENTICATION VS AUTHORIZATION

```jsx
AUTHENTICATION : Kimlik kontolu. Kullaniciyi engellemez.
Sadece user bilgilerini alir. Gelen userin kimlik bilgilerini kontrol eder.

AUTHORIZATION /PERMISSIONS   : Yetki kontrolu.

Template: Full stack bir projeye denir.
 Session-cookie burada kullanilabilr.

```

###

```jsx
FE user bilgilerini yollayip login olmak istedi.
 Ben bu bilgileri bir database'e gonderdim ve oradan
kontrol etmem lazim.Ve kullaniciya ok diye donus yapacagim
 ama user baska bir route gitmek isteyince benim useri hatirlamam lazim.
 Ben TOKEN adinda bir model daha acip user giris bilgilerini orada saklayacagim.
 Token tablosunda her userId 'ye bir Token olusturup kayit etmis olacagim.

Kullanici giris yapinca burada bir TOKEN olustur.
O Token verisini user'a geri yollacagim FE bu token ile
butun islemleri gerceklestirir. Header basligi altinda bana TOKEN
bilgisini yollar. Ona gore izin verip vermeme durumu olusacak.

```

### Neden session degil Token tercih ederim?

```jsx
1-Guvenlik
2-Bu sekilde global olmus olur. Mobile app/e de hizmet veriyoruz. yani bir user
sadece tarayiciyla giris yapmaz,farkli yerlerden de girebilir.
Cookie kontrolu tarayicida gerceklesir ama bir application cookie desteklmeyebilir.

```

###

```jsx

```

###

```jsx

```
