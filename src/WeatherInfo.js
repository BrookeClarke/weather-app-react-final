import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
                <FormattedDate date={props.data.date} />
                <ul>
                    <li>{props.data.city}</li>
                    <li className="text-capitalize">{props.data.description}</li>
                </ul>
            <div className="row">
                <div className="col-6">
                    <div className="d-flex">
                        <img src={props.data.iconUrl} alt={props.data.description} />
                        <div className="celsius">
                            <WeatherTemperature celsius={props.data.temperature} />
                            <span className="Temperature">{Math.round(props.data.temperature)}</span>
                            <span>°C</span>
                            </div>
                    </div>
                </div>
                <div className="col-6">
                    <ul>
                        <li>{props.data.humidity}%</li>
                        <li>{props.data.wind}m/s</li>
                    </ul>
                </div>
            </div>
        </div>
    );
} 