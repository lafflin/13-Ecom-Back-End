# Module 13 Challenge

## Table of Contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)
  ​

## Overview

This weeks challenge was refactor code using Express, MySql, and Sequelize.
​

### The challenge

Refactor given code so that all of the express routes work, as well as the seeding and syncing of the database.

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
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
```

### Links

- Solution URL: [Solution](https://github.com/lafflin/13-Ecom-Back-End)
- Demo Video: [YouTube](https://youtu.be/BMwzsJGlfxo)
  ​

## My process

1. The first thing I did was create the schema
2. I followed this by making all of the models, then creating the associations
3. After this, I worked on the routing.
4. Once I got all of the routing working properly, I finished by working on the README and making the video.

### Built with

- Node.js
- Express.js
- MySql
- mysql2, Sequelize, and dotenv

### What I learned

- Exercise was good to practice routing and all things sequelize.

### Continued development

- More work with sequelize.

### Useful resources

- Google, there was a lot of useful information about how to do the queries and mysql2 stuff when I was having issues.

## Author

- Linkedin - [Max McLaughlin](https://www.linkedin.com/in/max-mcla/)

## Acknowledgments

- StackOverflow, TA's, and LA's- As helpful as always
