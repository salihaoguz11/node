# Nodejs Session Class-notes Blog App

###

```jsx
$ cp .env-sample .env
$ npm ejs
$ npm init -y
$ npm i express dotenv express-async-errors
$ npm i mongoose

```

###

```jsx

EJS acma kapama taglerini istedigimiz gibi degistirebiliriz.

*Long way

Default: open and close delimiter -> <% ... %>
const ejs = require('ejs')
ejs.delimiter = '#' // <# ... #>
ejs.openDelimiter = '{' // {# ... #>
ejs.closeDelimiter = '}' // {# ... #}

*Short way

app.set('view options', {
    // delimiter: '%',
    openDelimiter: '{',
    closeDelimiter: '}',
})

```

###

```jsx
Template TOKEN kullnmaya gerek yoktur cunku Tokenin sebebei BE nin FE yi tanimak istemesi idi.

Authentication islemlerini:
BE-FE ayri ayri ise "token" gerekir
BE_FE beraberse "Cookie - session "ile hallederiz
```

###

```jsx

href="{%= pageUrl %}&page=1"

href te ki linke ? isaretiyle baslarsan onceki qury ler hider. mesela query kismina limit=3 yazmissan
Yani sayfa basina 3 veri getir demissen onu iptal eder ve sayfa basi orjinal miktarda veri gelir
Bizde bunu iptal icin bu tarz bir sekilde yazdik
```

###

```jsx

```
