import axios from "axios";
import React, {useEffect, useState} from 'react';

import {All_COUNTRIES_URL} from "../../constants";

const Countries = () => {
    const [countries, setCountries] = useState({});
    const [error, setError] = useState('');

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

    return (
        <div>

        </div>
    );
};

export default Countries;