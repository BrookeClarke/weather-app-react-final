import React, {useState} from "react";

export default function FormattedDate() {
    const [date, setDate] = useState(new Date());

    setInterval(function () {
        setDate(new Date());
    }, 1000);

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDay()];
    let hours = date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }

    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    let seconds = date.getSeconds();
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let month = months[date.getMonth()];
    let year = date.getFullYear();


    return (
        <div>
            {day} {month} {hours}:{minutes} {year}
        </div >
    )
}