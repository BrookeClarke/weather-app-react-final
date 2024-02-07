import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
    let [temperature, setTemperature] = useState(null);
    function showForecast(response) {
        setTemperature(response.data.main.temp);
    }

    let apiKey = "0f605ca33b8d413fa995ab3t060267od";
    let apiUrl = 'https://api.shecodes.io/weather/v1/current?query={props.city}&key=${apiKey}';

    axios.get(apiUrl).then(showForecast);

    if (temperature) {
        return (
            <p>The weather in {props.city} is {Math.round(temperature)}°C</p>
        )
    } else {
        return <p>Loading</p>;
    }
}