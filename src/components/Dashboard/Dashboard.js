import React, { useEffect, useState } from "react";
import Sport from "../Sport/Sport";
import "./Dashboard.css";

const Dashboard = () => {
  const [sports, setSports] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setSports(data));
  }, []);
  return (
    <div className="dashboard">
      <div className="sports-list">
        <h1>Sports list</h1>
        <div className="sports-name">
          {sports.map((sport) => (
            <Sport sport={sport}></Sport>
          ))}
        </div>
      </div>
      <div className="activity-log">
        <h1>Activity Log</h1>
      </div>
    </div>
  );
};

export default Dashboard;
