import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { userValidationSchema } from "../../components/schema";
import {
  getCitiesByName,
  getCountries,
} from "../../service/countries-cities.service";

const SignUpPage = () => {
  const [countries, setCountries] = useState([]);

  const getData = async () => {
    setCountries(await getCountries());
  };

  useEffect(() => {
    getData();
  }, []);

  // const [city, setCity] = useState({});

  // const getCityData = async () => {
  //   setCity(await getCitiesByName(name));
  // };

  // useEffect(() => {
  //   getCityData();
  // }, []);

  // console.log(getCitiesByName(name));

  const { handleSubmit, handleChange, values, errors, touched, resetForm } =
    useFormik({
      initialValues: {
        userName: "",
        // email: "",
        password: "",
        password2: "",
        getCitiesByName: "",
        // country: "",
      },
      validationSchema: userValidationSchema,
      onSubmit: (values) => {
        let userObj = {
          userName: values.userName,
          // email: values.email,
          password: values.password,
          password2: values.password2,
          // city: values.city,
          country: values.country,
        };
        // addNewUser(userObj);
        console.log(userObj);
        resetForm();
      },
    });
  return (
    <div>
      <form id="sign-up-form" onSubmit={handleSubmit}>
        <label htmlFor="userName" className="">
          User Name
        </label>
        <br />
        <input
          id="userName"
          name="userName"
          type="text"
          onChange={handleChange}
          value={values.userName}
        />
        <br />
        {errors.userName && touched.userName && (
          <span style={{ color: "red", fontSize: "16px" }}>
            {errors.userName}
          </span>
        )}
        {/* <label htmlFor="Email" className="">
          Email
        </label>
        <br />
        <input
          id="Email"
          name="Email"
          type="email"
          onChange={handleChange}
          value={values.email}
        />
        <br />
        {errors.email && touched.email && (
          <span style={{ color: "red", fontSize: "16px" }}>{errors.email}</span>
        )} */}
        <br />
        <label htmlFor="password" className="">
          Password
        </label>
        <br />
        <input
          id="password"
          name="password"
          type="text"
          onChange={handleChange}
          value={values.password}
        />
        <br />
        {errors.password && touched.password && (
          <span style={{ color: "red", fontSize: "16px" }}>
            {errors.password}
          </span>
        )}
        <br />
        <label htmlFor="password2" className="">
          Confrim Password
        </label>
        <br />
        <input
          id="password2"
          name="password2"
          type="text"
          onChange={handleChange}
          value={values.password2}
        />
        <br />
        {errors.password2 && touched.password2 && (
          <span style={{ color: "red", fontSize: "16px" }}>
            {errors.password2}
          </span>
        )}
        <br />
        <label htmlFor="city" className="">
          Country
        </label>
        <br />
        <select name="" id="">
          Country
          {countries.map((country) => {
            return (
              <option key={`${country.name}`} value={`${country.name}`}>
                {`${country.name}`}
              </option>
            );
          })}
        </select>

        {/* <select name="" id="">
          City
          {
            <option value={`${city[0]?.capital[0]}`}>
              {`${city[0]?.capital[0]}`}
            </option>
          }
        </select> */}
        <br />
        <button type="submit" className="">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
