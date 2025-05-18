import React, { useState } from 'react';
import './style.css';
import { data } from './data';

export default function QuizApp() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [option, setOption] = useState(null);
  const [quizFinished, setQuizFinished] = useState(false);

  const correctAnswers = ['Option1', 'Option3', 'Option4','Option2','Option3','Option1','Option3','Option4','Option2','Option3','Option4','Option2'];

  const handleSelect = (selectedOption) => {
    setOption(selectedOption);
  };

  const handleNext = () => {
    if (correctAnswers[index] === option) {
      setScore(prev => prev + 1);
    }

    if (index < data.length - 1) {
      setIndex(prev => prev + 1);
      setOption(null);
    } else {
      setQuizFinished(true);
    }
  };

  if (quizFinished) {
    return (
      <div>
        <h1>Quiz is finished...!</h1>
        <h1>Your Score is: {score} / {data.length}</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Quiz App</h1>
      <h3>{data[index].Question}</h3>
      <ul>
        <li onClick={() => handleSelect('Option1')} className={option === 'Option1' ? 'selected' : ''}>
          {data[index].Option1}
        </li>
        <li onClick={() => handleSelect('Option2')} className={option === 'Option2' ? 'selected' : ''}>
          {data[index].Option2}
        </li>
        <li onClick={() => handleSelect('Option3')} className={option === 'Option3' ? 'selected' : ''}>
          {data[index].Option3}
        </li>
        <li onClick={() => handleSelect('Option4')} className={option === 'Option4' ? 'selected' : ''}>
          {data[index].Option4}
        </li>
      </ul>
      <button onClick={handleNext} disabled={!option}>Next</button>
      <h5>Question {index + 1} of {data.length}</h5>
    </div>
  );
}
