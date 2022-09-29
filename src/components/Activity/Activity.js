import React, { useState } from "react";
import "./Activity.css";

const Activity = (props) => {
  const { times } = props;
  let time = 0;
  for (const sport of times) {
    time = time + sport.time;
  }

  const [breakTime, setbreak] = useState(0);

  const addbreaktime = (breaktime) => {
    const breakTime = breaktime;
    console.log(typeof breakTime);
    setbreak(breakTime);
    // if (id === "a10s") {
    //   breakSec = 10;
    //   setbreak(breakSec);
    // }
  };
  return (
    <div>
      <div className="personal">
        <h3>Fahim Shahriar Akash</h3>
        <p>Dhaka, Bangladesh</p>
        <div className="personal-info">
          <div>
            <h2>75kg</h2>
            <p>weight</p>
          </div>
          <div>
            <h2>5.5</h2>
            <p>height</p>
          </div>
          <div>
            <h2>25</h2>
            <p>years</p>
          </div>
        </div>
      </div>
      <h3>Add a Break</h3>
      <div className="break-time">
        <button onClick={() => addbreaktime(10)} className="break-btn">
          10
        </button>
        <button onClick={() => addbreaktime(20)} className="break-btn">
          20s
        </button>
        <button onClick={() => addbreaktime(30)} className="break-btn">
          30s
        </button>
        <button onClick={() => addbreaktime(40)} className="break-btn">
          40s
        </button>
        <button onClick={() => addbreaktime(50)} className="break-btn">
          50s
        </button>
      </div>

      <h4 className="sport-time">Sports Time: {time} </h4>
      <h4 className="sport-time">
        Break Time: {breakTime}s <span id="breaktime"></span>{" "}
      </h4>
      <button className="activity">Activity Completed</button>
    </div>
  );
};

export default Activity;
