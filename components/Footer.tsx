import { Box, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { globals } from '../globals';
import Fade from "react-reveal"


export const Footer: React.FC = () => {

  const bg = useColorModeValue('blue.400', 'blue.900')

  const bgLogo = useColorModeValue('blue.500','white')
  const color = useColorModeValue('white','blue.900')
  return (
    <Flex as="footer" py="2" className="footer" direction="column" bg={bg}>
          <Fade>
          <Flex direction="column" position="relative" alignItems="center" justifyContent="center" >
                    <Box display="flex"  flexBasis="baseline" alignItems="baseline">
                        <Heading as="h1" fontSize="6em" fontWeight={`bold`} textAlign="center">T</Heading>
                        <Text fontSize="3em" p="0" fontWeight="medium">siory</Text>
                    </Box>
                    <Box display="flex" clipPath="inset(-1% -1% 50% -1%)" px="24" color={color} background={bgLogo} position="absolute" flexBasis="baseline" alignItems="baseline">
                        <Heading as="h1" fontSize="6em" fontWeight={`bold`} textAlign="center">T</Heading>
                        <Text fontSize="3em" p="0" fontWeight="medium">siory</Text>
                    </Box>
                </Flex>
          </Fade>
      <Text>Build with ChakraUI - NestJs</Text>

      <Flex direction="column" alignItems="center">
        <Text mx="auto" padding="15px" textAlign="center">{`© ${globals.yourName} ${new Date().getFullYear()}`}</Text>
        {/*<a href="/rss.xml">
          <img src="/img/rss-white.svg" alt="RSS Feed" height="30" width="30" />
  </a>*/}
    
      </Flex>
    </Flex>
  );
}
