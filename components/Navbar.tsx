import React, { useState } from "react";

import { Box, Flex, Heading, keyframes, Text, useColorModeValue } from '@chakra-ui/react'
import { IconLink } from "./IconLink";
import { AlignRight, ArrowLeft, Book, File, Home, Mail, Server, User } from 'react-feather';
import Link from "next/link";
import { useRouter } from "next/router";
import { ToggleColorMode } from "./ToggleColorMode";
const morphing = keyframes`
    0% {
        border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    }
    25% { 
        border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%;
    }
    50% {
        border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%;
    }
    75% {
        border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%;		
    }
`
export const Navbar: React.FC = () => {

    const router = useRouter()

    const bg = useColorModeValue('blue.900','white')
    const color = useColorModeValue('white','blue.900')
    const [open, setOpen] = useState(false)
    return (
        <React.Fragment>
            <Flex zIndex={"5"} justifyContent={"space-between"} alignItems="center" w="100%" position={"fixed"} px="12" top="4">
                <Box display="flex" justifyContent="center" alignItems="center" color={color} overflow="hidden" px="8" py="4"
                 background={bg}
                 borderRadius="30% 70% 70% 30% / 30% 30% 70% 70%"
                 animation={`${morphing} 10s infinite`}>
                    <Heading fontSize={["2em","2em","3em","3.5em"]} fontFamily="Sans-serif">T</Heading>
                </Box>
                <Flex direction={"row"}>

                    <ToggleColorMode />
                    <Box onClick={() => setOpen(s => !s)} p="3" borderRadius={2} cursor="pointer">
                        <Box transitionDuration={".5s"} style={{ transform: !open ? 'rotate(0deg)' : 'rotate(-90deg)' }}>
                            <AlignRight />
                        </Box>
                    </Box>

                {router.pathname !== "/" && <Box mt="3" cursor="pointer"><Link href="/"><ArrowLeft /></Link></Box>}
                </Flex>
            </Flex>

            <NavigationLink open={open} setOpen={setOpen} />
        </React.Fragment>
    );
}

type NavigationLinkProps = {
    open: Boolean,
    setOpen: Function
}

type SideBarContexte = {
    setOpen: Function
}

export const SideBarContext = React.createContext<SideBarContexte>({ setOpen: () => { } });

const NavigationLink: React.FC<NavigationLinkProps> = ({ open, setOpen }) => {


    return (
        <Box transitionTimingFunction={"ease-out"} zIndex="2" style={{ right: open ? "0" : "-100%", backdropFilter: "blur(8px)" }} minH="100vh" width={["100%", "100%", "50%", "50%"]} top="0" bottom="0" position="fixed" transitionDuration=".8s">
            <Flex mx={["48", "32", "32", "48"]} mt="32" direction={"column"} justifyContent="space-around" gap={6} >
                <Flex direction="row" alignItems="baseline" justifyContent="center" >
                    <Heading as="h1" fontSize="6em" textAlign="center">T</Heading>
                    <Text fontSize="3em" fontWeight="medium" fontFamily="Monaco">siory</Text>
                </Flex>
                <SideBarContext.Provider value={{ setOpen: setOpen }}>
                    <IconLink to="#home" label={"Acceuil"} >
                        <Home size={32} />
                    </IconLink>
                    <IconLink to="#propos" label={"A propos"} >
                        <User size={32} />
                    </IconLink>
                    <IconLink to='#Article' label={"Article"} >
                        <File size={32} />
                    </IconLink>
                    <IconLink to='#Divertissement' label={"Divertissement"} >
                        <Book size={32} />
                    </IconLink>
                    <IconLink to='#Competence' label={"Competence"} >
                        <Server size={32} />
                    </IconLink>
                    <IconLink to='#retrouver' label={"Contact"} >
                        <Mail size={32} />
                    </IconLink>
                </SideBarContext.Provider>
            </Flex>
        </Box >
    )
}