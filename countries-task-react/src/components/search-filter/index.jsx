import React, { useEffect, useState } from "react";
import "./index.scss";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import CountriesRow from "../countries-row";
import axios from "axios";
import { getCountries } from "../../service/countries.service";

const SearchFilter = () => {
  const [countries, setCountries] = useState([]);
  const [isLoaoding, setIsLoaoding] = useState(true);

  const getData = async () => {
    setCountries(await getCountries());
    setIsLoaoding(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSearch = (e) => {
    axios("https://restcountries.com/v2/all").then((res) => {
      let searchedCountries = res.data.filter((countrie) =>
        countrie.name.includes(e.target.value)
      );
      setCountries(searchedCountries);
    });
  };

  return (
    <>
      <div style={{ display: "flex" }} id="search-filter">
        <span id="search">
          <i id="glass" className="fa-solid fa-magnifying-glass"></i>
          <input
            placeholder="Search for a country…"
            onChange={(e) => handleSearch(e)}
          />
        </span>
        <span id="Regions">
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Filter by Region
            </MenuButton>
            <MenuList>
              <MenuItem>All Regions</MenuItem>
              <MenuItem>Africa</MenuItem>
              <MenuItem>America</MenuItem>
              <MenuItem>Asia</MenuItem>
              <MenuItem>Europe</MenuItem>
              <MenuItem>Oceania</MenuItem>
            </MenuList>
          </Menu>
        </span>
      </div>
      <div id="CountriesRow">
        <CountriesRow countries={countries} isLoaoding={isLoaoding} />
      </div>
    </>
  );
};

export default SearchFilter;
