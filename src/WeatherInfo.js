import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import "./App.css";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <FormattedDate date={props.data.date} />
            <ul>
                <li>{props.data.city}</li>
                <li className="text-capitalize">{props.data.description}</li>
            </ul>
            <div className="row">
                <div className="grid-5-columns">
                    <img src={props.data.iconUrl} alt={props.data.description} />
                    <div className="temperature">
                        <WeatherTemperature celsius={props.data.temperature} unit={props.unit} setUnit={props.setUnit} />
                    </div>
                </div>
            </div>
        </div>
    );
}