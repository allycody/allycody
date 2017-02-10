'use strict';

const express = require('express');
const volleyball = require('volleyball');
const bodyParser = require('body-parser');
const {resolve} = require('path')

const app = express();

app.use(volleyball);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname));

app.use('/api', require('./server/api'))
app.get('/*', (_, res) => res.sendFile(resolve(__dirname, 'index.html')))



app.listen(3000, function () {
  console.log('Server listening on port', 3000);
});

