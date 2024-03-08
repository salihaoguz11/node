# MongoDB

* CommunityServer: https://www.mongodb.com/try/download/community
* Compass: https://www.mongodb.com/try/download/compass 
* Cloud: https://account.mongodb.com
* VSCode Extension: https://marketplace.visualstudio.com/items?itemName=mongodb.mongodb-vscode 

### MongoDB

* Installation Notes:

    * Windows
        * MongoDB CommunityServer & Compass
            * https://www.mongodb.com/try/download/community
            * https://lms.clarusway.com/mod/lesson/view.php?id=4089
        * MongoDB Shell (Mongosh): 
            * https://www.mongodb.com/try/download/shell [Select "Windows 64-bit (8.1+) (MSI)"]
            * Set "uncheck" for "install just for you"

    * MacOS
        * HomeBrew: https://brew.sh
            ```sh
            # HomeBrew Install
            $ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
            $ brew -v # --version
            # HomeBrew Uninstall:
            $ brew cleanup # delete unused apps.
            $ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/uninstall.sh)"
            ```
        * MongoDB CommunityServer & Mongosh: https://www.mongodb.com/docs/v4.0/tutorial/install-mongodb-on-os-x/
            ```sh
            $ brew tap mongodb/brew # brew tap
            $ brew install mongodb-community
            $ brew services start mongodb-community # brew services list|stop
            # Manual Start: $ mongod --config /usr/local/etc/mongod.conf --fork
            ```
        * MongoDB Compass: https://www.mongodb.com/try/download/compass
        
    * Linux:
        * https://www.mongodb.com/docs/manual/administration/install-on-linux/


### Mongosh:
    ```sh
    $ mongosh --version
    $ mongosh # defaul:local
    $ mongosh mongodb://localhost:27017/