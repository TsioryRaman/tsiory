import React, { useEffect, useState } from "react";

import { Badge, Box, Flex, Heading, Hide, keyframes, Show, Text, useColorModeValue } from '@chakra-ui/react'
import Fade from "react-reveal";
import { IconLink, TooltipIconLink } from "./IconLink";
import { AlignRight, Book, ChevronLeft, Facebook, File, GitHub, Home, Linkedin, Mail, Server, User } from 'react-feather';
import Link from "next/link";
import { useRouter } from "next/router";
import { ToggleColorMode } from "./ToggleColorMode";

const appear = keyframes`
    from{
        opacity:0;
    }
    to{
        opacity: 1;
    }
`
export const Navbar: React.FC = () => {

    const router = useRouter()
    const bg = useColorModeValue('blue.300', 'white')
    const navbarBg = useColorModeValue("rgba(66,153,255,.3)","rgba(26,54,93,.2)")
    const menuColor = useColorModeValue("#63b3ed", "white")
    const [open, setOpen] = useState(false)

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <Flex zIndex={"999999"} bg={scrollPosition !== 0 ? navbarBg:""} position="fixed" justifyContent={"space-between"} alignItems="center" w="100%" backdropFilter={scrollPosition !== 0 ? `blur(18px)` : "0"} px={["2", "8", "24", "24"]} py={2}>
                <Box position={"absolute"} zIndex={-1} width="full" backdropFilter={scrollPosition !== 0 ? `blur(18px)` : "0"} top="0" bottom="0" left="0" right="0"></Box>
                <Flex  alignItems="center"
                    role="group" gap="2" >

                    <Box display="flex" justifyContent="center" position="relative" alignItems="center" color="white" overflow="hidden" px="4" py="1.5"
                        borderColor={bg}
                        borderWidth="4px"
                        cursor="default"
                        borderRadius="4px">
                        <Heading fontSize={["1.5em", "1.5em", "2em", "2.5em"]} textShadow={`1px 1px 8px ${menuColor}`} color="white" fontFamily="Sans-serif">T</Heading>
                    </Box>
                    <Text p="0" opacity="0" transform="translateX(-50%)" color="white" fontSize="2em" fontWeight={"medium"} cursor="default" _groupHover={{ opacity: 1, marginLeft: 0, animation: `${appear}`, transform: "translateX(0)" }} transitionDuration={".4s"} >siory</Text>
                </Flex>
                <Flex direction={"row"}>

                    {router.pathname !== "/" && <Box mt="3" mr="3" cursor="pointer"><Link href="/"><ChevronLeft /></Link></Box>}
                    <Hide below="md">
                        <NavigationDesktop />
                    </Hide>
                    <ToggleColorMode />
                    <Show below="md">
                        <Box onClick={() => setOpen(s => !s)} p="3" borderRadius={2} cursor="pointer">
                            <Box transitionDuration={".3s"} transform={!open ? 'rotate(0deg)' : 'rotate(-180deg)'}>
                                <AlignRight color={menuColor} />
                            </Box>
                        </Box>
                    </Show>

                </Flex>
            </Flex>
            <Hide above="md">
                {open && <NavigationMobile open={open} setOpen={setOpen} />}
            </Hide>
        </>
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

const NavigationMobile: React.FC<NavigationLinkProps> = ({ setOpen }) => {


    const bg = useColorModeValue('blue.500', 'white')
    const color = useColorModeValue('white', 'blue.900')

    return (
        <Flex direction="column" color={bg} transitionTimingFunction={"ease-out"} zIndex="2" backdropFilter="blur(16px)" minH="100vh" width={["100%", "100%", "50%", "50%"]} top="0" bottom="0" position="fixed" py="4" transitionDuration=".8s">
            <Flex mx={["auto", "auto", "32", "48"]} mt="32" direction={"column"} justifyContent="space-around" gap={6} >
                <Flex direction="column" position="relative" alignItems="center" justifyContent="center" >
                    <Box display="flex" flexBasis="baseline" alignItems="baseline">
                        <Heading as="h1" fontSize="6em" fontWeight={`bold`} textAlign="center">T</Heading>
                        <Text fontSize="3em" p="0" fontWeight="medium">siory</Text>
                    </Box>
                    <Box display="flex" clipPath="inset(-1% -1% 50% -1%)" px="24" color={color} background={bg} position="absolute" flexBasis="baseline" alignItems="baseline">
                        <Heading as="h1" fontSize="6em" fontWeight={`bold`} textAlign="center">T</Heading>
                        <Text fontSize="3em" p="0" fontWeight="medium">siory</Text>
                    </Box>
                </Flex>
                <SideBarContext.Provider value={{ setOpen: setOpen }}>
                    <Fade distance="20px" bottom duration={800}>
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
                    </Fade>
                </SideBarContext.Provider>
            </Flex>
            <Flex mt="auto" pr="8" justifyContent="end" w='full' direction={'row'} gap={'2'}>
                <a href='https://web.facebook.com/RamanantoaninaTsiory/' style={{ color: `${bg}` }} target="_blank">
                    <Badge colorScheme={"facebook"} display="flex" gap="2" alignItems={"center"}><span>Facebook</span><Facebook size="12px" /></Badge></a>
                <a href='https://www.linkedin.com/in/tsiory-ramanantoanina/' target="_blank">
                    <Badge gap="2" colorScheme={"linkedin"} display="flex" alignItems={"center"}>
                        <span>Linkedin</span>
                        <Linkedin size="12px" />
                    </Badge>
                </a>
                <a href='https://github.com/TsioryRaman' target="_blank"><GitHub /></a>
            </Flex>
        </Flex >
    )
}

const NavigationDesktop = () => {
    return (
        <Flex mr="6">
            <Flex direction="row" gap="10">
                <TooltipIconLink to="#home" _fontSize="16" label={"Acceuil"} _colorBar >
                    <Home size={18}/>
                </TooltipIconLink>
                <TooltipIconLink to="#propos" label="A propos" _colorBar>
                    <User size={18}/>
                </TooltipIconLink>
                <TooltipIconLink to='#Article' label="Article" _colorBar _fontSize="16" >
                    <File size={18}/>
                </TooltipIconLink>
                <TooltipIconLink to='#Divertissement' label="Divertissement" _colorBar _fontSize="16" >
                    <Book size={18}/>
                </TooltipIconLink>
                <TooltipIconLink to='#Competence' label="Competence" _colorBar _fontSize="16" >
                    <Server size={18}/>
                </TooltipIconLink>
                <TooltipIconLink to='#retrouver' label="Contact" _colorBar _fontSize="16" >
                    <Mail size={18}/>
                </TooltipIconLink>
            </Flex>
        </Flex>
    )
}