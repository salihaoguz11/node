# Model - Todo 2

```jsx
npm init -y
npm i express dotenv express-async-errors
gitignore
nodemon app.js
npm install sequelize sqlite3

const express = require("express");
const app = express();
Burada express cagiriyorum ve express moturunu calistiriyorum.
Daha sonra burada ki objeyi app'e atiyorum

app.use(express.json())
Data gonderirken(POST) JSON olarak gonderecegim diye express'e bildiriyorsun.
```

## ROUTERS

```jsx
const router = express.Router(); //routers larin ustune yaz.
app.use(router); //routers larin en altina  yaz.

findByPk(); //Primary key yani id ye gore getirir.
findOne(); // Buldugu ilk kayidi getirir.
findAndCountAll(); // Hem veri sayisini hemde verileri dondurur.

UPDATE VE DELETE'te data guncellendikten sonra ki hali degil,kac adet
guncelleme yapildiysa o gelir.

DELETE - destroy
Saece kac tane sildigini gosterir.
204 status code doner ama ekrana veri gostermez.
Eger silme islemi olursa 1 doner olmazsa ise 0 doner.

 Cursorla bir yeri tikla ve asagi in Shift tusuna basili tutup baska
 yeri tikla aradaki blogu kolyaca silersin
```

##

```jsx

```

##

```jsx

```

```jsx

```

# TODO Project with Sequelize

## What? Why?

### Model Logic in MVC:

![](./intro-mvc.png)

### ORM:

![](./intro-orm.jpeg)

### SEQUELIZE:

https://sequelize.org/

![](./intro-sequelize.png)

## TODO API

### ERD:

![ERD](./erdTodoAPI.png)s
