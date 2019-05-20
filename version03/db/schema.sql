DROP DATABASE dog_db;
CREATE DATABASE dog_db;

USE dog_db;

CREATE TABLE dogs
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
  picurl varchar(512) NOT NULL,
	sleepy BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
