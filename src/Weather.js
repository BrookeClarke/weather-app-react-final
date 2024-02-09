import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
    function showForecast(response) {
        console.log(response.data);
    }
    console.log(props);
    let apiKey = "0f605ca33b8d413fa995ab3t060267od";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=paris&key=${apiKey}`;

    axios.get(apiUrl).then(showForecast);
}