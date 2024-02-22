import React from "react";
import "./App.css";


export default function Forecast() {
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
                    <li>London</li>
                    <li>Mostly Cloudy</li>
                </ul>
                <div className="row">
                    <div className="col-6">
                        <img src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png" alt="Mostly Cloudy Weather Icon" />
                        <h4>6°C</h4>
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>Precipitation: 15%</li>
                            <li>Humidity: 72%</li>
                            <li>Wind: 13km/h</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}