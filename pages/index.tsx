import React, { useRef } from "react";
import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";
import { Presentation } from "../components/Presentation";
import Main from "../components/Home";

const Home = () => {
  const mask = useRef<any>();

  const moveMask = (event: any) => {
    event.preventDefault();
    if (mask.current) {
      mask.current.style.maskPosition = `${event.clientX - 250}px ${
        event.clientY - 400
      }px`;
      mask.current.style.webkitMaskPosition = `${event.clientX - 250}px ${
        event.clientY - 400
      }px`;
      mask.current.style.webkitMaskSize = `800px`;

      if (event.clientX > window.innerWidth / 2) {
        mask.current.style.webkitMaskSize = `1200px`;
      }
    }
  };

  return (
    <React.Fragment>
      <Flex
        onMouseMove={moveMask}
        zIndex={1}
        transitionDuration="200ms"
        id="nav-home"
        direction="column"
        minH="100vh"
        position="relative"
        bg="#1D4ED8"
        color="#FAF9F6"
      >
        <Image
          position="absolute"
          top="0"
          left="0"
          right="0"
          w="100%"
          h="100%"
          ref={mask}
          bottom={["5em", "5em", "12em", "15em"]}
          transitionDuration="200ms"
          transitionProperty={["mask-size", "-webkit-mask-size"]}
          transitionTimingFunction="linear"
          className="header__main"
          src="/img/background/code.jpg"
        />
        <Container
          my="auto"
          maxW={["100%", "md", "2xl", "6xl"]}
          position="relative"
          pt={["28", "28", "24", "24"]}
        >
          <Presentation name="Safidy Tsioriniaina Ramanantoanina" />
        </Container>
        <Box
          position="relative"
          zIndex={1}
          borderTopWidth="1px"
          borderColor="rgba(250, 249, 246, 0.3)"
        >
          <Flex
            maxW={["100%", "md", "2xl", "6xl"]}
            mx="auto"
            px={["6", "6", "8", "8"]}
            py="5"
            gap={["4", "6", "8", "10"]}
            alignItems="center"
            flexWrap="wrap"
            fontFamily="mono"
            fontSize="10px"
            letterSpacing="0.12em"
            textTransform="uppercase"
          >
            <Text color="rgba(250, 249, 246, 0.75)">
              Disponible pour de nouveaux projets
            </Text>
            <Text color="rgba(250, 249, 246, 0.55)" display={["none", "block", "block", "block"]}>
              Antananarivo, Madagascar
            </Text>
            <Flex ml={["0", "auto", "auto", "auto"]} gap="5">
              <a
                href="https://github.com/TsioryRaman"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#FAF9F6", textDecoration: "none" }}
              >
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/tsiory-ramanantoanina/"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#FAF9F6", textDecoration: "none" }}
              >
                Linkedin
              </a>
            </Flex>
          </Flex>
        </Box>
      </Flex>
      <Main />
    </React.Fragment>
  );
};

export default Home;
