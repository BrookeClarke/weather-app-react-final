import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
    const apiKey = "0f605ca33b8d413fa995ab3t060267od";
    let city = "London";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    const [temperature, setTemperature] = useState(null);

    function handleResponse(response) {
        console.log(response.data);
        setTemperature(response.data.main.temp)
    }

    axios.get(apiUrl).then(handleResponse);


    return (
    )
}