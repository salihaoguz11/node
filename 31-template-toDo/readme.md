###

###

###

### TEMPLATE NODE -JS

```jsx
Backend ile full stack proje yapmamiza olanak saglayan sisteme template denir.
Normalde Frontend backend ile ilatisime gecer ve JSON datayi alma ve verme isleriyle ilgilenir.
HTML  ve CSS olarak kullaniciya goruntuyu verir.
Node js ile bir backend projesi yapariz ve frontende ihtiyac vardir.
Bu verilerin browsera basilmasi icin frontende ihtiyac vardir.
Node js bize full stack projesi yama imkanini verir.

Backend bolumune HTML  CSSve JS in girdigi bir backend yazmamiza olanak saglar.
Bu sekilde browsera goruntuyu NODE JS verir. Buna template service adi verilir.

MVC -  model view controller da view kismini Template temsil etmektedir.

```

### TEMPLATE - EJS

```jsx
EJS bir template motordur-engine.
Kodlari isleyip cikti veren
Kodu termine yaz ve ejs yi indir.
$ npm i ejs
$ nodemon app
https://ejs.co/
https://www.npmjs.com/package/ejs
https://github.com/mde/ejs/wiki/Using-EJS-with-Express


```

### NEDEN TEMPLATE - EJS

```jsx
1-Basit, kolay ogreniliyor.
2-Conventera gerek olmadigi icin daha hizli.
Direk HTML kodu yazariz
3- Populer

Normalde Jade yada Pug da kullanilabilir. Bunlarda EJS gibi islev gorebilir ama
yapilari biraz daha farklidir. Permonasi biraz dusurur bu farklilikta.HTML donusturme
(convert) yaptiklari icin o sebple performansi dusurebilir.

Bunlarin hepsi NODE JS- Backend  icinde bizim HTML kodu yazmamizi saglar.


```

###

```jsx
App.js sayfasinda su kodlari yazarak ben burada EJS motoru kullancagim diye
bildirmem gerekiyor.

// Setting template engine:
app.set('view engine', 'ejs')

Ana dizinde "views" adinda yeni bir klasor olusturuyoruz.
views klasoru icinde is "index.ejs" bir file olusturuyoruz.
HTML dosyalarimin yerini gostermek icinde bu kodu yaziyoruz.
HTML kodlarim bu klasorun icinde


// default template folder: ./views/
app.set('views', './public')

Default olarak views klasoru kullanilir. Ama ben baska
bir klasoru de kullanabilirim.
Views klasorunu degil public kulasarunu kullan diyoruz.




Daha sonra app sayfasina  bu kodlari ekliyoruz.
Artik res.send yerine  res.render kullaniyoruz.
Icine de parametre olarak ekranda gostermek istedigim dosyanin
adini yaziyorum.

app.all("/", (req, res) => {
  // View Template:
  // call ejs file in ./views/
  // res.render('index.ejs')
  res.render("index");
});




```

### EJS TAG - <% %>

```jsx
 Ejs nin acilis etiketi <%
 kapanis etiketi ise  %>
 Ejs ne  zaman <%  ifadesini gorurse burada node js kodu oldugunu
 yani dinamik bir oldugunu algiliyor. Ona gore degerlendirme yapiyor.
 Ayni Reactta js kodunu {} icine    yazdigimiz gibi burada  da <% %>
 Bu tag icine yaziyoruz. Bir tag icinde birden fazla satir yazabiliriz.

      <% console.log('template running' %>)
 Bu sekilde yazarsam eger sadece kendi terminalimde gorurum ama
 browser console da gormuyorum.

       <pre>   </pre>
HTML de burada yazdigim gibi goster demek.
Yazdigimiz koddaki bosluklar otomatik algilar.
Trim yapmaz.

```

### EJS YAZIM KURALLARI

```jsx

1- <%= %> =>
 Dinamik veri yazdirir. Ekrana yazi yazdiririz.
 <%= '<p><b>Text</b></p>'  %>

2-<% %>  =>
 Direk yazsin. Guvenli moda gerek yok.
 <%- '<p><b>Text</b></p>' %>

<%# commment %> => comment yazma

3-<%%  %> =>
cancel template code
<%% no template %> yazarsam
ekranda cikti bu sekilde olur
<% no template %>


4-<%- -%> =>
 direct-print to html and remove newLine (\n)
 Alt satira gecmeyi iptal ederiz.
 <%- '<p><b>Text</b></p>' -%>



```

###

```jsx

Bu kodlari app js route kismina yapistiriyoruz.
hem HTML cikti verecegiz hemde API de hizmeti verecegiz.
app.use('/api', require('./app/routes/todo.router'))
app.use('/view', require('./app/routes/todo.view.router'))

```

###

```jsx

```
