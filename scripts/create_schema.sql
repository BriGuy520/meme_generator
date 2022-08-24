CREATE DATABASE meme_generator_app;

CREATE TABLE `meme_generator_app`.`memes` (
  `id` INT NOT NULL AUTO_INCREMENT, 
  `user` VARCHAR(45) NOT NULL,
  `image` BLOB NOT NULL,
  `text` VARCHAR(255) NOT NULL,
  `dateAdded` DATE,
  PRIMARY KEY(`id`));