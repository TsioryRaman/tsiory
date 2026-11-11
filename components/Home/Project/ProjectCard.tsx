import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

export interface ProjectCardProps {
  title: string;
  description: string;
  stack: Array<string>;
  details?: Array<string>;
  context?: string;
  img?: string;
  index?: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  stack,
  details,
  context,
  img,
  index = 0,
}: ProjectCardProps) => {
  return (
    <Box
      as="article"
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      gap={{ base: "5", sm: "6", md: "10", lg: "12" }}
      alignItems="flex-start"
      borderTopWidth="1px"
      borderColor="rule"
      py={{ base: "6", sm: "6", md: "8", lg: "10" }}
    >
      <Text
        fontFamily="mono"
        fontSize="11px"
        color="accent"
        minW="40px"
        pt="1"
      >
        {String(index + 1).padStart(2, "0")}
      </Text>

      <Box flex="1">
        {context && (
          <Text
            fontFamily="mono"
            fontSize="10px"
            letterSpacing="0.12em"
            textTransform="uppercase"
            color="accent"
            mb="3"
          >
            {context}
          </Text>
        )}

        <Heading
          as="h3"
          fontFamily="heading"
          fontWeight="500"
          fontSize={{ base: "2xl", md: "3xl" }}
          lineHeight="1.1"
          color="ink"
          m="0"
          letterSpacing="-0.01em"
        >
          {title}
        </Heading>

        <Text mt="3" fontSize="sm" lineHeight="1.7" color="muted" maxW="xl">
          {description}
        </Text>

        {details && details.length > 0 && (
          <Box as="ul" mt="4" pl="0" listStyleType="none">
            {details.map((detail) => (
              <Text
                as="li"
                key={detail}
                display="flex"
                gap="3"
                fontSize="sm"
                lineHeight="1.7"
                color="muted"
                mb="2"
              >
                <Box as="span" color="accent" aria-hidden="true">
                  —
                </Box>
                <Box as="span">{detail}</Box>
              </Text>
            ))}
          </Box>
        )}

        <Box display="flex" mt="5" gap="2" flexWrap="wrap">
          {stack.map((s) => (
            <Text
              key={s}
              fontFamily="mono"
              fontSize="10px"
              letterSpacing="0.06em"
              textTransform="uppercase"
              color="muted"
              borderWidth="1px"
              borderColor="rule"
              px="2"
              py="1"
            >
              {s}
            </Text>
          ))}
        </Box>
      </Box>

      {img && (
        <Box
          w={{ base: "100%", md: "260px", lg: "300px" }}
          flexShrink={0}
          overflow="hidden"
          borderWidth="1px"
          borderColor="rule"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="project-thumb" src={img} alt={title} loading="lazy" />
        </Box>
      )}
    </Box>
  );
};
