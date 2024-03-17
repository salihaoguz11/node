# Nodejs Session Class-notes- FILTERING & SEARCHING & SORTING & PAGINATION

```jsx
Get ile data gondereceksem URL kullaniyoruz.
URL ? sonrasi query olarak adlandirilir.

```

###

```jsx
Filter => Direk icinde arama yapar. Exact kelimeyi arar.
search => icende geciyor mu ona bakar.
```

### Queries

```jsx
* queries key-value seklinde yazilir. Yani aralarinda " = " olmalidir.aralarina & koyup tekrar yeni bir query yazabilirim.
Mesela search[title]=test search ana basligim, title icinde test ara diyorum.
* URL sisteminde false yada true yazamazin ,onun yerine 1-0 kullanilir. 1-true,0-false temsil eder.
* URL query yazarken arada bosluk olmaz. Ama test 10 ararsan bu sekilde yazabilirisn. Tarayici bu bosluga bazen %20 gibi seyler ekler.
*query siralamasi onemli degildir.

URL de query'i almanin uolu req.query yazmaktir.
   console.log(req.query); yazinca bize donen veri su sekildedir: Query verisi object olarak gelir.

   {
  search: {
    title: 'test',
    content: 'testsort[createdAt]=asc',
    createdAt: '2024'
  }


```

### FILTER

```jsx
   const filter= req.query?.filter || {}
   bu sekilde filter'i bir degiskene atariz ve
   find icine yerlestirirz. Yani filter icinde ne gelmisse find onu filtreler.
       const data = await BlogPost.find(filter);
    res.status(200).send({
      error: false,
      data: data,
    });
  },

```

### SEARCHING ICINDE ARAMA & REGEX

```jsx

 const search = req.query?.search || {};
    console.log(search);
    { title: 'test 0' }
    eger bu sekilde find icine koyarsam birebir arama yapar. Title'i test 0 olan
     degil de title icinde test 0 aramam lazim.Bunun icin regex (regular expression) kullanmamiz gerekecek.
    Bana verinin regexli formatta gelmesi lazim. Regex ile datanin icinde ifadeyi ariyor.
     { title: 'test', content: 'test' } -> { title: { $regex: 'test' },
     content: { $regex: 'test' } }

         for(let key in search){
     search[key]={$regex:search[key]}
    }

    search icinde ki verileri bir for dongusene sokuyorum ve her bir elemanin onune regex koymus oluyorum.

    console.log(search);
    { title: { '$regex': 'test 0' } } ve console da bu sekilde geliyor.


     const data = await BlogPost.find({...filter,...search});
Bu sekilde hem search hemde filter kullanmis olurum. Destructuring yaptim. Spread yapmis olduk.


```

### SORTING

```jsx

Su verileri siralamaya gore getir deriz.
asc: A-Z - desc: Z-A
Bu sekilde artan yada azalan sekilde veri getiririz.
 const sort = req.query?.sort || {};
    console.log(sort);
        const data = await BlogPost.find({ ...filter, ...search }).sort(sort);
    res.status(200).send({
      error: false,
      data: data,
    });
  },

```

### PAGINATION

```jsx
Buyuk miktarda verilerin hepsinin birden gelmesini istemeyiz. Bunun 20 ser yada 50 ser gelmesini saglayabiliriz.
Limit:Sayfa basi kac kayit getirecegiz.
let limit = Number(req.query?.limit);//sayiya ceviririz.Bazen number gelemeybilir
    console.log(limit);
    const data = await BlogPost.find({ ...filter, ...search })
      .sort(sort)
      .limit(limit);

Page:
    let page = Number(req.query?.page);
    page = page > 0 ? page : 1;
    console.log(page);


```

### MIDDLEWARE

```jsx
Blog icin listte bircok sorgu yaptik ama bunu her zaman yapamayiz.
Mesela blogCategory de sayi cok yuksek olabilir ve bunu tek tek yazamam.
 Bunu baska sayfaya tasimak en mantiklisidir. Middleware olmasi mantiklidir.
  Veriyi URL den cekecegiz ve benim bu URL'e ulasmam gerekir.
   Yani req parametresine ihtiyacim var. O sebeple middleware yapiyoruz,fonksiyon yapmiyoruz.

 res.getModelListDetails = async (Model) => {
    }
Bunun icin res. bir fonksiyon atiyoruz ve bu sekilde dinamik bir sekilde parametre olarak model isimlerimizi yollayabiliyoruz.


* Middleware daha sonra app.use de cagiririz.
app.use(require("./src/middlewares/findSearchSortPage.js"));
Artik benim getModelListDetails fonksiyonum ilgili yerden cagrilabilecek.
Artik butun route yada controllerlardan cagirilabilir.
```

### POPULATE

```jsx
.populate() ile foreign keyin bilgilerine de ulasiriz.
Referansta belirttigimiz isimden dolayi populate f.k tanimis olur.
.populate(ilgili field ismi)


```

###

```jsx

```

### THUNDER DENEMELER

```jsx
http://127.0.0.1:8000/blog/posts?search[title]=test&filter[published]=1&sort[createdAt]=asc

http://127.0.0.1:8000/blog/posts?sort[createdAt]=asc&search[createdAt]=2024

http://127.0.0.1:8000/blog/posts?search[title]=test&search[content]=testsort[createdAt]=asc&search[createdAt]=2024

http://127.0.0.1:8000/blog/posts?filter[blogCategoryId]=65f5fe0c608f1f0e3d07bb46

****filtre ve search denemeler*****

http://127.0.0.1:8000/blog/posts?filter[title]=test 1 title
title' i filtrele ve test 1 title olanlari getir.

http://127.0.0.1:8000/blog/posts?search[title]=test 1

http://127.0.0.1:8000/blog/posts?filter[published]=1&search[title]=test 1&search[content]=test 10
publish olanlari getir,title icinde test 1 ara,content icinde de test 10 ara.

***** Sort denemeler ******

http://127.0.0.1:8000/blog/posts?sort[createdAt]=desc

http://127.0.0.1:8000/blog/posts?sort[title]=desc
azalan sekilde gelir.

http://127.0.0.1:8000/blog/posts?sort[title]=desc&search[title]=test 1&filter[published]=1



***** LIMIT & PAGINATION ******
http://127.0.0.1:8000/blog/posts?page=5&limit=20


**** PAGE  *******

http://127.0.0.1:8000/blog/posts?page=3

console.log bu sekilde gelir.
limit 20
page 2
skip 40

http://127.0.0.1:8000/blog/posts?page=5&limit=5

limit 5
page 4
skip 20

```
