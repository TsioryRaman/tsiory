
import { generateRSS } from '../rssUtil';
import { PostData, loadBlogPosts, loadMarkdownFile } from '../loader';
import React from 'react';
import { Header } from '../components/Header';
import { Divider } from '@chakra-ui/react';
import { HeaderMain } from '../components/HeaderMain';
import { BlockMain } from '../components/BlocMain';
import { Article } from '../components/Article';
import { Article_1_Stack, Article_2_Stack } from '../staticData/staticData';
import Divertissement from '../components/Divertissement';


const Home = (props: {
  introduction: string;
  features: string;
  readme: string;
  posts: PostData[];
}) => {
  return (
    <React.Fragment>
      <main>
        <Header name="Ramanantoanina Safidy Tsioriniaina" />
        <Divider orientation='horizontal' />
        <HeaderMain name="A propos" />
        <BlockMain />
        <HeaderMain name="Article" />
        <Article id={1} title={Article_1_Stack.title} description={Article_1_Stack.description}
          stack={Article_1_Stack.stack} />
        <Article id={2} title={Article_2_Stack.title} description={Article_2_Stack.description}
          stack={Article_2_Stack.stack} />

        <HeaderMain name="Divertissement" />
        <Divertissement />
      </main>
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
