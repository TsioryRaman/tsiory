import { Flex, Heading, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import { getNameId } from "../../utils";

type TitleBlockProps = {
  name: string;
  index?: string;
  anchor?: string;
  textShadow?: boolean;
};

const TitleBlock: FC<TitleBlockProps> = ({ name, index, anchor }) => {
  return (
    <Flex
      id={anchor ? `nav-${anchor}` : getNameId(name)}
      alignItems="baseline"
      gap="4"
      borderBottomWidth="1px"
      borderColor="rule"
      pb="4"
      mb="10"
      scrollMarginTop="100px"
    >
      {index && (
        <Text
          fontFamily="mono"
          fontSize="11px"
          lineHeight="1"
          color="accent"
          letterSpacing="0.08em"
          data-parallax="section-index"
        >
          {index}
        </Text>
      )}
      <Heading
        as="h2"
        fontFamily="heading"
        fontWeight="500"
        fontSize={["2xl", "3xl", "4xl", "4xl"]}
        lineHeight="1"
        color="ink"
        m="0"
        letterSpacing="-0.01em"
        data-parallax="section-title"
      >
        {name}
      </Heading>
    </Flex>
  );
};

export default TitleBlock;
