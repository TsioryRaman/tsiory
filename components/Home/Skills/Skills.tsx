import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const groups = [
  {
    label: "Back-end",
    items: [
      ".NET Framework",
      "C# / ASP.NET",
      "Java / Spring Boot",
      "Spring MVC",
      "REST API",
    ],
  },
  {
    label: "Front-end",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Chakra UI"],
  },
  {
    label: "Données & outils",
    items: ["SQL Server", "PostgreSQL", "Entity Framework", "Docker", "Git"],
  },
];

const Skills: React.FC = () => {
  return (
    <Flex
      direction={["column", "column", "row", "row"]}
      gap={["10", "12", "12", "16"]}
      alignItems="flex-start"
    >
      {groups.map((group) => (
        <Box key={group.label} flex="1" w={["100%", "100%", "auto", "auto"]}>
          <Text
            fontFamily="mono"
            fontSize="10px"
            letterSpacing="0.16em"
            textTransform="uppercase"
            color="accent"
            pb="3"
            borderBottomWidth="1px"
            borderColor="rule"
          >
            {group.label}
          </Text>
          <Flex direction="column">
            {group.items.map((item) => (
              <Text
                key={item}
                py="3"
                borderBottomWidth="1px"
                borderColor="rule"
                fontSize="sm"
                color="ink"
              >
                {item}
              </Text>
            ))}
          </Flex>
        </Box>
      ))}
    </Flex>
  );
};

export default Skills;
