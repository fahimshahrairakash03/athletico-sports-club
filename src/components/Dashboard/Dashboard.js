import React, { useEffect, useState } from "react";
import Activity from "../Activity/Activity";
import Sport from "../Sport/Sport";
import "./Dashboard.css";

const Dashboard = () => {
  const [sports, setSports] = useState([]);
  const [times, settimes] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setSports(data));
  }, []);

  const addtime = (product) => {
    const newtimes = [...times, product];
    settimes(newtimes);
    // console.log(product);
  };

  return (
    <div className="dashboard">
      <div className="sports-list">
        <h1>Athletico-Sports-Club</h1>
        <br />
        <h3>Select Today's Sport</h3>
        <div className="sports-name">
          {sports.map((sport) => (
            <Sport key={sport.id} sport={sport} addtime={addtime}></Sport>
          ))}
        </div>
      </div>
      <div className="activity-log">
        <Activity times={times}></Activity>
      </div>
    </div>
  );
};

export default Dashboard;
