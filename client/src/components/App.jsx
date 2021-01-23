import React, { useState, useEffect } from 'react';
import { getExample } from '../utils/api';
import Speech from './Speech';

function App() {
  const [text, setText] = useState('Hello React!');

  useEffect(() => {
    // eslint-disable-next-line no-console
    getExample().then(setText).catch(console.log);
  }, []);

  return (
    <div>
      <>{text}</>
      <Speech />
    </div>
  );
}

export default App;
