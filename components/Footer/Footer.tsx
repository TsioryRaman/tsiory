import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { globals } from "../../globals";

export const Footer: React.FC = () => {
  return (
    <Box
      as="footer"
      borderTopWidth="1px"
      borderColor="rule"
      mt={["20", "20", "32", "32"]}
    >
      <Flex
        maxW="6xl"
        mx="auto"
        px={["6", "6", "8", "8"]}
        py="10"
        direction={["column", "column", "row", "row"]}
        justifyContent="space-between"
        alignItems={["flex-start", "flex-start", "baseline", "baseline"]}
        gap="4"
      >
        <Text fontFamily="heading" fontSize="2xl" color="ink">
          Tsiory Ramanantoanina
        </Text>
        <Flex gap={["3", "4", "6", "6"]} flexWrap="wrap">
          <Text fontFamily="mono" fontSize="10px" color="muted">
            © {new Date().getFullYear()} {globals.yourName}
          </Text>
          <Text fontFamily="mono" fontSize="10px" color="muted">
            Antananarivo, Madagascar
          </Text>
          <Text fontFamily="mono" fontSize="10px" color="muted">
            Next.js · TypeScript · Chakra UI
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
