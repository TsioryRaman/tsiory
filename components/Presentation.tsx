import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

type HeaderType = {
  name: string;
};

const CREAM = "#FAF9F6";
const SOFT = "rgba(250, 249, 246, 0.78)";
const FAINT = "rgba(250, 249, 246, 0.5)";

const linkStyle: React.CSSProperties = {
  color: CREAM,
  textDecoration: "underline",
  textUnderlineOffset: "5px",
};

export const Presentation: React.FC<HeaderType> = ({ name }) => {
  const words = name.split(" ");
  const last = words.pop();
  const first = words.join(" ");

  return (
    <Flex direction="column" color={CREAM}>
      <Text
        fontFamily="mono"
        fontSize="10px"
        letterSpacing="0.2em"
        textTransform="uppercase"
        color={FAINT}
        mb="8"
      >
        01 — Développeur fullstack
      </Text>

      <Heading
        as="h1"
        fontFamily="heading"
        fontWeight="500"
        fontSize={["3xl", "4xl", "6xl", "7xl"]}
        lineHeight="0.98"
        letterSpacing="-0.03em"
        color={CREAM}
        m="0"
      >
        {first}
        <Box as="span" display="block">
          {last}
        </Box>
      </Heading>

      <Text
        mt="8"
        fontFamily="mono"
        fontSize={["xs", "sm", "sm", "md"]}
        letterSpacing="0.02em"
        color={CREAM}
      >
        .NET Framework <Box as="span" color={FAINT}>·</Box> Java Spring Boot{" "}
        <Box as="span" color={FAINT}>·</Box> React / Next.js
      </Text>

      <Text
        mt="6"
        maxW="lg"
        fontSize={["sm", "md", "md", "lg"]}
        lineHeight="1.6"
        color={SOFT}
      >
        Je conçois et je maintiens des applications de bout en bout : API et
        logique métier côté back-end, interfaces React côté front-end.
      </Text>

      <Flex
        mt="10"
        gap="8"
        alignItems="center"
        flexWrap="wrap"
        fontFamily="mono"
        fontSize="11px"
        letterSpacing="0.12em"
        textTransform="uppercase"
      >
        <a href="/CV%20Tsiory.pdf" download style={linkStyle}>
          CV ↓
        </a>
        <a href="mailto:rtsiory4@gmail.com" style={linkStyle}>
          Email →
        </a>
      </Flex>
    </Flex>
  );
};
