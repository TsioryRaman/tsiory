import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { Bounce } from "react-reveal";
import Cursus from "../Cursus";
import { experience } from "../../../utils/data";

const Experience: React.FC = () => {
  const color = useColorModeValue("gray.600", "gray.500");

  return (
    <Box cursor="pointer" position="relative" color={color} as="div">
      <Text fontWeight="500">
        J'adore les defis proposer par mes employeurs. Optimiste et rigoureux,
        j'adore apprendre des nouvelles choses afin de renforcer mes competences
        que j'ai deja acquis.<span>&#128170;</span>
      </Text>
      <Box>
        <Text as="h2" fontSize="3xl" fontWeight="700">
          Mes parcours
        </Text>
        {experience.map((experience) => (
          <Bounce left duration={800} key={experience.year}>
            <Cursus
              year={experience.year}
              content={experience.content}
            ></Cursus>
          </Bounce>
        ))}
      </Box>
    </Box>
  );
};

export default Experience;
