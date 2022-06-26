import { useEffect } from "react";
import { useState } from "react";
import { clearInterval } from "timers";
export const Timer = () => {
  const [min, setMin] = useState(3);
  const [sec, setSec] = useState(0);
  const time = useRef(180);
  const timerId = useRef(null);

  useEffect(() => {
    timerId.current = setInterval(() => {
      setMin(parseInt(time.current / 60));
      setSec(time.current % 60);
      time.current -= 1;
    }, 1000);
    return () => clearInterval(timerId.current);
  }, []);

  useEffect(() => {
    if (time.current <= 0) {
      console.log("time out");
      clearInterval(timerId.current);
    }
  }, [sec]);
  return (
    <div className="timer">
      {min}분 {sec}초
    </div>
  );
};
