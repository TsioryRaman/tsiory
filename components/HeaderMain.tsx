import { Box, Divider, Heading } from "@chakra-ui/react";
import React from "react"

type HeaderType = {
    name: string
}

export const HeaderMain: React.FC<HeaderType> = ({ name }) => {

    const getNameId = (name:String) => name.split(' ').length >= 2 ? name.split(" ")[1] as string : name as string

    return (
        <Box id={getNameId(name)}>
            <Heading as='h1' textAlign="center">
                {name}
            </Heading>
            <Divider borderBottomWidth={3} borderColor={"blue.400"} mt='4' mx='auto' w={[16, 16, 16, 16]} />
        </Box>
    );
}