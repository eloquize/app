import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { getQuestions } from '../utils/api';
import Login from './Login';
import Questions from './Questions';
import Speech from './Speech';
import Stats from './Stats';
import background from '../background.svg';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Comfortaa;
    font-style: normal;
    font-weight: normal;
    color: #000000;
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
  }
  a {
    text-decoration: none;
    color: #000000;
  }
  a:visited {
    color: #000000;
  }
`;

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
      <GlobalStyle />
      <Switch>
        <Route path="/questions">
          <Questions questions={questions} />
        </Route>
        <Route path="/speech">
          <Speech />
        </Route>
        <Route path="/stats">
          <Stats />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
