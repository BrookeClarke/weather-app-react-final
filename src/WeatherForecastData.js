import React, {useState} from "react";
import WeatherForecast from "./WeatherForecast";
import "./App.css";
import axios from "axios";

export default function WeatherForecastData(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }
    
    if (loaded) {
        return (
            <div className="WeatherForecast">
                <div className="row">
                    <div className="col">
                        <WeatherForecast data={forecast[0]} />
                    </div>
                </div>
            </div>
        );

    } else {
        let longitude = props.coordinates.longitude;
        let latitude = props.coordinates.latitude;
        const apiKey = "0f605ca33b8d413fa995ab3t060267od";
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

        axios.get(apiUrl).then(handleResponse);
        
        return null;
    }
}