import quizPng from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";
import Answers from "./Answers";
export default function Summary({ userAnswers }) {
    const skippedAnswers = userAnswers.filter(answer=>answer===null)
    const rightAnswers = userAnswers.filter((answer,index)=>answer===QUESTIONS[index].answers[0])
    const skippedAnswersShare =Math.round(skippedAnswers.length/userAnswers.length)*100

    const rightAnswersShare =Math.round(rightAnswers.length/userAnswers.length)*100

    const wrongAnswersShare = 100-skippedAnswersShare-rightAnswersShare
  return (
    <div id="summary">
      <img src={quizPng} alt="Thropy icon" />
      <h2>Quiz is completed</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswersShare}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{rightAnswersShare}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{wrongAnswersShare}%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer,index) => {
            let css = 'user-answer'
            if(answer===null)
            {
                css+=' skipped'
            }
            else if(answer===QUESTIONS[index].answers[0])
            {
                css += ' correct'
            }
            else {
                css += ' wrong'
            }
          return (
            <li key={answer}>
              <h3>{index+1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={answer}>{answer??'skipped'}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
