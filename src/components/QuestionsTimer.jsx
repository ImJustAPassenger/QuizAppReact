import { useEffect, useState } from "react";

export default function QuestionsTimer({ timeOut, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeOut);

  useEffect(() => {
    console.log("setting timeout");
    const timer = setTimeout(onTimeout, timeOut);
    return () => {
      clearTimeout(timer);
    };
  }, [timeOut, onTimeout]);
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("setting interval");
      setRemainingTime((prevTime) => prevTime - 100);
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress id="question-time" max={timeOut} value={remainingTime}></progress>
  );
}
