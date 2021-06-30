CREATE DATABASE todo;
\c todo;
CREATE TABLE users (
    id SERIAL,
    name VARCHAR(255)
);
CREATE TABLE passwords (
    id SERIAL,
    user_id INTEGER,
    password VARCHAR(255)
);
CREATE TABLE todos (
    id SERIAL,
    task VARCHAR(255)
);
CREATE TABLE categories (
    id SERIAL,
    name VARCHAR(255)
);
CREATE TABLE todos_categories (
    id SERIAL,
    todos_id INTEGER,
    categories_id INTEGER
);

INSERT INTO categories (name) VALUES ('Work');
INSERT INTO categories (name) VALUES ('Fun');
INSERT INTO categories (name) VALUES ('Resturants');
INSERT INTO categories (name) VALUES ('Groceries');
INSERT INTO categories (name) VALUES ('Books');
INSERT INTO categories (name) VALUES ('Games');
INSERT INTO categories (name) VALUES ('Default');