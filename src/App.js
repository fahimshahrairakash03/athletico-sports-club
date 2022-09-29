import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Questions from "./components/Questions/Questions";

function App() {
  return (
    <div className="App">
      <Dashboard></Dashboard>
      <Questions></Questions>
    </div>
  );
}

export default App;
