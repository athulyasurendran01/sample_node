const express = require('express');
const cors = require('cors');

const app = express();
const db = require('./db');
global.__root = __dirname + '/';

app.use(cors());
app.get('/api', function (req, res) {
  res.status(200).send('API works.');
});

const stayController = require(__root + 'app/stay/stayController');
app.use('/api/stay', stayController);

// var AuthController = require(__root + 'auth/AuthController');
// app.use('/api/auth', AuthController);

module.exports = app;