import axios from "axios";
import React, {useEffect, useState} from 'react';

import CountriesList from "../../components/CountryList/CountriesList";
import CountryInfo from "../../components/CountryInfo/CountryInfo";
import './Countries.css';

import {All_COUNTRIES_URL} from "../../constants";
import {ONE_COUNTRY_URL} from "../../constants";

const Countries = () => {
    const [countries, setCountries] = useState('');
    const [error, setError] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedCountryInfo, setSelectedCountryInfo] = useState('');
    const [selectedCountryBorders, setSelectedCountryBorders] = useState('');

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
                setError(e.toString());
            }
        })();
    }, []);

    useEffect(() => {
        selectedCountry && (async () => {
            try {
                const result = await getCountryInfo(selectedCountry);

                setSelectedCountryInfo(result);
                setError('');
            } catch (e) {
                setError(e.toString());
            }
        })();
    }, [selectedCountry]);

    useEffect(() => {
        selectedCountryInfo && (async () => {
            try {
                const responses = await Promise.all(
                    selectedCountryInfo.borders.map(border => getCountryInfo(border))
                );

                const borders = responses.map(response => (
                    {
                        name: response.name,
                        alpha3Code: response.alpha3Code
                    }
                ));

                setSelectedCountryBorders(borders);
                setError('');
            } catch (e) {
                setError(e.toString());
            }
        })();
    }, [selectedCountryInfo]);

    const getCountries = async () => {
        const response = await axios.get(All_COUNTRIES_URL);
        return response.data;
    };

    const handleCountryClick = (id) => {
        setSelectedCountry(id);
    };

    const getCountryInfo = async (id) => {
        const response = await axios.get(ONE_COUNTRY_URL + id );
        return response.data;
    };

    return (
        <>
            {error ? <div className="Error">{error}</div> : null}
            {countries
                ?
                <div className="Countries">
                    <CountriesList
                        countries={countries}
                        onClick={handleCountryClick}
                        selectedCountry={selectedCountry}
                    />
                    <CountryInfo
                        info={selectedCountryInfo}
                        borders={selectedCountryBorders}
                    />
                </div>
                :
                null
            }
        </>
    );
};

export default Countries;