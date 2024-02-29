import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false});

    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            city: response.data.name,
            temperature: response.data.main.temperature.current,
            description: response.data.main.condition.description,
            humidity: response.data.main.temperature.humidity,
            wind: response.data.main.temperature.wind.speed,
            iconUrl: response.data.main.condition.icon_url,
        })
    }

    function search() {
        const apiKey = "0f605ca33b8d413fa995ab3t060267od";
        let city = "London";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    if (weatherData.ready) {
        return (
            <div className="html">
            <div className="container">
                <h1>Todays Weather</h1>
                <div className="search">
                    <form className="searchbutton" id="search-form">
                        <input className="city-search" type="search" placeholder="Enter a place..." autoComplete="off" autoFocus="on" />
                        <input className="search-submit" type="submit" value="search" />
                    </form>
                </div>
                    <h2 className="date">Thursday 22nd February 2024 21:45pm</h2>
                    <ul>
                        <li>{weatherData.city}</li>
                        <li className="text-capitalize">{weatherData.description}</li>
                    </ul>
                <div className="row">
                    <div className="col-6">
                        <img src={weatherData.iconUrl} alt={weatherData.description} />
                            <h4>{weatherData.temperature}</h4>
                    </div>
                    <div className="col-6">
                        <ul>
                                <li>{weatherData.humidity}%</li>
                                <li>{weatherData.wind}km/h</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        )
    } else {
        search();
        return "Loading..."
    }

}