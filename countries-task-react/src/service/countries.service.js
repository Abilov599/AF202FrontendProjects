import axios from "axios";

const BASE_URL = 'https://restcountries.com/v2/all';

export const getCountries = async () => {
    try {
        const response = await axios(BASE_URL);
        return response.data;
    } catch (error) {
        throw error;
    }
}


const BASE_URL_2 = "https://restcountries.com/v3.1/name/"

export const getCountryByName = async (name) => {
    try {
        let response = await axios(`${BASE_URL_2}${name}`)
        return response.data
    } catch (error) {
        throw error
    }
    
}