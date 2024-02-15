import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
    const [temperature, setTemperature] = useState(null);
    function handleResponse(response) {
        console.log(response.data);
        setTemperature(response.data.main.temp)
    }
    let city = "London";
    let apiKey = "0f605ca33b8d413fa995ab3t060267od";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
    return (
        <div className="html">
            <h1>Todays Weather</h1>
            <div className="search">
                <form className="searchbutton" id="search-form">
                    <input className="city-search" placeholder="Enter a place..." autocomplete="off" autofocus="on" />
                    <input className="search-submit" type="submit" value="search" />
                    <h2 className="date">Date</h2>
                    <h3>Search for a place</h3>
                </form>
            </div>
            <div className="container"></div>
        </div>
    )
}