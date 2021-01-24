import React, { useState } from 'react';

export default function Questions({ questions }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextQuestion = () => {
    if (currentIndex === questions.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(prevIndex => prevIndex + 1);
    }
  };

  return (
    <div>
      <span>Current Behaviorial Questions</span>
      <div>
        <span>Question here</span>
        <br />
        <span>My power words: </span>
        <br />
        <span>My power words: </span>
        <br />
        <span>Times practiced: </span>
        <br />
        <button onClick={() => nextQuestion()}>Next question</button>
        <button>Practice now</button>
      </div>
    </div>
  );
};