import React, { useState } from "react";

import { Box, Flex, Heading, keyframes, Text, useColorModeValue } from '@chakra-ui/react'
import { IconLink } from "./IconLink";
import { AlignRight, ArrowLeft, Book, Facebook, File, GitHub, Home, Linkedin, Mail, Server, User } from 'react-feather';
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

const appear = keyframes `
    0%{
        opacity:0;
    }
    100%{
        left:100;
        opacity: 1;
    }
`
export const Navbar: React.FC = () => {

    const router = useRouter()

    const bg = useColorModeValue('blue.900','white')
    const color = useColorModeValue('white','blue.900')
    const [open, setOpen] = useState(false)
    return (
        <React.Fragment>
            <Flex zIndex={"5"} justifyContent={"space-between"} alignItems="center" w="100%" backdropFilter={`blur(8px)`} position={"fixed"} px={["2","8","24","24"]} py={2} top="0">
                <Box display="flex" justifyContent="center" position="relative" alignItems="center" color={color} overflow="hidden" px="5" py="2"
                 background={bg}
                 cursor="default"
                 role="group"
                 borderRadius="30% 70% 70% 30% / 30% 30% 70% 70%"
                 animation={`${morphing} 10s infinite`}>
                    <Heading fontSize={["1.5em","1.5em","2em","2.5em"]} fontFamily="Sans-serif">T</Heading>
                    <Text p="0" position={"absolute"} opacity="0" _groupHover={{opacity:1,marginLeft:0,animation: `${appear}`}} transitionDuration={"1s"} >siory</Text>
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


    const bg = useColorModeValue('blue.900','white')
    const color = useColorModeValue('white','blue.900')

    return (
        <Flex direction="column" color={bg} transitionTimingFunction={"ease-out"} zIndex="2" style={{ right: open ? "0" : "-100%", backdropFilter: "blur(8px)" }} minH="100vh" width={["100%", "100%", "50%", "50%"]} top="0" bottom="0" position="fixed" py="4" transitionDuration=".8s">
            <Flex mx={["auto", "auto", "32", "48"]} mt="32" direction={"column"} justifyContent="space-around" gap={6} >
                <Flex direction="column" position="relative" alignItems="center" justifyContent="center" >
                    <Box display="flex"  flexBasis="baseline" alignItems="baseline">
                        <Heading as="h1" fontSize="6em" fontWeight={`bold`} textAlign="center">T</Heading>
                        <Text fontSize="3em" p="0" fontWeight="medium">siory</Text>
                    </Box>
                    <Box display="flex" clipPath="inset(-1% -1% 50% -1%)" px="24" color={color} background={bg} position="absolute" flexBasis="baseline" alignItems="baseline">
                        <Heading as="h1" fontSize="6em" fontWeight={`bold`} textAlign="center">T</Heading>
                        <Text fontSize="3em" p="0" fontWeight="medium">siory</Text>
                    </Box>
                    </Flex>
                <SideBarContext.Provider value={{ setOpen: setOpen }}>
                    <Flex direction="column" gap="6" mx="auto">
                    <IconLink to="#home" label={"Acceuil"} >
                        <Home size={24} />
                    </IconLink>
                    <IconLink to="#propos" label={"A propos"} >
                        <User size={24} />
                    </IconLink>
                    <IconLink to='#Article' label={"Article"} >
                        <File size={24} />
                    </IconLink>
                    <IconLink to='#Divertissement' label={"Divertissement"} >
                        <Book size={24} />
                    </IconLink>
                    <IconLink to='#Competence' label={"Competence"} >
                        <Server size={24} />
                    </IconLink>
                    <IconLink to='#retrouver' label={"Contact"} >
                        <Mail size={24} />
                    </IconLink>
                    </Flex>
                </SideBarContext.Provider>
                
            </Flex>
            <Flex mt="auto" pr="8" justifyContent="end" w='full' direction={'row'} gap={'6'}>
                    <a href='https://web.facebook.com/RamanantoaninaTsiory/' style={{color:`${bg}`}} target="_blank"><Facebook /></a>
                    <a href='https://www.linkedin.com/in/tsiory-ramanantoanina/' target="_blank"><Linkedin /></a>
                    <a href='https://github.com/TsioryRaman' target="_blank"><GitHub /></a>
                </Flex>
        </Flex >
    )
}