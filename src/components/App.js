import React from "react";
import Search from "./search/Search";
import City from "./city/City";

import openWeather from "../api/openWeather";
import InitialDisplay from "./initialDisplay/InitialDisplay";

const KEY = 'ad20762775b6d650eabd8c2f342c4a76';

class App extends React.Component{
    state = {city: null, dailyTemp: null}
    
    onSearchSubmit = async (cityName, countryCode) => {
        const weatherResponse = await openWeather.get('/weather', {
            params: {
                q: `${cityName},${countryCode}`,
                units: 'metric',
                appid: KEY
            }
        });
        this.setState({city: weatherResponse.data});

        const dailyTempResponse = await openWeather.get('/onecall', {
            params: {
                lat: `${this.state.city.coord.lat}`,
                lon: `${this.state.city.coord.lon}`,
                units: 'metric',
                appid: KEY
            }
        });
        this.setState({dailyTemp: dailyTempResponse.data.daily});
    }
    
    render() { 
        return (
            <div className="ui container">
                <Search onSubmit={this.onSearchSubmit}/>
                <InitialDisplay />
                <City city={this.state.city} dailyTemp={this.state.dailyTemp}/>
            </div>
        );   
    }
};

export default App;