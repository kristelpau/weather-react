import logo from './logo.svg';
import './App.css';
import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";


function App() {
  return (
    <div className="App">
      <Weather />
    </div>
  );
}

export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);