import React from 'react';

import { Flex, Heading, Image, Text } from '@chakra-ui/react';
import { TypeAnimation } from 'react-type-animation';
import { Facebook, GitHub, Linkedin, Twitter } from 'react-feather';
import Fade from "react-reveal"

type HeaderType = {
  name: String,
  Sequence?: String[]
}

export const Header: React.FC<HeaderType> = ({ name }) => (

  <Fade>
    <Flex id="home" alignItems='center' direction={'column'} minH='100vh' justify="center">
      < Heading as='h1' w='full' fontSize={["2xl", "3xl", "6xl", "6xl"]} fontWeight={700} fontFamily={"Raleway, sans-serif"} color='#45505b' >
        {name}
      </Heading >
      <Text py='0.5' w='full' fontSize='3xl'>Je suis  <TypeAnimation
        sequence={[
          'Developpeur', // Types 'One'
          2000, // Waits 1s
          'Freelancer', // Deletes 'One' and types 'Two'
          2000, // Waits 2s
          () => {
            console.log('Done typing!'); // Place optional callbacks anywhere in the array
          }
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        style={{ fontSize: '1em', color: 'green' }}
      />
        <span style={{ display: "block" }}>Symfony/React.(js/ts)/Next.(js/ts)<Image src="/img/stack image/next.png" height="40px" width="40px" display="inline" /> | Typescript</span></Text>

      <Flex w='full' direction={'row'} mt='2' gap={'6'}>
        <a href='https://web.facebook.com/RamanantoaninaTsiory/' target="_blank"><Facebook /></a>
        <a href='https://www.linkedin.com/in/tsiory-ramanantoanina/' target="_blank"><Linkedin /></a>
        <a href='https://github.com/TsioryRaman' target="_blank"><GitHub /></a>
      </Flex>
    </Flex >

  </Fade >
);
