## How to deploy my project to render and vercel with sqlite db

```jsx

1-Make sure you install cors
2- Go to vercel Deploy your FE part
3-Deploy FE part
4- Go to app.js page and add
const cors = require("cors");
app.use(cors("Add vercel link here after deploying."));
5- Click Storage on Vercel to get storage.
6- Click Create data base /Postgres
7- Click show secret
8- Copy the link without psql
9-Go to book.js page to change our database name
10- new Sequilze(add the link here )
11- Comment in this line  sequelize.sync(); // CREATE TABLE
12-Comment out the line again
13-If you get error you add pg and pg-hstore manually to your package.json
14- Go to vercel and click data
15-Click chhose table
16-Check if there  is your data


```

## GO TO RENDER TO DEPLOY BE PART

```jsx
1- Go to render Deploy your BE part
2-Click New
3-Web services
4-Find the project
5-Build command npm install
6-Start command node app.js
7- Choose free
8- Add variables if you have any in your .env file
9- Create.


```
