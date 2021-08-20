export const BASE_URL = 'https://restcountries.eu/rest/v2/';
export const All_COUNTRIES_URL = BASE_URL + 'all?fields=name;alpha3Code';
export const ONE_COUNTRY_URL = BASE_URL + 'alpha/';

//API access key for https://coinlib.io/
export const KEY_COINS = '49702aff19bd905b';

export const BASE_URL_COINS = 'https://coinlib.io/api/v1/coinlist';
export const ALL_COINS_URL = BASE_URL_COINS + '?key=' + KEY_COINS;