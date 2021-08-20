import React from 'react';
import './Crypto.css';

const Crypto = ({info}) => {
    return (
        <li className="Coin">
            <b>{info.name}</b>
            <span>{info.price} USD</span>
        </li>
    );
};

export default Crypto;