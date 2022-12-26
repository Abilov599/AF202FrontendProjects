import axios from "axios"

const BASE_URL = "https://restcountries.com/v3.1/name/"

export const getCountrieByName = async () => {
    try {
        let response = await axios(`${BASE_URL}Azerbaijan`)
        return response.data
    } catch (error) {
        throw error
    }

}