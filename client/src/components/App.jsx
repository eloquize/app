import React, { useState, useEffect } from 'react';
import { getQuestions } from '../utils/api';
import Login from './Login';
import Questions from './Questions';

function App() {
  const [login, setLogin] = useState(false);

  const [questions, setQuestions] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getQuestions()
      .then(data => {
        setQuestions(data);
        setLoaded(true);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <span>Welcome</span>
      <div className="navigation">
        <div className="logo">eloquize</div>
        <div className="summary">summary</div>
        <div className="newQ">new question</div>
        <button className="logout" type="button">log out</button>
      </div>
      {login ? <div>hello</div> : <Login /> }
      {loaded ? <Questions questions={questions} /> : null}
    </div>
  );
}

export default App;
