import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCountryByName } from "../../service/countries.service";
import "./index.scss";

const Country = () => {
  const [country, setCountry] = useState({});
  const { name } = useParams();
  const navigate = useNavigate();

  const getData = async () => {
    setCountry(await getCountryByName(name));
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(country);

  return (
    <div id="country-detail">
      <div id="go-back">
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          <i className="fa-solid fa-arrow-left-long"></i>Back
        </button>
      </div>
      <div id="country">
        <div id="flag">
          <img
            src={`${country[0]?.flags?.png}`}
            alt={`${country[0]?.name?.common}`}
          />
        </div>
        <div id="country-info">
          <h1>{`${country[0]?.name?.common}`}</h1>
          <div id="country-info-main">
            <div id="country-info-left">
              <ul>
                <li>
                  Native Name:{" "}
                  <a>{`${country[0]?.name?.nativeName?.sqi?.common}`}</a>
                </li>
                <li>
                  Population: <a>{`${country[0]?.population}`}</a>
                </li>
                <li>
                  Region: <a>{`${country[0]?.region}`}</a>
                </li>
                <li>
                  Sub-Region: <a>{`${country[0]?.subregion}`}</a>
                </li>
                <li>
                  Capital: <a>{`${country[0]?.capital}`}</a>
                </li>
              </ul>
            </div>
            <div id="country-info-right">
              <ul>
                <li>
                  Top Level Domain: <a>{`${country[0]?.tld}`}</a>
                </li>
                <li>
                  Currencies: <a>{`${country[0]?.currencies?.ALL?.name}`}</a>
                </li>
                <li>
                  Languages: <a>{`${country[0]?.languages?.sqi}`}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
