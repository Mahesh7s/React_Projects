import React, { useState, useEffect } from 'react';

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [target, setTarget] = useState();

  // Play a sound using Audio API or just log
  const playSound = () => {
    const audio = new Audio("https://www.soundjay.com/button/beep-07.mp3");
    audio.play();
    console.log("Target reached! 🎯");
  };

  // Start/stop interval
  useEffect(() => {
    let interval = null;

    if (running) {
      interval = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [running]);

  // Check if target reached
  useEffect(() => {
    if (seconds === target) {
      playSound();
      setRunning(false); // Stop timer when target reached
    }
  }, [seconds, target]);

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial' }}>
      <h1>⏱️ Stopwatch</h1>
      <h2>Time: {seconds}s</h2>

      <input
        type="number"
        value={target}
        onChange={e => setTarget(Number(e.target.value))}
        placeholder="Set target time"
        style={{ padding: '5px', marginBottom: '10px' }}
      />
      <br />
      <button onClick={() => setRunning(true)} disabled={running}>
        Start
      </button>
      <button onClick={() => setRunning(false)} disabled={!running}>
        Stop
      </button>
      <button onClick={() => { setSeconds(0); setRunning(false); }}>
        Reset
      </button>
    </div>
  );
}

export default Stopwatch;
