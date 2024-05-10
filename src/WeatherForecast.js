import React, {useState} from "react";

export default function WeatherForecast(props) {
  const [unit, setUnit] = useState('celsius')

  function maxTemperature() {
    let temperatureMax = Math.round(props.data.temperature.maximum);

    if (unit === 'celsius') {
      return `${temperatureMax}°C`;
    } else {
      let temperatureMaxFahrenheit = Math.round(props.celsius * 9) / 5 + 32;
      return '${temperatureMaxFahrenheit}°F';
    }
  }

  function minTemperature() {
    let temperatureMin = Math.round(props.data.temperature.minimum);

      if (unit === 'celsius') {
        return `${temperatureMin}°C`;
      } else {
      let temperatureMinFahrenheit = Math.round(props.celsius * 9) / 5 + 32;
      return '${temperatureMinFahrenheit}°F';
    }
  }

  function forecastDay() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

    return days[day];
  }

  if (unit === 'celsius') {
    return (
      <div className="forecast">
        <div className="row">
          <div className="col">
            <h4 className="forecast-day">{forecastDay()}</h4>
            <img
              src={props.data.condition.icon_url}
              alt={props.data.condition.description}
            />
            <h4 className="forecast-temperatures">
              <span className="temperature-maximum">{maxTemperature()}</span>
              <span className="temperature-minimum">{minTemperature()}</span>
            </h4>
          </div>
        </div>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="forecast">
        <div className="row">
          <div className="col">
            <h4 className="forecast-day">{forecastDay()}</h4>
            <img
              src={props.data.condition.icon_url}
              alt={props.data.condition.description}
            />
            <h4 className="forecast-temperatures">
              <span className="temperature-maximum">{maxTemperature()}</span>
              <span className="temperature-minimum">{minTemperature()}</span>
            </h4>
          </div>
        </div>
      </div>
    )
  }
}