import React from "react";
import "./Activity.css";

const Activity = () => {
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
        <button className="break-btn">10s</button>
        <button className="break-btn">20s</button>
        <button className="break-btn">30s</button>
        <button className="break-btn">40s</button>
        <button className="break-btn">50s</button>
      </div>

      <h4 className="sport-time">Sports Details: </h4>
      <h4 className="sport-time">Break Time: </h4>
      <button className="activity">Activity Completed</button>
    </div>
  );
};

export default Activity;
