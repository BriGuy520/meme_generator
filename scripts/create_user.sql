CREATE USER 'meme_generator'@'localhost' IDENTIFIED BY 'mySuperSecretPassword';

GRANT ALL PRIVILEGES ON meme_generator_app.memes TO 'meme_generator'@'localhost';

flush privileges;