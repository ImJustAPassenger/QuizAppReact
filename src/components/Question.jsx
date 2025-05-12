import QuestionsTimer from "./QuestionsTimer";
import Answers from "./Answers";
export default function Question({questionText,answers,onSelectAnswers,selectedAnswer,answerState,onSkipAnswers}) {
  return (
    <div id="questions">
      <QuestionsTimer
        timeOut={10000}
        onTimeout={onSkipAnswers}
      />
      <h2>{questionText}</h2>
      <Answers
        answers={answers}
        selectedAnswer={selectedAnswer}
        answerState={answerState}
        onSelect={onSelectAnswers}
      />
    </div>
  );
}
