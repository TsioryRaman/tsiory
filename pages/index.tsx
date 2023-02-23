
import { generateRSS } from '../rssUtil';
import { loadBlogPosts, loadMarkdownFile } from '../loader';
import React from 'react';
import ProgressBar from 'react-progressbar-on-scroll'
import { Header } from '../components/Header';
import { Box, Container, Img, useColorModeValue } from '@chakra-ui/react';
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

const Home = () => {

  const bg = useColorModeValue('blue.200', 'blue.900')

  const bgHeader = useColorModeValue('blue.400', 'blue.900')

  const colorBar:string = useColorModeValue("#3182ce", "white")
  return (
    <React.Fragment>

      <ProgressBar color={colorBar}/>
      <Box position="relative" bg={bgHeader}>
        <Fade top distance="100px">
          <Box position="absolute" left="0" top="16" width="full">
            <Img zIndex="19999" src="/img/background/waves.svg" width="full" />
          </Box>
        </Fade>
        <Container maxW={["sm", "md", "2xl", "6xl"]}>
          <Header name="Ramanantoanina Safidy Tsioriniaina" />
        </Container>
      </Box>
      <Box position="relative" mt={"16"} minH="100vh">
        <Box mb="12">

   
        </Box>
        {["https://assets3.lottiefiles.com/private_files/lf30_u4rzoljr.json","https://assets1.lottiefiles.com/packages/lf20_itlrgnef.json"].map((link,k)=><Box key={k} position="absolute" zIndex="-9999" width={["100px","100px","200px","300px"]} right={k === 1 ? "15px" : "5px"} left={k === 0 ? "15px" : "auto"} top={k === 0 ? 50 : "auto"} bottom={k === 1 ? '1px' : 0} >
        <Player // set the ref to your class instance
        autoplay={true}
        loop={true}
        controls={true}
        speed={0.7}
        src={link}
        /* src="https://assets8.lottiefiles.com/packages/lf20_mbrocy0r.json" */
      ></Player>
        </Box>)}
        <Container maxW={["sm", "md", "3xl", "6xl"]}>
          <HeaderMain name="A propos" />
          <BlockMain />
        </Container>
      </Box>
      <Box mt={"48"} py="16" minH="100vh" color="white" backgroundAttachment="fixed" bg={bg}>
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

export const getStaticProps = async () => {
  const introduction = await loadMarkdownFile('introduction.md');
  const features = await loadMarkdownFile('features.md');
  const readmeFile = await import(`../${'README.md'}`);
  const readme = readmeFile.default;
  const posts = await loadBlogPosts();

  // comment out to turn off RSS generation during build step.
  await generateRSS(posts);

  const props = {
    introduction: introduction.contents,
    features: features.contents,
    readme: readme,
    posts,
  };

  return { props };
};
