import React, { useRef } from 'react';
import ProgressBar from 'react-progressbar-on-scroll'
import { Presentation } from '../components/Presentation';
import { Box, Container, Flex, Image, useColorModeValue } from '@chakra-ui/react';
import { HeaderMain } from '../components/HeaderMain';
import { BlockMain } from '../components/BlocMain';
import { Article } from '../components/Article';
import { Article_1_Stack, Article_2_Stack } from '../staticData/staticData';
import Divertissement from '../components/Divertissement';
import Competence from '../components/Competence';
import Contact from '../components/Contact';
import Fade from "react-reveal"
import Mail from '../components/Mail';
import { Player } from '@lottiefiles/react-lottie-player';
import { Certificate } from '../components/Certificate';

const Home = () => {

  const bg = useColorModeValue('blue.200', 'blue.900')
  const mask = useRef<any>()
  const bgHeader = useColorModeValue('blue.400', 'blue.900')

  const bgWave = useColorModeValue('white', '#1a202c')
  const _before = { content: `""`, display: "block", position: "absolute", backgroundColor: bg, zIndex: "-1", right: "0", width: "100%", transform: "skewY(-1.5deg)" }

  const onMouseMove = (event:any) => {
    event.preventDefault()
    console.log(window.innerWidth / 2,event.pageX)
    if(mask.current)
    {
      mask.current.style.maskPosition = `${event.clientX - 250}px ${event.clientY - 400}px`
      mask.current.style.webkitMaskPosition = `${event.clientX - 250}px ${event.clientY - 400}px`
      mask.current.style.webkitMaskSize = `800px`

      if(event.clientX > (window.innerWidth / 2))
      {
        mask.current.style.webkitMaskSize = `1200px`
      }
    }
  }


  const colorBar: string = useColorModeValue("#3182ce", "white")
  return (
    <React.Fragment>
      <ProgressBar color={colorBar} />
      <Flex  onMouseMove={onMouseMove} zIndex={1} transitionDuration="200ms" id="nav-home" direction="column" minH='100vh' position="relative" bg={bgHeader}>
        <Image position="absolute" top="0" left="0" right="0" w="100%" h="100%" ref={mask} bottom={["5em","5em","12em","15em"]} transitionDuration="200ms" transitionProperty={["mask-size","-webkit-mask-size"]} transitionTimingFunction="linear" className='header__main'  src='/img/background/code.jpg'>
        </Image>
        <Container my="auto" maxW={["100%", "md", "2xl", "6xl"]} position="relative">
          <Presentation name="Ramanantoanina Safidy Tsioriniaina" />
        </Container>
        <Fade bottom duration={800}>
          <Box position="absolute" left="0" height={["5em","5em","12em","15em"]} width="100%" bottom="0" transform="rotateY(180deg)">
            <svg xmlns="http://www.w3.org/2000/svg" className="waves" viewBox="0 0 1440 250" height="100%" width="100%" style={{ isolation: "isolate" }} preserveAspectRatio="none">
              <path fill="#FFF" style={{ animationDelay: ".2s" }} fillOpacity=".1" d="M0 24c166 0 358 11 755 133 382 116 563 101 685 72V80c-138 38-284 102-718 27C314 36 150 16 1 16l-1 8z" />
              <path fill="#FFF" style={{ animationDelay: ".4s" }} fillOpacity=".1" d="M0 24c166 0 358 11 755 133 382 116 563 101 685 72v-51l-2 1c-122 29-294 69-680-34C357 38 204 21 0 21v3z" />
              <path fill={bgWave} d="M1440 229v21H0V24c166 0 358 11 755 133 232 71 390 93 506 93 74 0 131-9 179-21 0-45 0-45 0 0z" />
            </svg>
          </Box>
        </Fade>
      </Flex>
      <Box position="relative" mt={"16"} minH="100vh">
        <Box mb="12">
        </Box>

        <Fade>
          <Box position="absolute" zIndex="-9999" width={["100px", "100px", "200px", "300px"]} right="15px" bottom="1px" >
            <Player // set the ref to your class instance
              autoplay={true}
              keepLastFrame
              speed={0.7}
              src="https://assets1.lottiefiles.com/private_files/lf30_CrFtpW.json"
            /* src="https://assets8.lottiefiles.com/packages/lf20_mbrocy0r.json" */
            />
          </Box>
        </Fade>

        <Container maxW={["100%", "md", "3xl", "6xl"]}>
          <HeaderMain name="A propos" />
          <BlockMain />
        </Container>
      </Box>
      <Container maxW={["100%", "md", "3xl", "6xl"]}>
        <HeaderMain name="Certification" />
        <Certificate />
      </Container>
      <Box mt={"48"} py="16" minH="100vh" color="white" position="relative" _before={{ top: "-100px", bottom: "0", ..._before }} _after={{ ..._before, bottom: "-100px", top: "0" }} backgroundAttachment="fixed" bg={bg}>
        <Container maxW={["sm", "md", "3xl", "6xl"]}>
          <HeaderMain textShadow={false} name="Article" />
          <Fade distance="100px" left duration={800}>
            <Article id={1} title={Article_1_Stack.title} description={Article_1_Stack.description}
              stack={Article_1_Stack.stack} />
          </Fade>
          <Fade distance="100px" right duration={800}>
            <Article id={2} title={Article_2_Stack.title} description={Article_2_Stack.description}
              stack={Article_2_Stack.stack} />
          </Fade>
        </Container>
      </Box>

      <Container maxW={["sm", "md", "4xl", "6xl"]}>
        <Box mt="48">
          <HeaderMain name="Divertissement" />
          <Divertissement />
        </Box>
        <Box mt="48">
          <HeaderMain name="Competence" />
          <Competence />
        </Box>
      </Container>

      <Box mt="48">
        <HeaderMain name="Me retrouver" />
        <Box bgColor={bg} opacity=".8">
          <Box mx="auto" py={4} maxW={["sm", "md", "2xl", "6xl"]}>
            <Contact />
          </Box>
        </Box>
      </Box>

      <Mail />
    </React.Fragment>
  );
};

export default Home;
