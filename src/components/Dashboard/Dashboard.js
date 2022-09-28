import React, { useEffect, useState } from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const [sports, getSports] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div className="dashboard">
      <div className="sports-list">
        <h1>Sports list</h1>
      </div>
      <div className="activity-log">
        <h1>Activity Log</h1>
      </div>
    </div>
  );
};

export default Dashboard;
