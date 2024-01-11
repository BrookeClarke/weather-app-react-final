import React, {useState} from "react";

export default function Calendar(props) {
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let day = [props.getDay()];
    let hours = props.date.getHours();
    if (hours < 10) {
        hours = `0${hours}`
    }
    let minutes = props.date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`
    }
    return <div> {day} {hours}:{minutes}</div>;
}