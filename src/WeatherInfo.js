import React from "react";
import FormattedDate from "./FormattedDate";

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
                        <span className="celius">
                            <h4 className="Temperature">{Math.round(props.data.temperature)}</h4>
                            °C</span>
                    </div>
                </div>
                <div className="col-6">
                    <ul>
                        <li>{props.data.humidity}%</li>
                        <li>{props.data.wind}m/s</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}