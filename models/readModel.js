let db = require('../database');

module.exports = {
  readData: function(callback){
    let sql = 'SELECT * FROM meme_generator';

    db.query(sql, function(err, data, fields){
      if(err) throw err;

      return callback(data);
    })
  }
}