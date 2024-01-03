import React, { useRef } from "react";
import ProgressBar from "react-progressbar-on-scroll";
import { Presentation } from "../components/Presentation";
import {
  Box,
  Container,
  Flex,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import Fade from "react-reveal";
import dynamic from "next/dynamic";
import { LoadingInitial } from "../components/layout/LoadingInitial";

const BaseComponent = dynamic(
  () => import("../components/Base/BaseComponent"),
  {
    ssr: false,
    loading: () => {
      return <LoadingInitial />;
    },
  }
);

const Home = () => {
  const mask = useRef<any>();
  const bgHeader = useColorModeValue("blue.400", "blue.900");
  const bgWave = useColorModeValue("white", "#1a202c");

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
  const colorBar: string = useColorModeValue("#3182ce", "white");
  return (
    <React.Fragment>
      <ProgressBar color={colorBar} />
      <Flex
        onMouseMove={moveMask}
        zIndex={1}
        transitionDuration="200ms"
        id="nav-home"
        direction="column"
        minH="100vh"
        position="relative"
        bg={bgHeader}
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
        ></Image>
        <Container
          my="auto"
          maxW={["100%", "md", "2xl", "6xl"]}
          position="relative"
        >
          <Presentation name="Ramanantoanina Safidy Tsioriniaina" />
        </Container>
        <Fade bottom duration={800}>
          <Box
            position="absolute"
            left="0"
            height={["5em", "5em", "12em", "15em"]}
            width="100%"
            bottom="0"
            transform="rotateY(180deg)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="waves"
              viewBox="0 0 1440 250"
              height="100%"
              width="100%"
              style={{ isolation: "isolate" }}
              preserveAspectRatio="none"
            >
              <path
                fill="#FFF"
                style={{ animationDelay: ".2s" }}
                fillOpacity=".1"
                d="M0 24c166 0 358 11 755 133 382 116 563 101 685 72V80c-138 38-284 102-718 27C314 36 150 16 1 16l-1 8z"
              />
              <path
                fill="#FFF"
                style={{ animationDelay: ".4s" }}
                fillOpacity=".1"
                d="M0 24c166 0 358 11 755 133 382 116 563 101 685 72v-51l-2 1c-122 29-294 69-680-34C357 38 204 21 0 21v3z"
              />
              <path
                fill={bgWave}
                d="M1440 229v21H0V24c166 0 358 11 755 133 232 71 390 93 506 93 74 0 131-9 179-21 0-45 0-45 0 0z"
              />
            </svg>
          </Box>
        </Fade>
      </Flex>
      <BaseComponent />
    </React.Fragment>
  );
};

export default Home;
