import React from "react";

export default function FormattedDate(props) {
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let day = days[props.date.getDay()];
    let hours = props.date.getHours();
    let minutes = props.date.getMinutes();
    let month = props.date.getMonth();
    let year = props.date.getYear();
    if (hour < 10) {
    if (hours < 10) {
        hours = `0${hours}`
    }
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    return (
        <div>
            ${day} ${hours}:${minutes} ${month} ${year}
        </div>
    );
}