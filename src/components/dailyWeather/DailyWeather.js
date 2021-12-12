import React, { useState } from "react";
import './dailyWeather.css';

const DailyWeather = ({ dailyTemp }) => {
    const [menu, setMenu] = useState(false);
    const [id, setId] = useState(0);

    if (!dailyTemp) {
        return null;
    }

    const getWeekday = (date, counter) => {
        let temp = date.getDay() + counter;
        if (temp >= 7) {
            temp -= 7;
        }

        let weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][temp];
        return weekday
    }

    let counter = -1;
    
    const renderedList = dailyTemp.map((day) => {
        counter++;
        
        return (
            <div> 
                <li key={dailyTemp.indexOf(day)} >
                    <span> {getWeekday(new Date(), counter)} </span>
                    <span className='temp'>{day.temp.min} / {day.temp.max} °C</span>
                    <span className='description'>{day.weather[0].description}</span>
                    <span className='menu' onClick={() => { setMenu(!menu); setId(dailyTemp.indexOf(day)) }}>
                        <i className="fas fa-sort-down"></i>
                    </span>
                </li>
                {menu && id === dailyTemp.indexOf(day) ? 
                    <div className='menu'>
                        <table>
                            <tr>
                                <td></td>
                                <td>Morning</td>
                                <td>Evening</td>
                                <td>Night</td>
                            </tr>
                            <tr>
                                <td>TEMPERATURE</td>
                                <td>{day.temp.morn} °C</td>
                                <td>{day.temp.eve} °C</td>
                                <td>{day.temp.night} °C</td>
                            </tr>
                            <tr>
                                <td>FEELS LIKE</td>
                                <td>{day.feels_like.morn} °C</td>
                                <td>{day.feels_like.eve} °C</td>
                                <td>{day.feels_like.night} °C</td>
                            </tr>
                        </table>
                    </div> : null
                }
            </div>
        )
    })

    return (
        <div className="dailyTemp">
            <h3>Temperature for the next 7 days</h3>
            <ul>
                {renderedList}
            </ul>
        </div>
    )
}

export default DailyWeather;