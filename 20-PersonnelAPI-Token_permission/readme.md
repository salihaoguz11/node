# TOKEN PERMISSIONS

###

```jsx
Frontend bir login bilgisi gonderince o benim login controllerima girer.
Frontend  her baska sayfaya girdiginde benim bu user bilgilerini hatirlamam lazim.
Tarayicilarda veya serverlarda session ve cookies alanlari vardir ve user bilgilerini
burada saklariz ve bu sekilde FE baska bir URL ye gelmek istedigi zaman ben sistem
olarak session-cookie ye bakar ve ona gore islem yaparim.
Fakat session-cookie guvenli bir yontem degildir. Bu sebeple devreye Token girer.

```

### TOKEN AUTHENTICATION CESITLERI

```jsx
Token
Simple Token
Basic Token
Classic Token
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

### TOKEN OLUSTURMA ASAMALARI

```jsx
1-Model olusturma             - Token Model
2-Controller olusturma        - Token Controller
3-Authentication middleware   - Kimlik bilgisi alma ve user bilgini global haline getirme.
4-Authorization middleware    - Yetki kontrolu. Kimin neye yetkisi olacak.
5-Routes                      - Kim hangi route'a, hangi bilgilere  erisim saglayacak.
```

### Neden session degil Token tercih ederim?

```jsx
1-Guvenlik
2-Bu sekilde global olmus olur. Mobile app/e de hizmet veriyoruz. yani bir user
sadece tarayiciyla giris yapmaz,farkli yerlerden de girebilir.
Cookie kontrolu tarayicida gerceklesir ama bir application cookie desteklmeyebilir.

```

### ADMIN BILGILERI

```jsx
{
 "departmentId":"65f8e31bcd98397415585032",
 "username": "test17",
 "password": "123456",
 "firstName": "firstName",
 "lastName": "lastName",
 "phone": "123456789",
 "email": "email12356@site.com",
 "title": "title",
 "salary": 2500,
 "description": "description",
 "isActive": true,
 "isAdmin": true,
 "isLead": true,
 "startedAt": "2023-10-15 13:14:15"
}

```

### NORMAL USER

```jsx
{
  "username": "testF0",
  "password": "1234"
}

```
