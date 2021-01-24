/* eslint-disable no-console */
const mongoose = require('mongoose');

mongoose.connect(`${process.env.MONGO_URI}/deployment` || 'mongodb://localhost/gamification', { useNewUrlParser: true, useUnifiedTopology: true })
  .catch((err) => {
    console.log(err);
  });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

// Schemas
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  hash: String,
  salt: String,
});

const questionsSchema = new mongoose.Schema({
  id: Number,
  question: String,
  status: Number,
  keys: Array,
});

// Collections
const Users = mongoose.model('users', userSchema);
const Questions = mongoose.model('questions', questionsSchema);

// Controller methods
const createNewUser = (newUserInfo) => {
  const doc = new Users(newUserInfo);
  doc.save()
    .then(() => 'saved!')
    .catch((err) => err);
};

const getQuestions = () => Questions.find({});

const getHashSalt = (email) => Users.find({ email });

module.exports = {
  createNewUser,
  getQuestions,
  getHashSalt,
};
