import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { getQuestions } from '../utils/api';
import Login from './Login';
import Questions from './Questions';
import Speech from './Speech';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Comfortaa;
    font-style: normal;
    font-weight: normal;
    color: #000000;
  }
`;

const Wrapper = styled.div`
  background-image: url("../background.svg");
  background-size: cover;
  background-repeat: no-repeat;
  min-width: 100vw;
  min-height: 100vh;
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
      <Wrapper>
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
      </Wrapper>
    </Router>
  );
}

export default App;
