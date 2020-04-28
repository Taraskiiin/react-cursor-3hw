import React, { useState, useEffect, useRef } from "react";
import "../App.js";
import { Circle } from "rc-progress";
import "./Timer.css";

export default function Timer(props) {
  const id = useRef();
  const [timer, setTimer] = useState({
    time: props.time,
    speed: props.speed,
    startbtn: props.start,
  });
  useEffect(() => {
    if (timer.startbtn && !id.current) {
      id.current = setInterval(() => TimerUpdate(), props.speed);
    } else if (id.current || !timer.startbtn) {
      clearInterval(id.current);
      id.current = null;
    }
    return () => {
      clearInterval(id.current);
      id.current = null;
    };
  }, [timer.time, timer.startbtn] );

  const TimerUpdate = () => {
    if (timer.time > 0) {
      let Newtime = timer.time - 1;
      setTimer({
        ...timer,
        time: Newtime,
      });
      onTick(timer.time);
    } else {
      restartNewTimer();
    }
  };
  const onTick = (time) => {
    return console.log(`BIGBOOOOOOOOOOM on: ${time} sec`);
  };
  const btnPlay = () => {
    setTimer({ ...timer, startbtn: !timer.startbtn });
  };
  const restartNewTimer = () => {
    let lastValue = timer.time;
    if (lastValue === 0) {
      outTime();
    }
  };
  const outTime = () => {
    if (timer.time === 0) {
      alert(`Time is out`);
      setTimer({
        ...timer,
        time: props.time,
        startbtn: props.startbtn,
      });
    }
  };
  return (
    <div className="Timer">
      <div className="Circle__process">
        <Circle
          percent={timer.time * 10}
          strokeWidth="2"
          strokeColor="#03e9f4"
        />
        <button className="startbtn" onClick={() => btnPlay()}>
          PLAY/PAUSE
        </button>
      </div>
    </div>
  );
}
