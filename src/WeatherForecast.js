import React from "react";
import Weather from "./Weather.js"
import WeatherInfo from "./WeatherInfo.js";

export default function WeatherForecast(props) {
    return (
        <div className="forecast">
            <div className="row">
                <div className="col">
                    <h4 className="forecast-day">Thurs</h4>
                    <img src={props.data.iconUrl} alt={props.data.description} />
                    <h4 className="forecast-temperatures">
                        <span className="temperature-maximum">{Math.round(props.data.temperatureMaximum)}°C</span>
                        <span className="temperature-minimum">{Math.round(props.data.temperatureMinimum)}°C</span>
                    </h4>
                </div>
                <div className="col">
                    <h4 className="forecast-day">Thurs</h4>
                    <img src={props.data.iconUrl} alt={props.data.description} />
                    <h4 className="forecast-temperatures">
                        <span className="temperature-maximum">{Math.round(props.data.temperatureMaximum)}°C</span>
                        <span className="temperature-minimum">{Math.round(props.data.temperatureMinimum)}°C</span>
                    </h4>
                </div>
                <div className="col">
                    <h4 className="forecast-day">Thurs</h4>
                    <img src={props.data.iconUrl} alt={props.data.description} />
                    <h4 className="forecast-temperatures">
                        <span className="temperature-maximum">{Math.round(props.data.temperatureMaximum)}°C</span>
                        <span className="temperature-minimum">{Math.round(props.data.temperatureMinimum)}°C</span>
                        </h4>
                    </div>
                    <div className="col">
                        <h4 className="forecast-day">Thurs</h4>
                        <img src={props.data.iconUrl} alt={props.data.description} />
                        <h4 className="forecast-temperatures">
                            <span className="temperature-maximum">{Math.round(props.data.temperatureMaximum)}°C</span>
                            <span className="temperature-minimum">{Math.round(props.data.temperatureMinimum)}°C</span>
                        </h4>
                    </div>
                    <div className="col">
                        <h4 className="forecast-day">Thurs</h4>
                        <img src={props.data.iconUrl} alt={props.data.description} />
                        <h4 className="forecast-temperatures">
                            <span className="temperature-maximum">{Math.round(props.data.temperatureMaximum)}°C</span>
                            <span className="temperature-minimum">{Math.round(props.data.temperatureMinimum)}°C</span>
                        </h4>
                    </div>
                    <div className="col">
                        <h4 className="forecast-day">Thurs</h4>
                        <img src={props.data.iconUrl} alt={props.data.description} />
                        <h4 className="forecast-temperatures">
                            <span className="temperature-maximum">{Math.round(props.data.temperatureMaximum)}°C</span>
                            <span className="temperature-minimum">{Math.round(props.data.temperatureMinimum)}°C</span>
                        </h4>
                    </div>
                    <div className="col">
                        <h4 className="forecast-day">Thurs</h4>
                    <img src={props.data.iconUrl} alt={props.data.description} />
                    <h4 className="forecast-temperatures">
                        <span className="temperature-maximum">{Math.round(props.data.temperatureMaximum)}°C</span>
                        <span className="temperature-minimum">{Math.round(props.data.temperatureMinimum)}°C</span>
                    </h4>
                </div>
            </div>
            </div>
            )
            }