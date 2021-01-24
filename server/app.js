const express = require('express');
const path = require('path');
const models = require('../db');

const app = express();

const router = require('./routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/build')));

// app.use(router);

app.get('/api/questions', (req, res) => {
  models.getQuestions()
    .then((questions) => {
      res.send(questions);
    })
    .catch((err) => res.send(err));
});

app.post('/auth/login', (req, res) => {
  res.status(200).send('Welcome!');
});

app.get('/auth/login', (req, res) => {
  res.status(200).send('Welcome!');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = app;
