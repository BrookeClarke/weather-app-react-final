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
                        <img src={props.data.iconUrl} alt={props.data.description} />
                        <h4>{props.data.temperature}</h4>
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>{props.data.humidity}%</li>
                            <li>{props.data.wind}km/h</li>
                        </ul>
                    </div>
                </div>
            </div>
    );
}