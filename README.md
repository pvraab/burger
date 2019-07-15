# Eat A Burger

# Node Express Handlebars

### Overview

Create a burger eating logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!). Follow the MVC design pattern; use Node and MySQL to query and route data in the app, and Handlebars is used to generate the HTML.

### GitHub Access

- [Source code repository](<https://github.com/pvraab/burger>)
- [Application URL](<https://pvraab-burger.herokuapp.com/>) - Hosted on Heroku so we can run the Express server and use the JawsDB MySQL addon.

### Detailed Functionality

- Consume Grilled Beef Disks! is a restaurant app that lets users input the names of burgers they'd like to eat.
- Whenever a user submits a burger's name, the app will display the burger on the left side of the page -- waiting to be devoured.
- Each burger in the waiting area also has a `Eat It!` button. When the user clicks it, the burger will move to the right side of the page.
- There is also a `Delete!` button for deleting an entry from the screen and a `Return!` button to move it from the right of the screen back to the left side..
- The app stores every burger in a database, whether devoured or not.

#### MySQL Database Setup

- Database called `burgers_db`.
- Use a `burgers` table with these fields:
  - **id**: an auto incrementing int that serves as the primary key.
  - **burger_name**: a string.
  - **devoured**: a boolean.

#### Application Design

- Inside the`burger` directory, create a folder named `config`.
- Create a `connection.js` file inside `config` directory.
   - Inside the `connection.js` file, setup the code to connect Node to MySQL.
   - Export the connection.
- Create an `orm.js` file inside `config` directory.
   - Import (require) `connection.js` into `orm.js`
   - In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
     - `selectAll()`
     - `insertOne()`
     - `updateOne()`
     - `deleteOne()`
   - Export the ORM object in `module.exports`.

#### Model setup

- Inside your `burger` directory, create a folder named `models`.
  - In `models`, make a `burger.js` file.
    - Inside `burger.js`, import `orm.js` into `burger.js`
    - Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.
    - Export at the end of the `burger.js` file.

#### Controller setup

- Inside your `burger` directory, create a folder named `controllers`.

- In `controllers`, create the `burgers_controller.js` file.

- Inside the `burgers_controller.js` file, import the following:
  - Express

  - burger.js

- Create the `router` for the app, and export the `router` at the end of your file.

#### View setup

- Inside your `burger` directory, create a folder named `views`.

- Create the `index.handlebars` file inside `views` directory.
- Create the `layouts` directory inside `views` directory.
  - Create the `main.handlebars` file inside `layouts` directory.
  - Setup the `main.handlebars` file so it's able to be used by Handlebars.
  - Setup the `index.handlebars` to have the template that Handlebars can render onto.
  - Create a button in `index.handlebars` that will submit the user input into the database.

#### Directory structure

Use this file and directory structure:

```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```



------

### Technologies Used

- JavaScript
- jQuery
- Express
- AJAX
- npm package path
- BootStrap
- HandleBars
- MySQL
- Heroku
- Node.js
- ORM
- MVC Design Pattern

### Portfolio

Click on my Portfolio at my portfolio page at: <https://pvraab.github.io/RaabPortfolio/> to see the link to this app.