import React, { useState } from 'react';
import FlashcardList from './FlashcardList';
import './app.css';

const Simple_flashCards = [
  {
    id: 1,
    question: "what is 2+2?",
    anwser: "4",
    options : [
      '2',
      '3',
      '4',
      '5'
    ]
  },
  {
    id: 2,
    question: "Question 2?",
    anwser: "answer1",
    options : [
      'answer1',
      'answer2',
      'answer3',
      'answer4'
    ]
  },
]
function App() {
  // eslint-disable-next-line no-unused-vars
  const [flashCards, setFlashCards] = useState(Simple_flashCards)
  return (
    <FlashcardList flashcard={flashCards}/>
  );
}
console.log('sss',Simple_flashCards);


export default App;
