const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/gamification', { useNewUrlParser: true, useUnifiedTopology: true })
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

/*
db.questions.insertMany([
   { id: 1, question: "Tell me about yourself!", status: "A" },
   { id: 2, question: "What Are You Passionate About?", status: "A" },
   { id: 3, question: "Where Do You See Yourself in Five Years?", status: "D" },
   { id: 4, question: "What Type of Work Environment Do You Prefer?", status: "D" },
   { id: 5, question: "How Do You Deal With Pressure or Stressful Situations?", status: "A"}
]);
*/
