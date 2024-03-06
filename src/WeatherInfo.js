import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
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
        </div>
    );
}