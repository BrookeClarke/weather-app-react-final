import React from "react";
import "./App.css";
import Weather from "./Weather";
import FormattedDate from "./FormattedDate"; // Why???


export default function Forecast() {
    return (
        <>
            <Weather />
        </>


        // All these nested tags <div className="html"> 
        // And because of that the styling were repeated
        // So I comment it in case you want ti
        // Again I like the way you write your code very clever
        // <div className="html">
        //     <div className="container">
        //         <h1>Todays Weather</h1>
        //         <div className="search">
        //             <form className="searchbutton" id="search-form">
        //                 <input className="city-search" type="search" placeholder="Enter a place..." autoComplete="off" autoFocus="on" />
        //                 <input className="search-submit" type="submit" value="search" />
        //             </form>
        //         </div>
        //         <Weather />

        //         {/* You did not set the date property */}
        //         {/* But why you even you using it */}
        //         {/* <FormattedDate date={ new Date() } /> */}
        //         <ul>
        //             <li>London</li>
        //             <li>Mostly Cloudy</li>
        //         </ul>
        //         <div className="row">
        //             <div className="col-6">
        //                 <img src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png" alt="Mostly Cloudy Weather Icon" />
        //                 <h4>6°C</h4>
        //             </div>
        //             <div className="col-6">
        //                 <ul>
        //                     <li>Humidity: 72%</li>
        //                     <li>Wind: 13km/h</li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
}