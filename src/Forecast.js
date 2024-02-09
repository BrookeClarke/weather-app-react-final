import React from "react";
import "./App.css";


export default function Forecast() {
    return (
        <div className="html">
            <h1>Todays Weather</h1>
            <div className="search">
                <form className="searchbutton" id="search-form">
                    <input className="city-search" placeholder="Enter a place..." autocomplete="off" autofocus="on" />
                    <input className="search-submit" type="submit" value="search" />
                    <h2 className="date">Date</h2>
                    <h3>Search for a place</h3>
                </form>
            </div>
            <div className="container"></div>
        </div>
    )
}