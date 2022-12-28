import axios from "axios";

const BASE_URL = "https://restcountries.com/v2/all";

export const getCountries = async () => {
  try {
    const response = await axios(BASE_URL);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const BASE_URL_2 = "https://restcountries.com/v3.1/name/";

export const getCitiesByName = async (name) => {
  try {
    const response = await axios(`${BASE_URL_2}${name}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUser = async () => {
  try {
    const response = await axios("http://localhost:3000/user");
    return response.data;
  } catch (error) {
    throw error;
  }
};
