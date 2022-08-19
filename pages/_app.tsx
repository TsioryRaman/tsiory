import React from 'react';

import ProgressBar from 'react-progressbar-on-scroll'
import Head from 'next/head';
import '../styles/base.css';
import { Navbar } from "../components/Navbar";
import { Box, ChakraProvider } from '@chakra-ui/react';
import { ColorModeScript } from "@chakra-ui/color-mode"
import theme from "../theme"
import { Footer } from '../components/Footer';
const App: React.FC = ({ Component, pageProps }: any) => {
  return (
    <React.Fragment>
      <ProgressBar />
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Head>
          <title>Tsiory Ramanantoanina | Portofolio</title>
        </Head>
        <Box>
          <Navbar />
          <Box as='div' mx={['12', '28', '36', '64']}>
            <Component {...pageProps} />
          </Box>
          <Footer />
        </Box>
      </ChakraProvider>
    </React.Fragment>

  );
};

export default App;
