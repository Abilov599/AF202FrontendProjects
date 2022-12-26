import React from "react";
import CountriesRow from "../../components/countries-row";
import SearchFilter from "../../components/search-filter";
import "./index.scss";

const AllCountries = () => {
  return (
    <>
      <SearchFilter />
      <div id="CountriesRow">
        <CountriesRow />
      </div>
    </>
  );
};

export default AllCountries;
