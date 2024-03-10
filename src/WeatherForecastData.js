import React from "react";
import Weather from "./Weather";
import WeatherForecast from "./WeatherForecast";
import WeatherInfo from "./WeatherInfo";
import WeatherTemperature from "./WeatherTemperature";
import "./App.css";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null)

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }
}

if (loaded) {
    return (
        <div className="html">
            <div className="container">
                <h1>Todays Weather</h1>
                <div className="search">
                    <form onSubmit={handleSubmit} className="searchbutton" id="search-form">
                        <input onChange={handleCityChange} className="city-search" type="search" placeholder="Enter a place..." autoComplete="off" autoFocus="on" />
                        <input className="search-submit" type="submit" value="search" />
                    </form>
                </div>
                <WeatherInfo data={weatherData} />
                <WeatherForecast data={forecast[0]} />
            </div>
        </div>
    );
} else {
    console.log(response)
    search();

    axios.get(apiUrl).then(handleResponse);
}