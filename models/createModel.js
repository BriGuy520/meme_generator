const db = require('../database');

module.exports = {
  createData:function(inputData, callback){
    let sql = 'INSERT INTO meme_generator SET ?';
    db.query(sql,inputData, function(err, data) {
      if(err) throw err;
        return callback(data);
    })
  }
}