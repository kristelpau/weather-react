import './App.css';
import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";
import 'bootstrap/dist/css/bootstrap.css';


export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="Sydney"/>
      <small>
      <a href="https://github.com/kristelpau/weather-react" target="_blank" rel="noopener noreferrer">Open-source code</a> by Kristel Pau
    </small>
    </div>
    
  );
}


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);