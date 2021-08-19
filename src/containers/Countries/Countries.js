import axios from "axios";
import React, {useEffect, useState} from 'react';

import {All_COUNTRIES_URL} from "../../constants";
import CountriesList from "../../components/CountryList/CountriesList";

import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState({});
    const [error, setError] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('');

    useEffect(() => {
        (async () => {
            try {
                const result = await getCountries();
                let countries = {};

                result.forEach(country => {
                    countries[country.alpha3Code] = {alpha3Code: country.alpha3Code, name: country.name}
                });

                setCountries(countries);
                setError('');
            } catch (e) {
                setError('Something went wrong' + e.response.status);
            }
        })();
    }, []);

    const getCountries = async () => {
        const response = await axios.get(All_COUNTRIES_URL);
        return response.data;
    };

    const handleCountryClick = (id) => {
        setSelectedCountry(id);
    };

    return (
        <div className="Countries">
            <CountriesList
                countries={countries}
                onClick={handleCountryClick}
                selectedCountry={selectedCountry}
            />

        </div>
    );
};

export default Countries;