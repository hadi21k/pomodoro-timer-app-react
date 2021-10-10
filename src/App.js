import { useRef, useState } from "react";
import "./App.css";
import PomodoroContent from "./Components/PomodoroContent";
const padTime = (time) => {
  return time.toString().padStart(2, "0");
};

const App = () => {
  const [title, setTitle] = useState("Let the countdown Start !!!");
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  let interval = useRef(null);
  const onStart = () => {
    setTitle("You're going great!");
    interval.current = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (timeLeft >= 1) return prevTime - 1;
        onReset();
        return 0;
      });
    }, 1000);
    setIsRunning(true);
    if (interval.current !== null) return;
  };
  const onStop = () => {
    setIsRunning(false);
    setTitle("Keep going");
    clearInterval(interval.current);
    if (interval.current === null) return;
  };
  const onReset = () => {
    setTitle("Ready to go another round?");
    setTimeLeft(25 * 60);
    clearInterval(interval.current);
  };

  const minutes = padTime(Math.floor(timeLeft / 60));
  const seconds = padTime(timeLeft - minutes * 60);

  return (
    <div className="flex items-center justify-center h-screen overflow-x-hidden bg-green-300">
      <div className="flex flex-col items-center justify-center px-2 space-y-10 bg-white rounded-lg shadow-2xl pomodoro-container">
        <PomodoroContent
          title={title}
          minutes={minutes}
          seconds={seconds}
          isRunning={isRunning}
          onStart={onStart}
          onStop={onStop}
          onReset={onReset}
        />
      </div>
    </div>
  );
};

export default App;
