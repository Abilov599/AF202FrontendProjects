import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Image,
  Heading,
  Text,
  Divider,
  Button,
} from "@chakra-ui/react";

const MyCard = ({ countrie }) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={`${countrie.flag}`} borderRadius="lg" />
        <Stack mt="3" spacing="3">
          <Heading size="md">{`${countrie.name}`}</Heading>
          <Text>Population: {`${countrie.population}`}</Text>
          <Text></Text>
          <Text></Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Button variant="ghost" colorScheme="blue">
          Detais
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MyCard;
