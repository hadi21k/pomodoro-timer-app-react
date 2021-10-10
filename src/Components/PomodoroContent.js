import React from "react";
import Button from "./Button";
const PomodoroContent = ({
  title,
  minutes,
  seconds,
  isRunning,
  onStart,
  onStop,
  onReset,
}) => {
  return (
    <>
      <div>
        <h3 className="text-2xl font-bold text-center text-green-500 sm:text-3xl">
          {title}
        </h3>
      </div>
      <div className="font-semibold text-8xl sm:text-9xl timer">
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>
      <div className="flex items-center justify-center space-x-2 buttons">
        {isRunning ? "" : <Button onClick={onStart} text="Start" />}
        {isRunning ? <Button onClick={onStop} text="Stop" /> : ""}
        <Button onClick={onReset} text="Reset" />
      </div>
    </>
  );
};

export default PomodoroContent;
