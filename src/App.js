import "./App.css";
import { Routes, Route } from "react-router-dom";
import Message from "./components/message";
import Login from "./ui-components/Login";

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
