import React, { useState }  from "react";

export default function Calendar(props) {
    let now = new Date();
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let day = days[now.getDay()];
    let hours = now.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    let minutes = now.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`
    }
    return <div> {day} {hours}:{minutes}</div>;
}