import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios'
import WeatherForecastDay from './WeatherForecastDay'

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false)
  }, [props.coordinates])

  function displayForecast(response) {
    setForecast(response.data.daily)
    setLoaded(true)
  }

  function getForecast() {
    const lon = props.coordinates.longitude;
    const lat = props.coordinates.latitude;
    const apiKey = "0f605ca33b8d413fa995ab3t060267od";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${lat}&lon=${lon}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayForecast);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 8) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay unit={props.unit} setUnit={props.setUnit} data={dailyForecast} />
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    );
  } else {
    getForecast()
  }
}