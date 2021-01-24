import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { getQuestions } from '../utils/api';
import Login from './Login';
import Questions from './Questions';
import Speech from './Speech';

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getQuestions()
      .then((data) => {
        setQuestions(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Router>
      <div>
        <span>Welcome</span>
        <Switch>
          <Route path="/questions">
            <Questions questions={questions} />
          </Route>
          <Route path="/speech">
            <Speech />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
