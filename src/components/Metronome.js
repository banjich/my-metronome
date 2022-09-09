import React, { useState, useEffect } from 'react';
import sound from '../assets/metronome-click.wav';
import useInterval from 'use-interval';

const Metronome = () => {
  const [bpm, setBpm] = useState(100);
  const [intervalSpeed, setIntervalSpeed] = useState(null);
  const click = new Audio(sound);
  const playSound = () => {
    click.play();
  };
  const onPlay = () => {
    setIntervalSpeed(() => (60 / bpm) * 1000);
  };
  const onStop = () => {
    setIntervalSpeed(null);
  };

  useInterval(() => {
    playSound();
  }, intervalSpeed);

  const onChange = (e) => {
    setBpm(e.target.value);
    setIntervalSpeed(null);
    setIntervalSpeed(() => (60 / bpm) * 1000);
  };

  return (
    <div className='metronome'>
      <div className='bpm'>Bpm: {bpm}</div>
      <input
        className='slider'
        onChange={onChange}
        type='range'
        min='40'
        max='240'
        value={bpm}
      />
      <div className='buttons'>
        <button onClick={() => onPlay()}>Play</button>
        <button onClick={() => onStop()}>Stop</button>
      </div>
    </div>
  );
};

export default Metronome;
