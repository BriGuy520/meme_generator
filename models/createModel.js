const db = require('../database');

module.exports = {
  createData:function(inputData, callback){
    let sql = `INSERT INTO memes (user, image, text, dateAdded) VALUES (?)`;
    db.query(sql,inputData, function(err, data) {
      if(err) throw err;
        return callback(data);
    })
  }
}