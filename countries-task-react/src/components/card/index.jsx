import React from "react";
import {
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Divider,
} from "@chakra-ui/react";
import "./index.scss";
import { Link } from "react-router-dom";

const MyCard = ({ country }) => {
  return (
    <Link to={`/country-detail/${country.name}`}>
      <Card className="card" maxW="sm">
        <CardBody>
          <img
            style={{ borderRadius: "8px", width: "260px", height: "180px" }}
            src={`${country.flags.png}`}
            alt={`${country.name}'s Flag`}
          />

          <Stack mt="3" spacing="3">
            <Heading size="md">{`${country.name}`}</Heading>
            <Text>Population: {`${country.population}`}</Text>
            <Text>Region: {`${country.region}`}</Text>
            <Text>Capital: {`${country.capital}`}</Text>
          </Stack>
        </CardBody>
        <Divider />
      </Card>
    </Link>
  );
};

export default MyCard;
