'use strict';

const express = require('express');
const volleyball = require('volleyball');
const bodyParser = require('body-parser');
const {resolve} = require('path')

const app = express();

app.use(volleyball);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(resolve(__dirname, 'public')));

app.use('/api', require('../server/api'))
app.get('/*', (_, res) => res.sendFile(resolve(__dirname, '../public', 'index.html')))



app.listen(3000, function () {
  console.log('Server listening on port', 3000);
});

