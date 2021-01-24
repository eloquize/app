import React, { useState, useEffect } from 'react';
import { getQuestions } from '../utils/api';
import Login from './Login';
import Questions from './Questions';

function App() {
  const [login, setLogin] = useState(false);

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getQuestions()
      .then(data => setQuestions(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <span>Welcome</span>
      {login ? <div>hello</div> : <Login /> }
      <Questions questions={questions} />
    </div>
  );
}

export default App;
