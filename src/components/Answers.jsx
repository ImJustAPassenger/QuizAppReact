import { useRef } from "react"; 
export default function Answers({answers,selectedAnswer,answerState,onSelect}){
     const shuffledAnswers = useRef();

   
  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }
   
    return (
        <ul id="answers">
          {shuffledAnswers.current.map((answer) => {
            const isSelected = selectedAnswer === answer;
            let css = "";
            if (answerState === "answered" && isSelected) {
              css = "selected";
            }

            if (
              answerState === "correct" ||
              (answerState === "wrong" && isSelected)
            ) {
              css = answerState;
            }

            return (
              <li key={answer} className="answer">
                <button
                  onClick={() => onSelect(answer)}
                  className={css}
                >
                  {answer}
                </button>
              </li>
            );
          })}
        </ul>
    )
}