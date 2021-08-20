import React, {useEffect, useState} from 'react';
import axios from "axios";

import {ALL_COINS_URL} from "../../constants";

const Cryptocurrencies = () => {
    const [cryptoes, setCryptoes] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        (async () => {
            try {
                const result = await getCryptoes();
                const cryptoesFromAPI = result.splice(0, 5);
                let cryptoes = {};

                cryptoesFromAPI.forEach(crypto => {
                    cryptoes[crypto.symbol] = {symbol: crypto.symbol, name: crypto.name}
                });

                setCryptoes(cryptoes);
                setError('');
            } catch (e) {
                setError(e.toString());
            }
        })();
    }, []);

    const getCryptoes = async () => {
        const response = await axios.get(ALL_COINS_URL);
        return response.data.coins;
    };

    return (
        <div>

        </div>
    );
};

export default Cryptocurrencies;