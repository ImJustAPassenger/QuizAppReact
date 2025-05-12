import { useCallback, useState } from "react";
import QUESTIONS from "../questions";
import quizPng from "../assets/quiz-complete.png";
import QuestionsTimer from "./QuestionsTimer";
export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;

  const quizIsCompleted = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevAnswers) => {
      return [...prevAnswers, selectedAnswer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsCompleted) {
    return (
      <div id="summary">
        <img src={quizPng} alt="Thropy icon" />
        <h2>Quiz is completed</h2>
      </div>
    );
  }

  const shuffledQuestion = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledQuestion.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="questions">
        <QuestionsTimer key={activeQuestionIndex} timeOut={10000} onTimeout={handleSkipAnswer} />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledQuestion.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
