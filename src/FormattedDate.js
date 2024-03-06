import React from "react";

export default function formattedDate(props) {
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let day = days[props.date.getDay()];
    let hour = props.date.getHour();
    let minutes = props.date.getMinutes();
    let month = props.date.getMonth();
    let year = props.date.getYear();
    if (hour < 10) {
        hour = `0${hour}`
    }
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    return (
        <div>
            ${day} ${hour}:${minutes} ${month} ${year}
        </div>
    );
}
