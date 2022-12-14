-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;
USE ecommerce_db;

CREATE TABLE Category (
  id INT NOT NULL AUTO_INCREMENT,
  category_name VARCHAR(50) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE Product (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(30) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock INT NOT NULL,
  category_id INT,
  PRIMARY KEY(id)
);

CREATE TABLE Tag (
  id INT NOT NULL AUTO_INCREMENT,
  tag_name VARCHAR(30),
  PRIMARY KEY(id)
);

CREATE TABLE Product_Tag (
  id INT NOT NULL AUTO_INCREMENT,
  product_id INT,
  tag_id INT,
  PRIMARY KEY(id)
);