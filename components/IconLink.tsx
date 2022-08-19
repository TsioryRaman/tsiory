import { Box, Flex } from "@chakra-ui/react";
import React from "react"

type IconLinkProps = {
    label: String;
}

export const IconLink: React.FC<IconLinkProps> = ({ children }) => {
    return (
        <Flex
            color='white'
            bg='blue.500'
            w={['8', '10', '12', '14']} h={['8', '10', '12', '14']}
            borderRadius='full'
            justify='center'
            alignItems='center'
            my='1' >

            <Box mx='auto' as='div'>
                {children}
            </Box>
        </Flex >

    );
}