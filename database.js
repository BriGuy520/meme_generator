const mysql = require('mysql2');

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password: 'Brian11!',
  database: 'meme_generator'
});

connection.connect((err) => {

  if(err){
    console.log("Error occured", err);
  } else {
    console.log("Connected to database");
  }
});

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'meme_generator',
  waitForConnections: true,
  connectionLimit: 4,
  queueLimit: 0
});

module.exports = connection;
