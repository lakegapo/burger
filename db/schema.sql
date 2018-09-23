-- Create the burgers_db.
-- Switch to or use the burgers_db.
-- Create a burgers table with these fields:

--     id: an auto incrementing int that serves as the primary key.
--     burger_name: a string.
--     devoured: a boolean.

CREATE DATABASE IF NOT EXISTS burgers_db;
USE burgers_db;

-- Delete the burgers table if it already exists
DROP TABLE IF EXISTS burgers;

-- Create the burgers table
CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(255) NOT NULL,
    devoured BOOL DEFAULT false,
    PRIMARY KEY (id)
);
