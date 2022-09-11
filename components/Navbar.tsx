import React from "react";

import { Box, Flex } from '@chakra-ui/react'
import { IconLink } from "./IconLink";
import { Book, File, Home, Mail, Server, User } from 'react-feather';
import { ToggleColorMode } from "./ToggleColorMode";
export const Navbar: React.FC = () => {
    return (
        <React.Fragment>
            <Flex justifyContent={"center"} flexDirection={"column"} width={['55px', '55px', '55px', '100px']} position={"fixed"} left={"0"} top='0' bottom='0' minH="100vh" alignItems={"center"}>
                <Box mt='auto'>
                    <IconLink to='/' label={"home"} >
                        <Home size={20} />
                    </IconLink>
                    <IconLink to='/contact' label={"home"} >
                        <User size={20} />
                    </IconLink>
                    <IconLink to='#' label={"home"} >
                        <File size={20} />
                    </IconLink>
                    <IconLink to='/article' label={"home"} >
                        <Book size={20} />
                    </IconLink>
                    <IconLink to='#' label={"home"} >
                        <Server size={20} />
                    </IconLink>
                    <IconLink to='#' label={"home"} >
                        <Mail size={20} />
                    </IconLink>
                </Box>
                <ToggleColorMode />

            </Flex>
        </React.Fragment>
    );
}