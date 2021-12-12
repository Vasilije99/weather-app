import React, { useState } from "react";
import './search.css';

const Search = ({ onSubmit }) => {
    const [cityName, setCityName] = useState('');
    const [countryCode, setCountryCode] = useState('');

    const onFormSubmit = event => {
        event.preventDefault();

        onSubmit(cityName, countryCode);
    };

    return (
        <div className='search'>
            <div className="ui form container" >
                <div className="two fields">
                    <div className="field">
                        <label className='label'>City name</label>
                        <input
                            type="text"
                            placeholder="Enter the name of city"
                            value={cityName}
                            onChange={(e) => setCityName(e.target.value)}
                        />
                    </div>
                    <div className='field'>
                        <label className='label'>Country code</label>
                        <input
                            type="text"
                            placeholder="Enter the country code"
                            value={countryCode}
                            onChange={(e) => setCountryCode(e.target.value)}
                        />
                    </div>
                    <button onClick={onFormSubmit}>Search</button>
                </div>
            </div>
        </div>
    );

};

export default Search;