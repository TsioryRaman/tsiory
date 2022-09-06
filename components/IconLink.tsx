import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";
import React from "react"
import { useRouter } from "next/router"

type IconLinkProps = {
    label: String,
    to: string
}

export const IconLink: React.FC<IconLinkProps> = ({ children, to }) => {

    const router = useRouter();

    return (
        <Link href={to}>
            <Flex
                as='a'
                cursor='pointer'
                transitionDuration='0.5s'
                _hover={{ bg: 'blue.500' }}

                color='white'
                bg={router.pathname.includes(to.toString()) && router.pathname.length > 1 ? 'blue.500' : 'gray.400'}
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