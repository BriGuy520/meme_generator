const axios = require('axios');
const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 8080;

require('./routes/createRoutes')(app);
require('./routes/updateRoutes')(app);
require('./routes/readRoutes')(app);
require('./routes/deleteRoutes')(app);


// serve static fils

app.use(compression());

// adding set of security middlewares
app.use(helmet());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let corsOptions = {
  origin: '*', 
  optionsSuccessStatus: 200,
}

app.use(cors(corsOptions));



app.listen(PORT, () => {
  console.log(`Listening on port " ${PORT}`);
});