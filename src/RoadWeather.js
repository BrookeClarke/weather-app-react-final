import React, { useState } from "react";
import axios from "axios";

export default function roadWeather(props) {
    function getRoadTemperature(response) {
        const lon = response.data.coordinates.longitude;
        const lat = response.data.coordinates.latitude;

        let roadApiKey = "cd876a10c23602b6fbd5ba8f87584931";
        let roadApi = `https://api.openweathermap.org/data/2.5/onecall?appid=${roadApiKey}&lon=${lon}&lat=${lat}&units=metric`;
        axios.get(roadApi).then(displayRoadWeather);
    }
    
    function displayRoadWeather(response) {
        let roadTemperature = response.data.road.temp;

        return `${roadTemperature}`
    }
}