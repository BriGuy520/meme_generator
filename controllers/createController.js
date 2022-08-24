const { request } = require('express');
let createModel = require('../models/createModel');

module.exports = {
  crudForm: function(req, res){
    res.render('crud-form');
  },
  createData: function(req,res){
    const inputData = {
      user: request.body.user,
      image: request.body.image,
      text: request.body.text,
      date_added: request.body.dateAdded
    }

    createModel.createData(inputData, function(data){
      res.redirect('/crud/form');
      console.log(data.affectedRows + " record created");
    });
  }
}