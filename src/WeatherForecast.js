import React from "react";
import "./App.css";

export default function WeatherForecast(props) {
  function maxTemperature() {
    let temperatureMax = Math.round(props.data.temperature.maximum);
    
    if(props.unit === "fahrenheit") {
      temperatureMax = (temperatureMax * 9) / 5 + 32;
      return `${temperatureMax}°F`
    }
    return `${temperatureMax}°C`;
  }

  function minTemperature() {
    let temperatureMin = Math.round(props.data.temperature.minimum);

    if(props.unit === "fahrenheit") {
      temperatureMin = (temperatureMin * 9) / 5 + 32;
      return `${temperatureMin}°F`
    }
    return `${temperatureMin}°C`;
  }

  function forecastDay() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

    return days[day];
  }

  return (
    <div className="forecast">
      <div className="row">
        <div className="col">
          <h4 className="forecast-day">{forecastDay()}</h4>
          <img
            src={props.data.condition.icon_url}
            alt={props.data.condition.description}
          />
          <h4 className="forecast-temperatures">
            <span className="temperature-maximum">{maxTemperature()}</span>
            <span className="temperature-minimum">{minTemperature()}</span>
          </h4>
        </div>
      </div>
    </div>
  );
}