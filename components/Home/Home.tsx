import { Box, Container } from "@chakra-ui/react";
import React from "react";
import TitleBlock from "../TitleBlock";
import Experience from "./Experience";
import ProjectCardList from "./Project";
import Skills from "./Skills";
import Contact from "./Contact";
import Mail from "./Mail";

const SECTION_TOP = ["20", "20", "28", "32"];

const Home: React.FC = () => {
  return (
    <Container
      maxW={["100%", "md", "3xl", "6xl"]}
      px={["6", "6", "8", "8"]}
    >
      <Box pt={SECTION_TOP}>
        <TitleBlock index="01" name="A propos" />
        <Experience />
      </Box>

      <Box mt={SECTION_TOP}>
        <TitleBlock index="02" name="Projets" />
        <ProjectCardList />
      </Box>

      <Box mt={SECTION_TOP}>
        <TitleBlock index="03" name="Compétences" anchor="Competences" />
        <Skills />
      </Box>

      <Box mt={SECTION_TOP}>
        <TitleBlock index="04" name="Me retrouver" />
        <Contact />
      </Box>

      <Box mt={SECTION_TOP}>
        <Mail />
      </Box>
    </Container>
  );
};

export default Home;
