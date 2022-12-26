import React from "react";
import "./index.scss";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const SearchFilter = () => {
  return (
    <div id="search-filter">
      <span id="search">
        <i id="glass" className="fa-solid fa-magnifying-glass"></i>
        <input placeholder="Search for a country…" />
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
  );
};

export default SearchFilter;
