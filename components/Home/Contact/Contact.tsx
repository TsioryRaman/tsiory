import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const links = [
  {
    label: "GitHub",
    value: "github.com/TsioryRaman",
    href: "https://github.com/TsioryRaman",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/tsiory-ramanantoanina",
    href: "https://www.linkedin.com/in/tsiory-ramanantoanina/",
  },
  {
    label: "Email",
    value: "rtsiory4@gmail.com",
    href: "mailto:rtsiory4@gmail.com",
  },
];

const Contact: React.FC = () => {
  return (
    <Flex direction="column" maxW="3xl">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.href.startsWith("mailto:") ? undefined : "_blank"}
          rel="noreferrer"
          style={{ textDecoration: "none" }}
        >
          <Flex
            alignItems="baseline"
            justifyContent="space-between"
            gap="4"
            py="5"
            borderTopWidth="1px"
            borderColor="rule"
          >
            <Text
              fontFamily="mono"
              fontSize="10px"
              letterSpacing="0.16em"
              textTransform="uppercase"
              color="muted"
              minW={["60px", "80px", "100px", "120px"]}
            >
              {link.label}
            </Text>
            <Text
              fontSize={["sm", "md", "md", "md"]}
              color="ink"
              textAlign="right"
              wordBreak="break-all"
              transitionProperty="color"
              transitionDuration="150ms"
            >
              {link.value}
            </Text>
          </Flex>
        </a>
      ))}
    </Flex>
  );
};

export default Contact;
