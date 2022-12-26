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