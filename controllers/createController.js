const { request } = require('express');
let createModel = require('../models/createModel');

module.exports = {
  createData: function(req,res){
 
    const inputData = {
      user: 'Brian',
      image: req.body.image,
      text: req.body.text,
      dateAdded: new Date(),
    }

    createModel.createData(inputData, function(data){
      res.redirect('/');
      console.log(data.affectedRows + " record created");
    });
  }
}