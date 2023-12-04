import ProgressBar from 'react-progressbar-on-scroll'
import { useColorModeValue } from '@chakra-ui/color-mode';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { ColorModeScript } from "@chakra-ui/color-mode"
import theme from "../../theme"
import { Footer } from '../layout/Footer';
import { Navbar } from '../layout/Navbar';
import React from 'react';

const BaseComponent:React.FC = ({ children }: any) => {
    const colorBar:string = useColorModeValue("#3182ce", "#1A365D")

    return (<React.Fragment>
        <ChakraProvider theme={theme}>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <ProgressBar color={colorBar}/>
          <Box position="relative" overflowX={"hidden"}>
            <Box>
              <Box as='div'>
                <Navbar />
                {children}
                {/* <Component {...pageProps} /> */}
              </Box>
              <Footer />
            </Box>
          </Box>
        </ChakraProvider>
      </React.Fragment>)
}

export default BaseComponent