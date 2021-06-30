CREATE DATABASE todo;
\c todo;
CREATE TABLE users (
    id SERIAL,
    name VARCHAR(255),
);
CREATE TABLE passwords (
    id SERIAL,
    user_id,
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