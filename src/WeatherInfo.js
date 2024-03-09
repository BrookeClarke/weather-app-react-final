import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import "./App.css";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
                <FormattedDate date={props.data.date} />
                <ul>
                    <li>{props.data.city}</li>
                    <li className="text-capitalize">{props.data.description}</li>
                </ul>
            <div className="row">
                <div className="col-6">
                    <div className="d-flex">
                        <img src={props.data.iconUrl} alt={props.data.description} />
                        <div className="temperature">
                            <WeatherTemperature celsius={props.data.temperature} />
                            </div>
                    </div>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Humidity: {props.data.humidity}%</li>
                        <li>Wind: {props.data.wind.speed}m/s</li>
                    </ul>
                </div>
            </div>
            <div className="forecast">
                <div className="row">
                    <div className="col">
                        <h4 className="forecast-day">Thurs</h4>
                        <img src={props.data.iconUrl} alt={props.data.description} />
                        <h4 className="forecast-temperatures">
                            <span className="temperature-maximum">19°C</span>
                            <span className="temperature-minimum">10°C</span>
                        </h4>
                    </div>
                    <div className="col">
                        <h4 className="forecast-day">Thurs</h4>
                        <img src={props.data.iconUrl} alt={props.data.description} />
                        <h4 className="forecast-temperatures">
                            <span className="temperature-maximum">19°C</span>
                            <span className="temperature-minimum">10°C</span>
                        </h4>
                    </div>
                    <div className="col">
                        <h4 className="forecast-day">Thurs</h4>
                        <img src={props.data.iconUrl} alt={props.data.description} />
                        <h4 className="forecast-temperatures">
                            <span className="temperature-maximum">19°C</span>
                            <span className="temperature-minimum">10°C</span>
                        </h4>
                    </div>
                    <div className="col">
                        <h4 className="forecast-day">Thurs</h4>
                        <img src={props.data.iconUrl} alt={props.data.description} />
                        <h4 className="forecast-temperatures">
                            <span className="temperature-maximum">19°C</span>
                            <span className="temperature-minimum">10°C</span>
                        </h4>
                    </div>
                    <div className="col">
                        <h4 className="forecast-day">Thurs</h4>
                        <img src={props.data.iconUrl} alt={props.data.description} />
                        <h4 className="forecast-temperatures">
                            <span className="temperature-maximum">19°C</span>
                            <span className="temperature-minimum">10°C</span>
                        </h4>
                    </div>
                    <div className="col">
                        <h4 className="forecast-day">Thurs</h4>
                        <img src={props.data.iconUrl} alt={props.data.description} />
                        <h4 className="forecast-temperatures">
                            <span className="temperature-maximum">19°C</span>
                            <span className="temperature-minimum">10°C</span>
                        </h4>
                    </div>
                    <div className="col">
                        <h4 className="forecast-day">Thurs</h4>
                        <img src={props.data.iconUrl} alt={props.data.description} />
                        <h4 className="forecast-temperatures">
                            <span className="temperature-maximum">19°C</span>
                            <span className="temperature-minimum">10°C</span>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
}