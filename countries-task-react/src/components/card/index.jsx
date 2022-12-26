import React from "react";
import {
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Divider,
  Button,
} from "@chakra-ui/react";
import "./index.scss";

const MyCard = ({ countrie }) => {
  return (
    <Card className="card" maxW="sm">
      <CardBody>
        <img
          style={{ borderRadius: "8px", width: "260px", height: "180px" }}
          src={`${countrie.flags.png}`}
          alt={`${countrie.name}'s Flag`}
        />

        <Stack mt="3" spacing="3">
          <Heading size="md">{`${countrie.name}`}</Heading>
          <Text>Population: {`${countrie.population}`}</Text>
          <Text>Region: {`${countrie.region}`}</Text>
          <Text>Capital: {`${countrie.capital}`}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <Button variant="ghost" colorScheme="blue">
        Detais
      </Button>
    </Card>
  );
};

export default MyCard;
