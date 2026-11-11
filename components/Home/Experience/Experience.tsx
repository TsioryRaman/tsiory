import { Box, Text } from "@chakra-ui/react";
import React from "react";
import Cursus from "../Cursus";
import { experience } from "../../../utils/data";

const Experience: React.FC = () => {
  return (
    <Box>
      <Text
        maxW="2xl"
        fontSize={["md", "lg", "lg", "lg"]}
        lineHeight="1.75"
        color="muted"
      >
        Développeur fullstack, je travaille sur toute la chaîne : conception des
        API et de la logique métier en .NET Framework et Java Spring Boot, puis
        interfaces et intégration côté React et Next.js. J&apos;aime les bases de
        code lisibles, les schémas simples et les livraisons qui tiennent en
        production.
      </Text>

      <Box mt={["10", "12", "14", "16"]}>
        {experience.map((entry) => (
          <Cursus key={entry.year} year={entry.year} content={entry.content} />
        ))}
      </Box>
    </Box>
  );
};

export default Experience;
