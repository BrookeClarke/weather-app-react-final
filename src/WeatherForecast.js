import React from "react";
import WeatherForecastData from "./WeatherForecastData";


export default function WeatherForecast(props) {
  function maxTemperature() {
    let temperatureMax = Math.round(props.data[0].temperature.maximum);
    return `${temperatureMax}°C`;
  }

  function minTemperature() {
    let temperatureMin = Math.round(props.data[0].temperature.minimum);
    return `${temperatureMin}°C`;
  }

  function forecastDay() {
    let date = new Date(props.data[0].time * 1000);
    let day = date.getDay();
    let days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

    return days[day];
  }

    return (
        <div className="forecast">
            <div className="row">
            <div className="col">
                    <div className="forecast-day">{forecastDay()}</div>
                    <img src={props.data[0].condition.icon_url} alt={props.data[0].condition.description} />
                    <h4 className="forecast-temperatures">
                        <span className="temperature-maximum">{maxTemperature()}</span>
                            <span className="temperature-minimum">{minTemperature()}</span>
                            </h4>
                        </div>
                </div>
        </div>
    );
}
