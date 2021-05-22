import './App.css';
import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div className="App">
      <Weather />
      <small>
      <a href="https://github.com/kristelpau/weather-react">Open-source code</a> by Kristel Pau
    </small>
    </div>
    
  );
}

export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);