import React, {useState} from "react";

export default function FormattedDate(props) {
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let day = days[props.date.getDay()];
    let hours = props.date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    let minutes = props.date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let month = months[props.date.getMonth()];
    let year = props.date.getFullYear();
 
  
    return (
    <div>
        {day} {month} {hours}:{minutes} {year}
    </div >
    )
}