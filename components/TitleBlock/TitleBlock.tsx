import { Box, Divider, Heading, useColorModeValue } from "@chakra-ui/react";
import React, { FC } from "react";
import { getNameId } from "../../utils";

type TitleBlockProps = {
  name: string;
  textShadow?: boolean;
};

const TitleBlock: FC<TitleBlockProps> = ({ name, textShadow = true }) => {
  const textShadowColor = useColorModeValue("#3182ce", "white");

  return (
    <Box id={getNameId(name)}>
      <Heading
        color="whiteAlpha.900"
        textShadow={textShadow ? `3px 1px 15px ${textShadowColor}` : ""}
        as="h1"
        textAlign="center"
      >
        {name}
      </Heading>
      <Divider
        borderBottomWidth={3}
        borderColor={"blue.400"}
        mt="4"
        mx="auto"
        w={[16, 16, 16, 16]}
      />
    </Box>
  );
};

export default TitleBlock;
