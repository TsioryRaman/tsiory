import React from 'react';
import '../styles/base.css';
import { Box, ChakraProvider, ColorModeScript, useColorModeValue } from '@chakra-ui/react';
import theme from '../theme';
import ProgressBar from 'react-progressbar-on-scroll';
import { Footer } from '../components/layout/Footer';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const Navbar = dynamic(() => import('../components/layout/Navbar'),{
  ssr: false
})

const App: React.FC = ({children,Component,pageProps}:any) => {
  const colorBar:string = useColorModeValue("#3182ce", "#1A365D")

  return <React.Fragment>
    <Head>
      <title>Tsiory Ramanantoanina</title>
      <meta name="google-site-verification" content="2NKN6Z-FgmAYxrQDJyeTmL4yQXZuXXV73yM0kSDqly8" />
    </Head>
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
