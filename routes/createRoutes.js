let createController = require('../controllers/createController');
const multer = require('multer');
const upload = multer({dest: 'uploads/'});

module.exports = (app) => {

  app.post('/upload', upload.single('image'), createController.createData);

}
