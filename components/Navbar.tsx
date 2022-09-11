import React from "react";

import { Box, Flex } from '@chakra-ui/react'
import { IconLink } from "./IconLink";
import { ArrowLeft, Book, File, Home, Mail, Server, User } from 'react-feather';
import { ToggleColorMode } from "./ToggleColorMode";
import Link from "next/link";
import { useRouter } from "next/router";
export const Navbar: React.FC = () => {

    const router = useRouter()

    return (
        <React.Fragment>
            <Flex justifyContent={"center"} flexDirection={"column"} width={['55px', '55px', '55px', '100px']} position={"fixed"} left={"0"} top='0' bottom='0' minH="100vh" alignItems={"center"}>
                {router.pathname !== "/" && <Box mt="3" cursor="pointer"><Link href="/"><ArrowLeft /></Link></Box>}
                <Box mt='auto'>
                    <IconLink to="#home" label={"home"} >
                        <Home size={20} />
                    </IconLink>
                    <IconLink to="#propos" label={"home"} >
                        <User size={20} />
                    </IconLink>
                    <IconLink to='#Article' label={"home"} >
                        <File size={20} />
                    </IconLink>
                    <IconLink to='#Divertissement' label={"home"} >
                        <Book size={20} />
                    </IconLink>
                    <IconLink to='#Competence' label={"home"} >
                        <Server size={20} />
                    </IconLink>
                    <IconLink to='#retrouver' label={"home"} >
                        <Mail size={20} />
                    </IconLink>
                </Box>
                <ToggleColorMode />

            </Flex>
        </React.Fragment>
    );
}