import React from 'react';
import { useColorModeValue } from '@chakra-ui/color-mode';
import ProgressBar from 'react-progressbar-on-scroll'
import Head from 'next/head';
import '../styles/base.css';
import { Navbar } from "../components/Navbar";
import { Box, ChakraProvider, Image } from '@chakra-ui/react';
import { ColorModeScript } from "@chakra-ui/color-mode"
import theme from "../theme"
import { Footer } from '../components/Footer';
const App: React.FC = ({ Component, pageProps }: any) => {


  const colorBar:string = useColorModeValue("#3182ce", "#1A365D")

  return (
    <React.Fragment>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <ProgressBar color={colorBar}/>
        <Box position="relative" overflowX={"hidden"}>
          <Image position="fixed" opacity="0.3" zIndex="-9999" height="100%" backgroundRepeat="no-repeat" left={["0","0","50%","50%"]} top={0} bottom={0} src="/img/background/—Pngtree—vector polygon perspective grid irregular_3024826.png" />
          <Head>
            <title>Tsiory Ramanantoanina | Portfolio</title>
          </Head>
          <Box>
            <Navbar />
            <Box as='div'>
              <Component {...pageProps} />
            </Box>
            <Footer />
          </Box>
        </Box>
      </ChakraProvider>
    </React.Fragment>

  );
};

export default App;
