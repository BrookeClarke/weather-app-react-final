import React from "react";

export default function WeatherTemperature(props) {
    return (
        <div className="celsius">
        <span className="Temperature">{Math.round(props.data.temperature)}</span>
        <span>°C</span>
        </div>
    )
}