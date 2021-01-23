const express = require('express');
const path = require('path');

const app = express();

const router = require('./routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(router);

module.exports = app;
