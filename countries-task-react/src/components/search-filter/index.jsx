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
    setIsLoaoding(true);
    setCountries(await getCountries());
    setIsLoaoding(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSearch = (e) => {
    setIsLoaoding(true);
    axios("https://restcountries.com/v2/all").then((res) => {
      let searchedCountries = res.data.filter((countrie) =>
        countrie.name.includes(e.target.value)
      );
      setCountries(searchedCountries);
      setIsLoaoding(false);
    });
  };

  const handleFilter = (e) => {
    setIsLoaoding(true);
    axios("https://restcountries.com/v2/all").then((res) => {
      const filterByRegion = res.data.filter((countrie) =>
        countrie.region.includes(e.target.innerText)
      );
      setCountries(filterByRegion);
      setIsLoaoding(false);
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
              <MenuItem closeOnSelect={false} onClick={getData}>
                All Regions
              </MenuItem>
              <MenuItem closeOnSelect={false} onClick={(e) => handleFilter(e)}>
                Africa
              </MenuItem>
              <MenuItem closeOnSelect={false} onClick={(e) => handleFilter(e)}>
                America
              </MenuItem>
              <MenuItem closeOnSelect={false} onClick={(e) => handleFilter(e)}>
                Asia
              </MenuItem>
              <MenuItem closeOnSelect={false} onClick={(e) => handleFilter(e)}>
                Europe
              </MenuItem>
              <MenuItem closeOnSelect={false} onClick={(e) => handleFilter(e)}>
                Oceania
              </MenuItem>
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
