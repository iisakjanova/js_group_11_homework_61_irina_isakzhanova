import React from 'react';
import './CountryInfo.css';

const CountryInfo = ({info, borders}) => {
    return (
        <div className="CountryInfo">
            {info
                ?
                <div className="CountryInfoInner">
                    <div className="Info">
                        <h3>{info.name}</h3>
                        <p><b>Capital: </b>{info.capital}</p>
                        <p><b>Population: </b>{info.population}</p>
                        <p><b>Region: </b>{info.region}</p>
                        <p><b>Area: </b>{info.area}</p>
                        {borders.length > 0 &&
                            <div className="BordersInfo">
                                <p><b>Borders with: </b></p>
                                <ul>
                                    {borders.map(border => (
                                        <li key={border.alpha3Code}>{border.name}</li>
                                    ))}
                                </ul>
                            </div>
                        }
                    </div>
                    <div className="Flag" style={{backgroundImage: `url(${info.flag})`}} />
                </div>
                :
                <p className="Instruction">Choose a country to get info.</p>}
        </div>
    );
};

export default CountryInfo;