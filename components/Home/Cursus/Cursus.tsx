import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

type content = {
  header: string;
  description: string;
  iconFinal?: string;
};

type ParcourInformationType = {
  year: string;
  content: Array<content>;
};

const Cursus: React.FC<ParcourInformationType> = ({ year, content }) => {
  return (
    <Flex
      as="section"
      direction={["column", "column", "row", "row"]}
      borderTopWidth="1px"
      borderColor="rule"
      py={["5", "6", "7", "8"]}
      gap={["3", "3", "8", "12"]}
    >
      <Text
        fontFamily="mono"
        fontSize="11px"
        letterSpacing="0.1em"
        color="accent"
        minW="72px"
        pt="1"
      >
        {year}
      </Text>

      <Flex direction="column" gap="6" flex="1">
        {content.map((c, index) => (
          <Box key={index}>
            <Text
              fontFamily="heading"
              fontSize={["lg", "xl", "xl", "xl"]}
              lineHeight="1.3"
              color="ink"
            >
              {c.header}
            </Text>
            <Text mt="1" fontSize="sm" lineHeight="1.7" color="muted">
              {c.description}
            </Text>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};

export default Cursus;
