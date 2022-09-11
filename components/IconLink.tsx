import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";
import React from "react"

type IconLinkProps = {
    label: String,
    to: string,
    href?:string
}

export const IconLink: React.FC<IconLinkProps> = ({ children,to }) => {

    return (
        <Link href={to}>
            <Flex
                as='a'
                cursor='pointer'
                transitionDuration='0.5s'
                _hover={{ bg: 'blue.500' }}

                color='white'
                bg={"gray.400"}
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