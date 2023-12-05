import React, {  useEffect } from 'react';
import '../styles/base.css';
import { Box, ChakraProvider, ColorModeScript, useColorModeValue } from '@chakra-ui/react';
import theme from '../theme';
import ProgressBar from 'react-progressbar-on-scroll';
import { Footer } from '../components/layout/Footer';
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('../components/layout/Navbar'),{
  ssr: false
})

const App: React.FC = ({children,Component,pageProps}:any) => {
  const colorBar:string = useColorModeValue("#3182ce", "#1A365D")

  useEffect(() => {
    document.title = 'Tsiory Ramanantoanina | Portfolio'
  },[])

  return <React.Fragment>
  <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ProgressBar color={colorBar}/>
    <Box position="relative" overflowX={"hidden"}>
      <Box>
        <Box as='div'>
          <Navbar />
          {children}
          <Component {...pageProps} />
        </Box>
        <Footer />
      </Box>
    </Box>
  </ChakraProvider>
</React.Fragment>
};

export default App;
