import { Box, Divider, Heading, useColorModeValue } from "@chakra-ui/react";
import React from "react"

type HeaderType = {
    name: string,
    textShadow?:boolean
}

export const HeaderMain: React.FC<HeaderType> = ({ name,textShadow = true }) => {

    const textShadowColor = useColorModeValue("#3182ce","white")
    const getNameId = (name:String) => 'nav-' + (name.split(' ').length >= 2 ? name.split(" ")[1] as string : name as string)

    return (
        <Box id={getNameId(name)}>
            <Heading color="whiteAlpha.900" textShadow={textShadow ?`3px 1px 15px ${textShadowColor}`:''} as='h1' textAlign="center">
                {name}
            </Heading>
            <Divider borderBottomWidth={3} borderColor={"blue.400"} mt='4' mx='auto' w={[16, 16, 16, 16]} />
        </Box>
    );
}