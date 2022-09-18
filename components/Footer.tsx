import { Flex, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { globals } from '../globals';


export const Footer: React.FC = () => {

  const bg = useColorModeValue('blue.400', 'blue.900')

  return (
    <Flex as="footer" bg={bg} className="footer">
      <Text mx="auto" textAlign="center">{`© ${globals.yourName} ${new Date().getFullYear()}`}</Text>
      <a href="/rss.xml">
        <img src="/img/rss-white.svg" alt="RSS Feed" height="30" width="30" />
      </a>
    </Flex>
  );
}
