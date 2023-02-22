import { Flex, Img, Text, useColorModeValue, Box } from "@chakra-ui/react";
import { Player } from "@lottiefiles/react-lottie-player";
import React, { useRef } from "react";
import Fade, { Zoom } from "react-reveal";
type CardCompetenceType = {
  title: String;
  logo: string;
  type: string;
};
const Competence: React.FC = () => {
  return (
    <Flex direction={"row"} justifyContent="space-around" flexWrap={"wrap"}>
      <Box w={["0","0","40%","40%"]} my="auto">
        <Player // set the ref to your class instance
          autoplay={true}
          loop={true}
          controls={true}
          speed={0.7}
          src="
        https://assets2.lottiefiles.com/packages/lf20_tno6cg2w.json"
          /* src="https://assets8.lottiefiles.com/packages/lf20_mbrocy0r.json" */
        ></Player>
      </Box>
      <Flex
        w={["100%","100%","60%","60%"]}
        overflow={"hidden"}
        mt="8"
        gap="8"
        alignItems={"center"}
        justifyContent={"center"}
        direction={["column", "column", "column", "row"]}
      >
        {/*<CardCompetence type="Backend" description={" Je développe des applications PHP depuis plus de 2 ans et je maitrise les frameworks Symfony 4/5"} title="Symfony ou Laravel" logo="https://cdn.worldvectorlogo.com/logos/symfony.svg" />
            <CardCompetence type="Environement" description="Je développe des applications sur Linux | Windows avec des outils comme Docker" title={"Linux|Windows"} logo={"https://training.galaxyproject.org/archive/2022-06-01/topics/admin/images/docker_whale.png"} />
    <CardCompetence type="Frontend" description="Je développe des applications reactives avec React.js et Vue.js" title={"Reactjs/Vuejs"} logo={"https://cdn.worldvectorlogo.com/logos/react-2.svg"} />*/}
        <Flex
          justifyContent={"center"}
          direction={["row", "row", "row", "column"]}
          wrap="wrap"
          w="1/4"
          gap="2"
        >
          <Fade left duration={800}>
            <CardCompetence
              type="Backend"
              title="Symfony"
              logo="https://cdn.worldvectorlogo.com/logos/symfony.svg"
            />
          </Fade>
          <Fade right duration={800}>
            <CardCompetence
              type="Backend"
              title={"Php"}
              logo={"https://www.jasonallen.dev/fancy-index/icons/php.svg"}
            />
          </Fade>
          <Fade top duration={800}>
            <CardCompetence
              type="Environement"
              title={"Reactjs"}
              logo={"https://cdn.worldvectorlogo.com/logos/react-2.svg"}
            />
          </Fade>

          <Fade bottom duration={800}>
            <CardCompetence
              type="Frontend"
              title={"Vuejs"}
              logo={
                "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
              }
            />
          </Fade>
        </Flex>
        <Flex gap="2" flexWrap={"wrap"} alignItems="center" justifyContent={"center"} direction={["row", "row", "row", "column"]} w="1/4">
        <Fade top duration={800}>
            <CardCompetence
              type="Environement"
              title={"Windows"}
              logo={
                "https://upload.wikimedia.org/wikipedia/commons/5/5f/Windows_logo_-_2012.svg"
              }
            />
          </Fade>
          <Zoom duration={800}>
            <CardCompetence
              type="Environement"
              title={"Docker"}
              logo={
                "https://training.galaxyproject.org/archive/2022-06-01/topics/admin/images/docker_whale.png"
              }
            />
          </Zoom>
          <Fade bottom duration={800}>
            <CardCompetence
              type="Environement"
              title={"Linux"}
              logo={
                "https://cdn4.iconfinder.com/data/icons/vector-brand-logos/40/Linux-512.png"
              }
            />
          </Fade>
        </Flex>
        <Flex
          justifyContent={"center"}
          gap="2"
          direction={["row", "row", "row", "column"]}
          w="1/4"
        >
          <Fade top duration={800}>
            <CardCompetence
              type="Environement"
              title={"Typescript"}
              logo={
                "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
              }
            />
          </Fade>
          <Fade bottom duration={800}>
            <CardCompetence
              type="Frontend"
              title={"Javascript"}
              logo={"https://cdn.worldvectorlogo.com/logos/javascript-1.svg"}
            />
          </Fade>
        </Flex>
      </Flex>
    </Flex>
  );
};
const CardCompetence: React.FC<CardCompetenceType> = ({ title, logo }) => {
  const bg = useColorModeValue("white", "blue.900");

  const color = useColorModeValue("gray.600", "gray.200");

  const bgBorder = useColorModeValue("gray.100", "transparent");
  const ref = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const textRef = useRef<HTMLParagraphElement>(null);
  const mouseEnter = (e: any) => {
    let xAxis = (window.innerWidth / 2 - e.pageX / 4) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY / 4) / 25;

    if (ref.current !== null) {
      ref.current.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`;
    }
    if (imageRef.current !== null) {
      imageRef.current.style.transform = "translateZ(50px) rotateZ(10deg)";
    }
    if (textRef.current !== null) {
      textRef.current.style.transform = "translateZ(50px) ";
    }
  };

  const mouseLeave = () => {
    if (ref.current !== null) {
      console.log("not null");
      console.log(ref);
      ref.current.style.transform = `rotate(0deg)`;
    }
    if (imageRef.current !== null) {
      imageRef.current.style.transform = "rotate(0deg)";
    }
  };

  return (
    <Flex
      style={{ transformStyle: "preserve-3d", perspective: "500px" }}
      transitionDuration={".6s"}
      as="div"
      ref={ref}
      onMouseLeave={mouseLeave}
      onMouseMove={mouseEnter}
      bg={bg}
      borderRadius={4}
      flexDirection="column"
      boxShadow="lg"
      py={["3", "5", "5", "5"]}
      px={["8", "12", "12", "12"]}
      alignItems="center"
      borderColor={bgBorder}
      borderWidth="1px"
      justifyContent="center"
    >
      <Img
        ref={imageRef}
        height="50px"
        w="50px"
        transitionDuration={".6s"}
        src={logo}
      />
      <Text
        ref={textRef}
        color={color}
        fontWeight={"medium"}
        transitionDuration={".6s"}
        py="0"
      >
        {title}
      </Text>
    </Flex>
  );
};
export default Competence;
