import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";
import React from "react"
import { Url } from "url";

type IconLinkProps = {
    label: String,
    to: Url
}

export const IconLink: React.FC<IconLinkProps> = ({ children, to }) => {
    return (
        <Link href={to}>
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
        </Link>

    );
}