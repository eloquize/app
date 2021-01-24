import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

export default function Questions({ questions }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextQuestion = () => {
    if (currentIndex === questions.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div>
      <NavBar />
      <span>Current Behaviorial Questions</span>
      <div>
        <span>{questions[currentIndex].question}</span>
        <br />
        <div>
          <span>My power words:</span>
          {questions[currentIndex].keys.map((word, i) => <span key={i}>{word}</span>)}
        </div>
        <br />
        <div>
          <span>Times practiced:</span>
          <span>{questions[currentIndex].times}</span>
        </div>
        <br />
        <div>
          <button
            type="button"
            onClick={() => nextQuestion()}
          >
            Next question
          </button>
          <Link to="/speech">
            <button type="button">Practice now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
