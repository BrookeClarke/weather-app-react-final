import React from "react";

export default function formattedDate(props) {
    // console.log(props.date.getDay())
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let day = days[props.date.getDay()];
    let hour = props.date.getHours();
    let minutes = props.date.getMinutes();
    let month = props.date.getMonth();

    // Make sure to use getFullYear() not just 24
    let year = props.date.getFullYear();
    if (hour < 10) {
        hour = `0${hour}`
    }
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    return (
        <div>
            {day} {hour}:{minutes} {month} {year}

            {/* This is JSX not template literal, you can just do */}
            {/* ${day} ${hour}:${minutes} ${month} ${year} */}
        </div>
    );
}
