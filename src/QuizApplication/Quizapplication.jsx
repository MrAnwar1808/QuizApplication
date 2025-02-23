
import React, { useState } from "react";
import './QuizApp.css'


const questions = [
  {
    question: "Who is the president of the USA?",
    options: ["Barack Obama", "Donald Trump", "Joe Biden", "George W. Bush"],
    answer: "Donald Trump",
  },
  {
    question: "What is the capital of Japan?",
    options: ["Tokyo", "Kyoto", "Osaka", "Nagasaki"],
    answer: "Tokyo",
  },
  {
    question: "What is the largest continent on Earth?",
    options: ["Africa", "North-America", "Antarctica", "Asia"], 
    answer: "Asia",
  },
  {
    question:
      "Identify the wrong number in the series. 0, 1, 1, 2, 3, 5, 8, 13, 20, 34?",
    options: ["8", "20", "13", "34"], 
    answer: "20",
  },
  {
    question: "Complete the following series 6, 12, 36, 144, 720…?",
    options: ["4320", "2843", "8249", "6825"], 
    answer: "4320",
  },
  {
    question: "A box had 17 bulbs. All but five are fused. How many are actually fused?",
    options: ["9", "8", "12", "5"], 
    answer: "12",
  },
];

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerClick = (option) => {
    if (option === questions[currentQuestion].answer) {
      setIsCorrect(true);
      setSelectedAnswer(option);
    } else {
      setIsCorrect(false);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setIsCorrect(null);
    } else {
      setQuizCompleted(true);
    }
  };

  return (

    <div className="container-quiz">
            <h1>Quiz Application</h1>

        <div className="quiz-container">
        <div className="quiz-box">
            {quizCompleted ? (
            <h2 className="quiz-completed">Quiz Completed!</h2>
        ) : (
        <>
            <h2 className="quiz-question">{questions[currentQuestion].question}</h2>

        <div className="quiz-options">
            {questions[currentQuestion].options.map((option, index) => (
            <button
            key={index}
            className={`quiz-option ${selectedAnswer === option ? "selected" : ""}`}
            onClick={() => handleAnswerClick(option)}
            disabled={isCorrect}
            >
            {option}
            </button>
        ))}
      </div>

            {isCorrect !== null && (
            <p className={`quiz-feedback ${isCorrect ? "correct" : "wrong"}`}>
            {isCorrect ? "Correct!" : "Try Again"}
            </p>
            )}

           {isCorrect && (
           <button className="next-button" onClick={handleNextQuestion}>
           Next Question
           </button>
        )}
       </>
  )}
     </div>
     </div>
    </div>


   
  );
};

export default QuizApp;
