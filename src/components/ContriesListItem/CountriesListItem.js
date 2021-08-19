import React from 'react';

const CountriesListItem = ({country, onClick, selectedCountry}) => {
    const itemClassName = ['ListItem'];

    if (country.alpha3Code === selectedCountry) {
        itemClassName.push('Checked');
    }

    return (
        <li className={itemClassName.join(' ')} onClick={() => onClick(country.alpha3Code)}>
            {country.name}
        </li>
    );
};

export default CountriesListItem;