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
      <div className="questions-container">
        <span className="questions-header">current behaviorial questions:</span>
        <div className="question-card">
          <span className="question">{questions[currentIndex].question}</span>
          <div>
            <span>My power words:</span>
            {questions[currentIndex].keys.map((word, i) => <span key={i}>{word}</span>)}
            </div>
            <div>
            <span>Times practiced:</span>
            <span>{questions[currentIndex].times}</span>
            </div>
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
    </div>
  );
};
