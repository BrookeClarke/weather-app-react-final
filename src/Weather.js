import React, { useState } from "react";
import axios from "axios";
import Calendar from "./Calendar";

export default function getForecast() {
}

let apiKey = "0f605ca33b8d413fa995ab3t060267od";
let apiUrl = 'https://api.shecodes.io/weather/v1/current?query={query}&key=${apiKey}&units=metric';

axios.get(apiUrl).then(getForecast);