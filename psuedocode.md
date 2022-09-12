# Psuedo Code For 11

## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

## Psuedo Code

```md
- .env for SQL stuff
- enter schema for DB, do the seed
  - schema info is listed in other readme, associations need to be made too
- when server is started sequelize should work
- GET for products, categories, and tags work
- info should be displayed in POSTMAN
- CAN DO POST, PATCH, and DELETE
  - requires doing some more routing stuff in provided folders
```
