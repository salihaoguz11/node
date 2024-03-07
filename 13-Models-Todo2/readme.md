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
