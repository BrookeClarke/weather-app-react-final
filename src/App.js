import './App.css';
import React from "react";
import Forecast from './Forecast';


function App() {
  return (
    <div className="App">
      <div className="weather">
        <h1>Weather App</h1>
        <div className="html-container">
          <Forecast />
        </div>
        <footer>This project was coded by Brooke Clarke and is <a href='https://github.com/BrookeClarke/weather-app-react-final'> open-sourced on GitHub.</a></footer>
      </div>
    </div>
  )
}

export default App;