import React, {useState} from "react";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState('celsius')
    
    function convertToFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function convertToCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    if (unit === 'celsius') {
        return (
            <div className="WeatherTemperature">
                <span className="celsius">{Math.round(props.celsius)}</span>
                <span>°C</span> | <span> <a href="/" onClick={convertToFahrenheit}>°F</a></span>
            </div>
        )
    } else {
        let fahrenheit = (props.celsius * 9) / 5 + 32;
        return (
            <div className="WeatherTemperature">
                <span className="fahrenheit">{Math.round(fahrenheit)}</span>
                <span>°F</span> | <span><a href="/" onClick={convertToCelsius}>°C</a></span>
            </div>
        )
    }
}