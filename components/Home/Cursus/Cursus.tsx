import { Badge, Box, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Clock, Compass } from "react-feather";

type content = {
  header: String;
  description: String;
  iconFinal?: string;
};

type ParcourInformationType = {
  year: String;
  content: Array<content>;
};

const Cursus: React.FC<ParcourInformationType> = ({ year, content }) => {
  return (
    <React.Fragment>
      <Badge
        display={"flex"}
        justifyContent="center"
        alignItems="center"
        gap="1"
        flexDirection="row"
        width="fit-content"
        mt="4"
        variant="outline"
        colorScheme="blue"
        fontSize="xl"
        fontWeight="bold"
        ml={["4", "6", "8", "12"]}
        mb="4"
      >
        <Clock size="17px" /> - {year}
      </Badge>

      {content.map((c, index) => (
        <Flex
          _hover={{ transform: "translateX(10px)" }}
          transitionDuration="300ms"
          key={index}
          ml={["6", "8", "12", "16"]}
          mt="4"
          direction="row"
          gap="2"
        >
          <Flex as="div" justify="center" alignItems="center">
            <Compass color="#4299e1" />
          </Flex>
          <Box key={index}>
            <Heading
              display={"flex"}
              flexDirection="row"
              fontWeight="bold"
              as="h2"
              fontSize="xl"
            >
              {c.header}
            </Heading>
            <Text color="gray.600" as="p" p="0" m="0">
              {c.description}
            </Text>
          </Box>
        </Flex>
      ))}

      <Divider mb="4" mt="2" />
    </React.Fragment>
  );
};

export default Cursus;
