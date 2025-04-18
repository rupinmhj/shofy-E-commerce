import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {

  const targetDate = new Date('2024-12-31T23:59:59').getTime();

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className=" overflow-hidden flex gap-2 mt-4">
      {/* Days */}
      <div className="text-center px-4 py-1 rounded-md border shadow">
        <h2 className="font-bold text-xl">{timeLeft.days}</h2>
        <p className="text-[12px] text-gray-700">DAY</p>
      </div>

      {/* Hours */}
      <div className="text-center px-4 py-1 rounded-md border shadow">
        <h2 className="font-bold text-xl">{timeLeft.hours}</h2>
        <p className="text-[12px] text-gray-700">HRS</p>
      </div>

      {/* Minutes */}
      <div className="text-center px-4 py-1 rounded-md border shadow">
        <h2 className="font-bold text-xl">{timeLeft.minutes}</h2>
        <p className="text-[12px] text-gray-700">MIN</p>
      </div>

      {/* Seconds */}
      <div className="text-center px-4 py-1 rounded-md border shadow">
        <h2 className="font-bold text-xl">{timeLeft.seconds}</h2>
        <p className="text-[12px] text-gray-700">SEC</p>
      </div>
    </div>
  );
};

export default CountdownTimer;
