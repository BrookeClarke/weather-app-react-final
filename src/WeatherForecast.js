import React from "react";
import WeatherInfo from "./WeatherInfo.js";
import WeatherForecastData from "./WeatherForecastData.js";

export default function WeatherForecast(props) {
    function maxTemperature() {
        let temperature = Math.round(props.data.temperature.maximum);
        return `${temperature}°C`;
    }

    function minTemperature() {
        let temperature = Math.round(props.data.temperature.minimum);
        return `${temperature}°C`;
    }

    function forecastDay(timestamp) {
        let date = new Date(timestamp * 1000);
        let day = date.getDay();
        let days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

        return days[day];
    };
    

    return (
        <div className="forecast">
            <div className="row">
                <div className="col">
                    <h4 className="forecast-day">{forecastDay()}</h4>
                    <WeatherInfo code={props.data.weather[0].icon} size={36} />
                    <h4 className="forecast-temperatures">
                        <span className="temperature-maximum">{maxTemperature()}</span>
                        <span className="temperature-minimum">{minTemperature()}</span>
                    </h4>
                </div>
            </div>
        </div>
    )
}