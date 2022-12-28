import React, { useEffect } from "react";
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
  Select,
  FormControl,
  FormLabel,
  InputRightElement,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

import { userValidationSchema } from "../../components/schema";
import {
  getCitiesByName,
  getCountries,
} from "../../service/countries-cities.service";
import { useFormik } from "formik";
import axios from "axios";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const SignUpPage = () => {
  // const [showPassword, setShowPassword] = useState(false);

  // const handleShowClick = () => setShowPassword(!showPassword);

  const [countries, setCountries] = useState([]);

  const getData = async () => {
    setCountries(await getCountries());
  };

  useEffect(() => {
    getData();
  }, []);

  const { handleSubmit, handleChange, values, errors, touched, resetForm } =
    useFormik({
      initialValues: {
        // userName: "",
        email: "",
        password: "",
        password2: "",
        country: "",
      },
      validationSchema: userValidationSchema,
      onSubmit: (values) => {
        let userObj = {
          // userName: values.userName,
          email: values.email,
          password: values.password,
          password2: values.password2,
          country: values.country,
        };
        axios.post("http://localhost:3000/user", userObj);
        console.log(userObj);
        resetForm();
      },
    });

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
          <form onSubmit={handleSubmit}>
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
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                  />
                </InputGroup>
                {errors.email && touched.email && (
                  <span style={{ color: "red", fontSize: "16px" }}>
                    {errors.email}
                  </span>
                )}
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
                    id="password"
                    name="password"
                    // type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    onChange={handleChange}
                    value={values.password}
                  />
                  {/* <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement> */}
                </InputGroup>
                {errors.password && touched.password && (
                  <span style={{ color: "red", fontSize: "16px" }}>
                    {errors.password}
                  </span>
                )}
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    id="password2"
                    name="password2"
                    type="text"
                    // type={showPassword ? "text" : "password"}
                    placeholder="Password confirm"
                    onChange={handleChange}
                    value={(values.password2 = values.password)}
                  />
                  {/* <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement> */}
                </InputGroup>
                {errors.password2 && touched.password2 && (
                  <span style={{ color: "red", fontSize: "16px" }}>
                    {errors.password2}
                  </span>
                )}
              </FormControl>
              <FormControl>
                <Select
                  placeholder="Select country"
                  id="country"
                  name="country"
                  value={values.country}
                  onChange={handleChange}
                >
                  {countries.map((country) => {
                    return (
                      <option key={`${country.name}`} value={`${country.name}`}>
                        {`${country.name}`}
                      </option>
                    );
                  })}
                </Select>
              </FormControl>

              <Button
                borderRadius={5}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
              >
                Sign Up
              </Button>
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
