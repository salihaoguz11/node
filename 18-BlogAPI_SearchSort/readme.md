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
queries key-value seklinde yazilir. Yani aralarinda " = " olmalidir.aralarina & koyup tekrar yeni bir query yazabilirim.
Mesela search[title]=test search ana basligim, title icinde test ara diyorum.
URL sisteminde false yada true yazamazin ,onun yerine 1-0 kullanilir. 1-true,0-false temsil eder.

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

### SEARCHING ICINDE ARAMA

```jsx

 const search = req.query?.search || {};
    console.log(search);
    { title: 'test 0' }
    eger bu sekilde find icine koyarsam birebir arama yapar. Title'i test 0 olan degil de title icinde test 0 aramam lazim.Bunun icin regex (regular expression) kullanmamiz gerekecek.
    Bana verinin regexli formatta gelmesi lazim.
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

### THUNDER DENEMELER

```jsx
http://127.0.0.1:8000/blog/posts?search[title]=test&filter[published]=1&sort[createdAt]=asc

http://127.0.0.1:8000/blog/posts?sort[createdAt]=asc&search[createdAt]=2024

http://127.0.0.1:8000/blog/posts?search[title]=test&search[content]=testsort[createdAt]=asc&search[createdAt]=2024

http://127.0.0.1:8000/blog/posts?filter[blogCategoryId]=65f5fe0c608f1f0e3d07bb46

filtre de denemeler

http://127.0.0.1:8000/blog/posts?filter[title]=test 1 title
title' i filtrele ve test 1 title olanlari getir.

http://127.0.0.1:8000/blog/posts?search[title]=test 1

http://127.0.0.1:8000/blog/posts?filter[published]=1&search[title]=test 1&search[content]=test 10
publish olanlari getir,title icinde test 1 ara,content icinde de test 10 ara.


```
