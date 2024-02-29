import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
    const apiKey = "0f605ca33b8d413fa995ab3t060267od";
    let city = "London";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    const [ready, setReady] = useState(false);
    const [weatherData, setWeatherData] = useState({});

    function handleResponse(response) {
        setWeatherData({
            city: response.data.name,
            temperature: response.data.main.temp,
            description: "Mostly Cloudy",
            precipitation: 20,
            humidity: 73,
            wind: 14,
        })
    }

    if (ready) {
        return (
            <div className="html">
            <div className="container">
                <h1>Todays Weather</h1>
                <div className="search">
                    <form className="searchbutton" id="search-form">
                        <input className="city-search" type="search" placeholder="Enter a place..." autocomplete="off" autofocus="on" />
                        <input className="search-submit" type="submit" value="search" />
                    </form>
                </div>
                    <h2 className="date">Thursday 22nd February 2024 21:45pm</h2>
                    <ul>
                        <li>{weatherData.city}</li>
                        <li>{weatherData.description}</li>
                    </ul>
                <div className="row">
                    <div className="col-6">
                        <img src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png" alt="Mostly Cloudy Weather Icon" />
                        <h4>6°C</h4>
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>{weatherData.precipitation}%</li>
                            <li>{weatherData.humidity}%</li>
                                    <li>{weatherData.wind}km/h</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        )
    }
    axios.get(apiUrl).then(handleResponse);
}