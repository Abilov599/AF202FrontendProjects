import React from "react";
import { useEffect, useState } from "react";
import { getCountries } from "../../service/countries.service";
import MyCard from "../card";
import { Spinner } from "@chakra-ui/react";

const CountriesRow = () => {
  const [countries, setCountries] = useState([]);
  const [isLoaoding, setIsLoaoding] = useState(true);

  const getData = async () => {
    setCountries(await getCountries());
    setIsLoaoding(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {isLoaoding ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      ) : (
        countries
          .filter((country) => country.name !== "Armenia")
          .map((country, i) => {
            return <MyCard key={i} country={country} />;
          })
      )}
    </>
  );
};

export default CountriesRow;
