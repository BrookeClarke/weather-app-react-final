import React, { useEffect, useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false});

    useEffect( () => {
        search();
    }, []);

    function handleResponse(response) {
        console.log(response.data);
        // 
        setWeatherData({
            ready: true,
            city: response.data.city,
            date: new Date(response.data.daily[0].time * 1000),
            temperature: response.data.daily[0].temperature.current,
            description: response.data.daily[0].condition.description,
            humidity: response.data.daily[0].temperature.humidity,
            wind: response.data.daily[0].temperature.wind,
            iconUrl: response.data.daily[0].condition.icon_url,

            // ======================================================
            // Next time make sure to read the response json carefully
            // The problem was: daily it's actually an array
            // So all the properties you want: temperature...
            // Was inside the array, daily[0].temp...
            // I only get the first index data, normally you should
            // Use for loop, to get all the data, and remember
            // I am here anytime you can reach out to me

            // You did great job, I am so proud of you <3
            // ======================================================
            // ready: true,
            // city: response.data.name,
            // date: new Date(response.data.time * 1000),
            // temperature: response.data.main.temperature.current,
            // description: response.data.main.condition.description,
            // humidity: response.data.main.temperature.humidity,
            // wind: response.data.main.temperature.wind.speed,
            // iconUrl: response.data.main.condition.icon_url,
        });
    }

    function search() {
        const apiKey = "0f605ca33b8d413fa995ab3t060267od";
        let city = "London";

        // It was a typo, using }} : `....query=${city}&key=${apiKey}}`
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
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
                <FormattedDate date={weatherData.date} />
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
        // search();
        return "Loading..."
    }

}