import React, { useState, useEffect } from "react";

const Timer = ({ time }) => {
  console.log("타이머쪽", time);

  let min = parseInt((time % 3600) / 60);
  console.log("min", min);

  const [minutes, setMinutes] = useState(min);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(seconds) > 0) {
        setSeconds(parseInt(seconds) - 1);
      }
      if (parseInt(seconds) === 0) {
        if (parseInt(minutes) === 0) {
          clearInterval(countdown);
        } else {
          setMinutes(parseInt(minutes) - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes, seconds]);

  return (
    <p>
      {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </p>
  );
};

export default Timer;
