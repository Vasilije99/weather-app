import React from "react";
import DailyWeather from "../dailyWeather/DailyWeather";
import './city.css';

const City = ({ city, dailyTemp }) => {
    if (!city) {
        return null;
    }

    return (
        <div className='city'>
            <div className='weather'>
                <h2>{city.name}</h2>
                <div>
                    <h2>{city.main.temp} °C</h2>
                </div>
                <span>
                    Feels like {city.main.feels_like} °C.
                    {city.weather[0].main} - {city.weather[0].description}.
                </span>
                <ul>
                    <li><i className="fas fa-wind"></i> {city.wind.speed}m/s</li>
                    <li><b>Pressure</b>: {city.main.pressure}hPa</li>
                    <li><b>Humidity</b>: {city.main.humidity}%</li>
                    <li><b>Visibility</b>: {city.visibility / 1000}km</li>
                    <li><i className="fas fa-temperature-low"></i> {city.main.temp_min} °C</li>
                    <li><i className="fas fa-temperature-high"></i> {city.main.temp_max} °C</li>
                </ul>
            </div>
            <DailyWeather dailyTemp={dailyTemp}/>
        </div>
    );
}

export default City;