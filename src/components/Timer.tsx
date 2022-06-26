import { useState } from "react";
import { useEffect } from "react";
export const Timer = () => {
  const [seconds, setSeconds] = useState(30);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [seconds]);

  return (
    <div>
      <h1>CountDown!</h1>
      <div>
        <h2>00:{seconds < 10 ? `0${seconds}` : seconds}</h2>
      </div>
    </div>
  );
};
