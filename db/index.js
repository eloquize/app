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

/*
Step 1, enter mongo shell at terminal type mongo
Step 2, use gamification
Step 3, enter command below
db.questions.insertMany([
   { id: 1, question: "Tell me about yourself!", times: 2, keys: ["Positivity", "Creativity"]},
   { id: 2, question: "What Are You Passionate About?", times: 3, keys: ["Information Technology"]},
   { id: 3, question: "Where Do You See Yourself in Five Years?", times: 1, keys: ["Leadership"]},
   { id: 4, question: "What Type of Work Environment Do You Prefer?", times: 0, keys: ["Inclusive", "Supportive"]},
   { id: 5, question: "Give me an example of a time you were able to be creative with your work. What was exciting or difficult about it?", keys: ["Positivity", "Creativity"], times: 2},
   { id: 6, question: "Tell me about your proudest professional accomplishment", keys: ["Passion"], times: 0},
   { id: 7, question: "How Do You Deal With Pressure or Stressful Situations?", keys: ["Positivity", "Responsibility"], times: 5},
]);

Step 4, to check if collection is there
db.questions.find({})
*/
