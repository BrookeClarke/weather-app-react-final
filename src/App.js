import './App.css';
import React from "react";
import Calendar from './Calendar';
import Forecast from './Forecast';


function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Calendar />
        <Forecast />
        <footer>This project was coded by Brooke Clarke and is <a href='https://github.com/BrookeClarke/weather-app-react-final'> open-sourced on GitHub.</a></footer>
      </div>
    </div>
  )
}

export default App;