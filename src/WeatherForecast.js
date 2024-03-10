import React from "react";
import WeatherInfo from "./WeatherInfo.js";

export default function WeatherForecast(props) {
    return (
        <div className="forecast">
            <WeatherInfo />
            <div className="row">
                <div className="col">
                    <h4 className="forecast-day">Thurs</h4>
                    <WeatherInfo code={props.data.iconUrl} alt={props.data.description} />
                    <h4 className="forecast-temperatures">
                        <span className="temperature-maximum">{Math.round(props.data.temperatureMaximum)}°C</span>
                        <span className="temperature-minimum">{Math.round(props.data.temperatureMinimum)}°C</span>
                    </h4>
                </div>
            </div>
        </div>
    )
}