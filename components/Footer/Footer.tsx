import { Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { globals } from "../../globals";
import Fade from "react-reveal";
import { useColorTheme } from "../../hooks";
import AnimatedName from "../AnimatedName";

export const Footer: React.FC = () => {
  const bg = useColorTheme();

  return (
    <Flex as="footer" py="2" className="footer" direction="column" bg={bg}>
      <Fade>
        <AnimatedName />
      </Fade>
      <Text textShadow="3px 1px 15px">Build with ChakraUI - NextJs</Text>
      <Divider />
      <Flex direction="column" alignItems="center">
        <Text mx="auto" padding="15px" textAlign="center">{`© ${
          globals.yourName
        } ${new Date().getFullYear()}`}</Text>
      </Flex>
    </Flex>
  );
};
