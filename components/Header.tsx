import React from 'react';

import { Box, Button, Flex, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react';
import { TypeAnimation } from 'react-type-animation';
import { Facebook, GitHub, Linkedin } from 'react-feather';
import Fade from "react-reveal"
import { Player } from '@lottiefiles/react-lottie-player';

type HeaderType = {
  name: String,
  Sequence?: String[]
}

export const Header: React.FC<HeaderType> = ({ name }) => {

  const color = useColorModeValue("white","white");

  return(

  <Fade bottom distance="100px">
    
    <Flex direction={"row"}>
    
        <Flex color="white" id="home" alignItems='center' direction={'column'} minH='100vh' justify="center">
 
          < Heading as='h1' w='full' fontSize={["2xl", "3xl", "6xl", "6xl"]} fontWeight={700} fontFamily={"Raleway, sans-serif"} color={color} >
            {name}
          </Heading >
          <Text py='0.5' w='full' fontSize='3xl'>Je suis  <TypeAnimation
            sequence={[
              'Developpeur', // Types 'One'
              2000, // Waits 1s
              'Freelancer', // Deletes 'One' and types 'Two'
              2000, // Waits 2s
              () => {
                // Place optional callbacks anywhere in the array
              }
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: '1em', color: 'white', textShadow:"3px 1px 15px" }}
          />
            <span style={{ display: "block" }}>Symfony/React.(js/ts)/Next.(js/ts)<Image src="/img/stack image/next.png" height="40px" width="40px" display="inline" /> | Typescript</span></Text>

          <Flex w='full' direction={['row']} flexWrap="wrap" mt='16' gap={['2','2','4','6']}>

          <a href='https://web.facebook.com/RamanantoaninaTsiory/' target="_blank">
            <Button colorScheme={"facebook"}>
            Facebook<Facebook size="17px"/>
            </Button>
          </a>

          <a href='https://www.linkedin.com/in/tsiory-ramanantoanina/' target="_blank">
            <Button  colorScheme={"linkedin"}>
              <Text mr="2">Linkedin</Text><Linkedin size="17px"/>
            </Button>
          </a> 
          <a href='https://github.com/TsioryRaman' target="_blank">
            <Button  variant="outline" colorScheme={"blackAlpha"} color="whiteAlpha.900">
              <Text mr="2">Github</Text>
              <GitHub size="17px"/>
            </Button>
          </a>
          </Flex>
          </Flex >
         <Box my="auto">
         <Player // set the ref to your class instance
        autoplay={true}
        loop={true}
        controls={true}
        speed={0.7}
        src="
        https://assets1.lottiefiles.com/packages/lf20_V9t630.json"
        /* src="https://assets8.lottiefiles.com/packages/lf20_mbrocy0r.json" */
      ></Player>
         </Box>
    </Flex>

  </Fade >
)};
