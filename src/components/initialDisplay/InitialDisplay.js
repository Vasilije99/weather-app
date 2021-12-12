import React, { useState, useEffect } from "react";
import openWeather from "../../api/openWeather";
import './initialDisplay.css';

const KEY = 'ad20762775b6d650eabd8c2f342c4a76';

const cities = ['Barcelona', 'Istanbul', 'London'];

const InitialDisplay = () => {
    const [item, setItem] = useState([]);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const request = async () => {
            const response = await openWeather.get('/forecast', {
                params: {
                    q: `${cities[counter]}`,
                    units: 'metric',
                    appid: KEY
                }
            });

            setItem([...item, response.data]);
            if (counter < 2) {
                setCounter(counter + 1);
            }
        };

        request();
    }, [counter]);

    if (!item) {
        return null;
    }

    const average = (param) => {
        const array = [];
        for (const i in param) {
            array.push(param[i].main.temp)
        }

        return (array.reduce((a, b) => a + b, 0) / array.length).toFixed(2);
    }

    const renderedList = item.map((i) => {
        return (
            <div className='item' key={i.city.id}>
                <div className="header">
                    <h3>{i.city.name}, {i.city.country}</h3>
                    <i className="fas fa-cloud-sun-rain"></i>
                </div>
                <span>Average temp in next 5 days: <b>{average(i.list)}°C</b></span>
            </div>
        )
    })

    return (
        <div>
            <div className='cities'>
                {renderedList}
            </div>
        </div>
    )
}

export default InitialDisplay;