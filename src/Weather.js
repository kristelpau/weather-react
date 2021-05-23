import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
setWeatherData({
    ready: true,
    city: response.data.name,
    temperature: response.data.main.temp,
    date: new Date(response.data.dt * 1000),
    description: response.data.weather[0].description,
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: response.data.main.humidity,
    wind: response.data.wind.speed,
});
  }
  
if (weatherData.ready) {
  return (
    <div className="Weather">
      <form className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type your city"
              className="form-control"
              autocomplete="off"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <div className="overview">
        <h1>{weatherData.city}</h1>
        <ul>
          <li>
            <FormattedDate date={weatherData.date} /></li>
          <li classname="text-capitalize">{weatherData.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <ul>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} km/h</li>
          </ul>
        </div>
        <div className="col-6">
          <div className="d-flex weather-temperature">
            <img
              src={weatherData.imgUrl}
              alt={weatherData.description}
              className="float-left"
            />
            <div className="float-left">
              <strong>{Math.round(weatherData.temperature)}</strong>
              <span className="units">
                <a href="/">°C</a> | <a href="/">°F</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} else {
const apiKey = "d0a1eea228acff23d10fc0e8adceec54";
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
 
  return "Loading..";
}  
}