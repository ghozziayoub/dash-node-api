const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');


const port = process.env.PORT || 3000;
const api = require('./routes/api');
var app = express();

app.use(bodyParser.json());

app.use('/api',api);

app.listen(port,()=>{
  console.log(`Started on port ${port}`);
});
