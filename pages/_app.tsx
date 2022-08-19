import React from 'react';
import Head from 'next/head';
import '../styles/base.css';
import { Navbar } from "../components/Navbar";
import { Box, ChakraProvider, Container, Divider } from '@chakra-ui/react';
import { ColorModeScript } from "@chakra-ui/color-mode"
import theme from "../theme"
import { Header } from '../components/Header';
import { HeaderMain } from '../components/HeaderMain';
import { BlockMain } from '../components/BlocMain';
const App: React.FC = ({ Component, pageProps }: any) => {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Head>
        <title>Tsiory Ramanantoanina | Portofolio</title>
      </Head>
      <Navbar>
      </Navbar>
      <Box as='div' mx={['12', '28', '36', '64']}>
        <Header name="Ramanantoanina Safidy Tsioriniaina" />
        <Divider orientation='horizontal' />
        <HeaderMain name="A propos" />
        <BlockMain />
      </Box>
    </ChakraProvider>
  );
};

export default App;
