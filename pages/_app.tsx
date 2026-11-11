import React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import dynamic from "next/dynamic";
import { Box, ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "../theme";
import Footer from "../components/Footer";
import "../styles/base.css";

const Navbar = dynamic(() => import("../components/Navbar/Navbar"), {
  ssr: false,
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <React.Fragment>
      <Head>
        <title>Tsiory Ramanantoanina</title>
        <meta
          name="google-site-verification"
          content="2NKN6Z-FgmAYxrQDJyeTmL4yQXZuXXV73yM0kSDqly8"
        />
      </Head>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Box position="relative" overflowX="hidden" bg="page" color="ink">
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </Box>
      </ChakraProvider>
    </React.Fragment>
  );
};

export default App;
