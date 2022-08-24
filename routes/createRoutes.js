let createController = require('../controllers/createController');

module.exports = (app) => {

  app.get('/form', createController.crudForm);

  app.post('/upload', createController.createData);

}
