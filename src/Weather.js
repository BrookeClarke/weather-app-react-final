import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
    const apiKey = "0f605ca33b8d413fa995ab3t060267od";
    let city = "London";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    console.log(props);

    function handleResponse(response) {

    }

    axios.get(apiUrl).then(handleResponse);
}