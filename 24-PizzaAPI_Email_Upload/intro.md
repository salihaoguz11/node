# PIZZA API

### ERD:

![ERD](./erdPizzaAPI.png)

### Folder/File Structure:

```
    .env
    .gitignore
    index.js
    package.json
    readme.md
    logs/
    src/
        configs/
            dbConnection.js
        controllers/
            auth.js
            order.js
            pizza.js
            token.js
            topping.js
            user.js
        helpers/
            passwordEncrypt.js
            sync.js
        middlewares/
            authentication.js
            errorHandler.js
            queryHandler.js
            logger.js
            permissions.js
        models/
        routes/
            auth.js
            document.js
            index.js
            order.js
            pizza.js
            token.js
            topping.js
            user.js
```