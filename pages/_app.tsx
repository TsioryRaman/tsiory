import React, { useEffect } from 'react';
import { useColorModeValue } from '@chakra-ui/color-mode';
import ProgressBar from 'react-progressbar-on-scroll'
import '../styles/base.css';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { ColorModeScript } from "@chakra-ui/color-mode"
import theme from "../theme"
import { Footer } from '../components/layout/Footer';
import { Navbar } from '../components/layout/Navbar';
const App: React.FC = ({ Component, pageProps }: any) => {


  const colorBar:string = useColorModeValue("#3182ce", "#1A365D")

  useEffect(() => {
    document.title = 'Tsiory Ramanantoanina | Portfolio'
  },[])

  return (
    <React.Fragment>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <ProgressBar color={colorBar}/>
        <Box position="relative" overflowX={"hidden"}>
          <Box>
            <Box as='div'>
        <Navbar />
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
