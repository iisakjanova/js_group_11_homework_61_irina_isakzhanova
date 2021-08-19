import React from 'react';
import './CountryInfo.css';

const CountryInfo = ({info}) => {
    console.log(info)
    if (!info) {
        return null;
    }

    return (
        <div className="CountryInfo">
            <div className="Info">
                <h3>{info.name}</h3>
                <p><b>Capital: </b>{info.capital}</p>
                <p><b>Population: </b>{info.population}</p>
            </div>
            <div className="Flag" style={{backgroundImage: `url(${info.flag})`}} />
        </div>
    );
};

export default CountryInfo;