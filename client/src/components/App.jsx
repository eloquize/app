import React, { useState, useEffect } from 'react';
import { getExample } from '../utils/api';
import Speech from './Speech';
import Login from './Login';
import Questions from './Questions';

function App() {
  const [text, setText] = useState('Hello React!');
  const [login, setLogin] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line no-console
    getExample().then(setText).catch(console.log);
  }, []);

  return (
    <div>
      <div className="navigation">
        <div className="logo">eloquize</div>
        <div className="summary">summary</div>
        <div className="newQ">new question</div>
        <button className="logout" type="button">log out</button>
      </div>
      <>{text}</>
      {login ? <div>hello</div> : <Login /> }
      <Speech />
    </div>
  );
}

export default App;
