import React from "react";
import "./Sport.css";

const Sport = (props) => {
  console.log(props);
  const { sport } = props;
  const { name, id, picture, age, time } = sport;
  return (
    <div className="sport-card">
      <img className="sport-img" src={sport.picture}></img>
      <div className="sport-detail">
        <h3>{name}</h3>
        <h5>For Age: {age}</h5>
        <h5>Time Required : {time} min</h5>
        <button className="btn-sport">Add to List</button>
      </div>
    </div>
  );
};

export default Sport;
