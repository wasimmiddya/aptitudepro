import  { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [time, setTime] = useState(25*60); // Initial time in seconds (10 minutes)
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (time > 0) {
        setTime(prevTime => prevTime - 1);
      } else {
        // autosubmit()
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [time]);

  const formatTime = () => {
    const minutes = Math.floor(time / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');

    return `${minutes}:${seconds}`;
  }

  return (
    <div className="text-center">
      <h3 className="text-3xl font-semibold">Time</h3>
      <h5 className={`text-xl font-semibold ${time < 60 ? 'text-red-600 animate-pulse':''}`}>{formatTime()}</h5>
    </div>
  );
};

export default CountdownTimer;
