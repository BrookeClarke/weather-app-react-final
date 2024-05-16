import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./App.css";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [unit, setUnit] = useState('celsius')

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      date: new Date(),
      temperature: response.data.daily[0].temperature.day,
      description: response.data.daily[0].condition.description,
      humidity: response.data.daily[0].temperature.humidity,
      wind: response.data.daily[0].wind,
      iconUrl: response.data.daily[0].condition.icon_url,
      daily: response.data.daily,
    });
  }

  function search() {
    const apiKey = "0f605ca33b8d413fa995ab3t060267od";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="row">
        <div className="col-9">
          <h1>Todays Weather</h1>
          <div className="search">
            <form onSubmit={handleSubmit} className="searchbutton" id="search-form">
              <input className="city-search" onChange={handleCityChange} type="search" placeholder="Enter a place..." autoComplete="off" autoFocus="on" />
              <input className="search-submit" type="submit" value="search" />
            </form>
          </div>
          <WeatherInfo unit={unit} setUnit={setUnit} data={weatherData} />
          <div className="WeatherForecast">
            <div className="row">
              {weatherData.daily.map(function (dailyForecast, index) {
                if (index < 8) {
                  return (
                    <div className="col" key={index}>
                      <WeatherForecast unit={unit} setUnit={setUnit} data={dailyForecast} />
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
        <div className="col-3">
                        <span className="humidity-and-wind">
                            <div className="humidity">Humidity: {weatherData.Humidity}%</div>
                            <div className="wind">Wind: {weatherData.Wind}m/s</div>
                        </span>
                    </div>
      </div>
    );
  } else {
    search();
    return "Loading weather data...";
  }
} 