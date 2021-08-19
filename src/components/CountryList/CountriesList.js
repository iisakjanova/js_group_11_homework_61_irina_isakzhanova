import React from 'react';
import CountriesListItem from "../ContriesListItem/CountriesListItem";
import './CountriesList.css';

const CountriesList = ({countries, onClick, selectedCountry}) => {
    return (
        <ul className="CountriesList">
            {Object.values(countries).map(country => {
                return (
                    <CountriesListItem
                        key={country.alpha3Code}
                        country={country}
                        onClick={onClick}
                        selectedCountry={selectedCountry}
                    />
                );
            })}
        </ul>
    );
};

export default CountriesList;