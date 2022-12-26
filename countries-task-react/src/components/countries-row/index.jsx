import React from "react";
import { useEffect, useState } from "react";
import { getCountries } from "../../service/countries.service";
import MyCard from "../card";

const CountriesRow = () => {
  const [countries, setCountries] = useState([]);

  const getData = async () => {
    setCountries(await getCountries());
  };

  useEffect(() => {
    getData();
  }, []);

  return countries.map((countrie, i) => {
    return <MyCard key={i} countrie={countrie} />;
  });
};

export default CountriesRow;
