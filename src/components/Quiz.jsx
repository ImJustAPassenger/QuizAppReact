import { useCallback, useState } from "react";
import QUESTIONS from "../questions";
import quizPng from "../assets/quiz-complete.png";
import QuestionsTimer from "./QuestionsTimer";
import Answers from "./Answers";
import Question from "./Question";
export default function Quiz() {
  const [answerState, setAnswerState] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;

  const quizIsCompleted = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      setAnswerState("answered");
      setUserAnswers((prevAnswers) => {
        return [...prevAnswers, selectedAnswer];
      });
      setTimeout(() => {
        if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
          setAnswerState("correct");
        } else setAnswerState("wrong");
      }, 1000);
      setTimeout(() => {
        setAnswerState("");
      }, 2000);
    },
    [activeQuestionIndex]
  );

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

  return (
    <div id="quiz">
      <Question 
      key={activeQuestionIndex}
      questionText={QUESTIONS[activeQuestionIndex].text}
      answers={QUESTIONS[activeQuestionIndex].answers}
      onSelectAnswers={handleSelectAnswer}
      answerState={answerState}
      selectedAnswer={userAnswers[userAnswers.length-1]}
      onSkipAnswers={handleSkipAnswer}
      /> 
    </div>
  );
}
