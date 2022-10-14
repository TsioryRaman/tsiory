
import { generateRSS } from '../rssUtil';
import { loadBlogPosts, loadMarkdownFile } from '../loader';
import React from 'react';
import { Header } from '../components/Header';
import { Box, Container, Divider, Img, useColorModeValue } from '@chakra-ui/react';
import { HeaderMain } from '../components/HeaderMain';
import { BlockMain } from '../components/BlocMain';
import { Article } from '../components/Article';
import { Article_1_Stack, Article_2_Stack } from '../staticData/staticData';
import Divertissement from '../components/Divertissement';
import Competence from '../components/Competence';
import Contact from '../components/Contact';
import Fade from "react-reveal"
import Mail from '../components/Mail';

const Home = () => {

  const bg = useColorModeValue('blue.200', 'blue.900')

  const bgHeader = useColorModeValue('blue.400', 'blue.900')
  return (
    <React.Fragment>
      <Box position="relative" bg={bgHeader}>
        <Box position="absolute" left="0" top="16" width="full">
          <Img zIndex="19999" src="/img/background/waves.svg" width="full" />
        </Box>
        <Container maxW={["sm", "md", "2xl", "6xl"]}>
          <Header name="Ramanantoanina Safidy Tsioriniaina" />
        </Container>
      </Box>
      <Container maxW={["sm", "md", "2xl", "6xl"]}>
        <Divider orientation='horizontal' />
        <Box mt={"16"} minH="100vh">
          <HeaderMain name="A propos" />
          <BlockMain />
        </Box>
      </Container>
      <Box mt={"48"} py="16" minH="100vh" color="white" backgroundAttachment="fixed" bg={bg}>
        <Container maxW={["sm", "md", "2xl", "6xl"]}>

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
