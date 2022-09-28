import React from "react";
import "./Sport.css";

const Sport = (props) => {
  console.log(props);
  const { sport } = props;
  const { name, id, picture, age } = sport;
  return (
    <div className="sport-card">
      <img className="sport-img" src={sport.picture}></img>
      <h3>{name}</h3>
      <h5>For Age: {age}</h5>
      <h5>Time Required : 120s</h5>
      <button>Add to List</button>
    </div>
  );
};

export default Sport;
