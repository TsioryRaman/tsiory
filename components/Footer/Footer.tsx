import { Box, Divider, Flex, Heading, keyframes, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { globals } from '../../globals';
import Fade from "react-reveal"


export const Footer: React.FC = () => {

  const bg = useColorModeValue('blue.400', 'blue.900')

  return (
    <Flex as="footer" py="2" className="footer" direction="column" bg={bg}>
      <Fade>
        <FooterNameText />
      </Fade>
      <Text textShadow="3px 1px 15px">Build with ChakraUI - NextJs</Text>
      <Divider />
      <Flex direction="column" alignItems="center">
        <Text mx="auto" padding="15px" textAlign="center">{`© ${globals.yourName} ${new Date().getFullYear()}`}</Text>
      </Flex>
    </Flex>
  );
}

export const FooterNameText: React.FC = () => {

  const bgLogo = useColorModeValue('blue.500', 'white')
  const color = useColorModeValue('white', 'blue.900')
  const textJump = keyframes(
    `
    0%{
      top:0%;
    }

    90%{
      top:0%;
    }
    100%{
      top: -10px;
    }
    `
  )

  const animationString:string = `${textJump} 3s ease  infinite alternate`
  const name:string = 'siory' 
  return (
    <Flex role="group" cursor="default" direction="column" position="relative" alignItems="center" justifyContent="center" >
          <Box display="flex" flexBasis="baseline" alignItems="baseline" color={bgLogo}>
            <Heading as="h1" fontSize="6em" fontWeight={`bold`} textAlign="center">T</Heading>
            {
              name.split('').map((v,k)=>(<Text as="span" fontSize="3em" style={{animationDelay:`0.${k}s`}}  display="inline-block" top="0" p="0" key={k} fontWeight="medium" position="relative" animation={animationString}>{v}</Text>))
            }
          </Box>
          <Box transitionDuration=".8s" display="flex" _groupHover={{clipPath:"inset(50% -1% -1% -1%)"}} clipPath="inset(-1% -1% 50% -1%)" px="24" color={color} background={bgLogo} position="absolute" flexBasis="baseline" alignItems="baseline">
            <Heading as="h1" fontSize="6em" fontWeight={`bold`} textAlign="center">T</Heading>
            {
              name.split('').map((v,k)=>(<Text as="span" fontSize="3em" style={{animationDelay:`0.${k}s`}} display="inline-block" top="0" p="0" key={k} fontWeight="medium" position="relative" animation={animationString}>{v}</Text>))
            }
          </Box>
        </Flex>
  )
}
