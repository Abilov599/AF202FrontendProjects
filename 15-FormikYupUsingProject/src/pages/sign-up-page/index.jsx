// import { useFormik } from "formik";
// import React, { useEffect, useState } from "react";
// import { userValidationSchema } from "../../components/schema";
// import {
//   getCitiesByName,
//   getCountries,
// } from "../../service/countries-cities.service";

// const SignUpPage = () => {
//   const [countries, setCountries] = useState([]);

//   const getData = async () => {
//     setCountries(await getCountries());
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   // const [city, setCity] = useState({});

//   // const getCityData = async () => {
//   //   setCity(await getCitiesByName(name));
//   // };

//   // useEffect(() => {
//   //   getCityData();
//   // }, []);

//   // console.log(getCitiesByName(name));

//   const { handleSubmit, handleChange, values, errors, touched, resetForm } =
//     useFormik({
//       initialValues: {
//         userName: "",
//         // email: "",
//         password: "",
//         password2: "",
//         getCitiesByName: "",
//         // country: "",
//       },
//       validationSchema: userValidationSchema,
//       onSubmit: (values) => {
//         let userObj = {
//           userName: values.userName,
//           // email: values.email,
//           password: values.password,
//           password2: values.password2,
//           // city: values.city,
//           country: values.country,
//         };
//         // addNewUser(userObj);
//         console.log(userObj);
//         resetForm();
//       },
//     });
//   return (
//     <div>
//       <form id="sign-up-form" onSubmit={handleSubmit}>
//         <label htmlFor="userName" className="">
//           User Name
//         </label>
//         <br />
//         <input
//           id="userName"
//           name="userName"
//           type="text"
//           onChange={handleChange}
//           value={values.userName}
//         />
//         <br />
//         {errors.userName && touched.userName && (
//           <span style={{ color: "red", fontSize: "16px" }}>
//             {errors.userName}
//           </span>
//         )}
//         {/* <label htmlFor="Email" className="">
//           Email
//         </label>
//         <br />
//         <input
//           id="Email"
//           name="Email"
//           type="email"
//           onChange={handleChange}
//           value={values.email}
//         />
//         <br />
//         {errors.email && touched.email && (
//           <span style={{ color: "red", fontSize: "16px" }}>{errors.email}</span>
//         )} */}
//         <br />
//         <label htmlFor="password" className="">
//           Password
//         </label>
//         <br />
//         <input
//           id="password"
//           name="password"
//           type="text"
//           onChange={handleChange}
//           value={values.password}
//         />
//         <br />
//         {errors.password && touched.password && (
//           <span style={{ color: "red", fontSize: "16px" }}>
//             {errors.password}
//           </span>
//         )}
//         <br />
//         <label htmlFor="password2" className="">
//           Confrim Password
//         </label>
//         <br />
//         <input
//           id="password2"
//           name="password2"
//           type="text"
//           onChange={handleChange}
//           value={values.password2}
//         />
//         <br />
//         {errors.password2 && touched.password2 && (
//           <span style={{ color: "red", fontSize: "16px" }}>
//             {errors.password2}
//           </span>
//         )}
//         <br />
//         <label htmlFor="city" className="">
//           Country
//         </label>
//         <br />
//         <select name="" id="">
//           Country
//           {countries.map((country) => {
//             return (
//               <option key={`${country.name}`} value={`${country.name}`}>
//                 {`${country.name}`}
//               </option>
//             );
//           })}
//         </select>

//         {/* <select name="" id="">
//           City
//           {
//             <option value={`${city[0]?.capital[0]}`}>
//               {`${city[0]?.capital[0]}`}
//             </option>
//           }
//         </select> */}
//         <br />
//         <button type="submit" className="">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SignUpPage;

// import { useFormik } from "formik";
// import React, { useEffect, useState } from "react";
// import { userValidationSchema } from "../../components/schema";
// import {
//   getCitiesByName,
//   getCountries,
// } from "../../service/countries-cities.service";

import React from "react";
import { useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Avatar,
  FormControl,
  InputRightElement,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const SignUpPage = () => {
  // const [showPassword, setShowPassword] = useState(false);

  // const handleShowClick = () => setShowPassword(!showPassword);

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="teal.500" />
        <Heading color="teal.400">Welcome</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input type="email" placeholder="email address" />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    type="text"
                    // type={showPassword ? "text" : "password"}
                    placeholder="Password"
                  />
                  {/* <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement> */}
                </InputGroup>
              </FormControl>
              <Link to="/signin">
                <Button
                  borderRadius={0}
                  type="submit"
                  variant="solid"
                  colorScheme="teal"
                  width="full"
                >
                  Sign Up
                </Button>
              </Link>
            </Stack>
          </form>
        </Box>
      </Stack>
      {/* <Box>
        New to us?{" "}
        <Link style={{ color: "teal" }} to="/signup">
          Sign Up
        </Link>
      </Box> */}
    </Flex>
  );
};

export default SignUpPage;
