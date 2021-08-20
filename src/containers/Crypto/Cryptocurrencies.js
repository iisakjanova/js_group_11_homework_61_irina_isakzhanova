import React, {useEffect, useState} from 'react';
import axios from "axios";

import Crypto from "../../components/Crypto/Crypto";
import './Cryptocurrencies.css';

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
                    cryptoes[crypto.symbol] = {
                        symbol: crypto.symbol, name: crypto.name, price: crypto.price,
                    }
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
        <div className="CoinsWrapper">
            {error ? <div className="Error">{error}</div> : null}
            {cryptoes
                ?
                <div className="Coins">
                    <h3>Top 5 cryptocurrencies prices:</h3>
                    <ul>
                        {Object.values(cryptoes).map(crypto => (
                            <Crypto
                                key={crypto.symbol}
                                info={crypto}
                            />
                        ))}
                    </ul>
                    <p>Powered by <a href="https://coinlib.io/apidocs">Coinlib API</a></p>
                </div>
                :
                null
            }
        </div>
    );
};

export default Cryptocurrencies;