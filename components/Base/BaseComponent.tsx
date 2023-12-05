import { Box, Container, useColorModeValue } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import Fade from "react-reveal"
import React from 'react';
import { Loading } from '../layout/Loading';
import { HeaderMain } from '../Home/HeaderMain';
import { Article } from '../Home/Article';
import Mail from '../Home/Mail';
import { Article_1_Stack, Article_2_Stack } from '../../staticData/staticData';


const ThreeCertificate = dynamic(() => import("../Three/Certificate/ThreeCertificate"),{
  ssr:false,
  loading: () => <Loading />
})
const Competence = dynamic(() => import("../Home/Competence"),{
  ssr:false,
  loading: () => <Loading />
})
const Divertissement = dynamic(() => import("../Home/Divertissement"),{
  ssr:false,
  loading: () => <Loading />
})
const BlockMain = dynamic(() => import("../Home/BlocMain"),{
  ssr:false,
  loading: () => <Loading />
})
const Contact = dynamic(() => import("../Home/Contact"),{
  ssr:false,
  loading: () => <Loading />
})
const Player =dynamic(() => import("../ui/Player"),{
  ssr:false
})
const BaseComponent:React.FC = () => {

  const bg = useColorModeValue('blue.200', 'blue.900')

  const _before = { content: `""`, display: "block", position: "absolute", backgroundColor: bg, zIndex: "-1", right: "0", width: "100%", transform: "skewY(-1.5deg)" }

    return (<React.Fragment>
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
            />
          </Box>
        </Fade>
        <Container maxW={["100%", "md", "3xl", "6xl"]}>
          <HeaderMain name="A propos" />
          <BlockMain />
        </Container>
      </Box>
      <Box minH="100vh" className="reveal__full" mt="16" h="100vh" w="100%">
        <HeaderMain name="Certification" />
        <ThreeCertificate />
      </Box>
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
      </React.Fragment>)
}

export default BaseComponent