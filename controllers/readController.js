let readModel = require('../models/readModel');

module.exports = {

  readData:function(req, res){
    readModel.readData(function(data){
      res.render('crud-table', {fetchData: data});
    })
  }
}