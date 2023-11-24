import React, { useEffect, useRef, useState } from "react";

import { Badge, Box, Container, Flex, Heading, Hide, Text, useColorModeValue } from '@chakra-ui/react'
import Fade from "react-reveal";
import { IconLink, TooltipIconLink } from "./IconLink";
import { X,Menu, Book, ChevronLeft, Facebook, File, GitHub, Home, Linkedin, Mail, Server, User } from 'react-feather';
import Link from "next/link";
import { useRouter } from "next/router";
import { ToggleColorMode } from "./ToggleColorMode";
import { Intersect } from "./IntersectionObserver";
import { PersonalFile } from "./personal";

export const Navbar: React.FC = () => {

    const router = useRouter()
    const navbarBg = useColorModeValue("rgba(66,153,255,.3)","rgba(26,54,93,.2)")
    const menuColor = useColorModeValue("#63b3ed", "white")
    const [open, setOpen] = useState(false)
    const nameRef = useRef<HTMLParagraphElement>(null)

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        if( nameRef.current && (window.pageYOffset > window.innerHeight) && (window.pageYOffset < window.innerHeight + 50)){
            nameRef.current.style.transform = `translateY(-${window.pageYOffset - window.innerHeight}px)`
            console.log(window.pageYOffset / window.innerHeight)
            nameRef.current.style.opacity = ((window.pageYOffset / window.innerHeight) - 1.1).toString()
        }
        if(window.pageYOffset <= window.innerHeight && nameRef.current)
        {
            nameRef.current.style.transform = `translateY(0)`
            nameRef.current.style.opacity = (1).toString()
        }
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        // Intersection
        Intersect('div[id^="nav-"]',(entry:any)=> {
            if (entry.isIntersecting) {
                let idNav = entry.target.id.split("-")[1]
                let nav_desktop = document.querySelector(`#${idNav}`)
                translateBar(nav_desktop)

                let nav_mobile = document.querySelector(`#nv-${idNav}`)
                if(nav_mobile)  translateBarMobile(nav_mobile)
              }
        })

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [router.pathname,open]);
    useEffect(()=> {
            document.body.style.overflowY = open ? "hidden" : "auto";
            let username:any = document.querySelector("#username");
            if(username && open){
                username.style.opacity = 0
            }else {
                username.style.opacity = 1
            }
    },[open])

    const openMenu = () => {
        setOpen(s => !s)
    }

    return (
        <>
            <Flex zIndex={10} bg={(scrollPosition !== 0) && !open || router.pathname !== "/" ? navbarBg:""} position="fixed"  w="100%" backdropFilter={scrollPosition !== 0 ? `blur(18px)` : "0"} py={2}>
                <Box position="absolute" zIndex={-1} width="full" backdropFilter={scrollPosition !== 0 ? `blur(18px)` : "0"} bottom="0" left="0" right="0"></Box>
                <Container  my="auto" maxW={["100%", "md", "2xl", "6xl"]}>
                    <Flex justifyContent="space-between" alignItems="center">
                    <Flex  alignItems="center"
                    role="group" gap="4" 
                    id="username"
                    transitionDuration=".4s">

                    <Box display="flex" justifyContent="center" position="relative" alignItems="center" color="white" overflow="hidden" px="4" py="1.5"
                        borderColor={"white"}
                        borderStyle="dashed"
                        borderWidth="4px"
                        cursor="default"
                        borderRadius="4px">
                        <Heading fontSize={["1.5em", "1.5em", "2em", "2em"]}  fontWeight="bold" textShadow={`1px 1px 8px ${menuColor}`} color="white" fontFamily="Seven Segment">T</Heading>
                    </Box>
                    <Text color="#FFF" ref={nameRef} p="0" alignSelf="flex-end" letterSpacing={4} className="seven" fontSize={["1.5em", "1.5em", "1.75em", "2em"]} _groupHover={{transform:"translateY(0%)",opacity:1}} fontWeight={"bold"} cursor="default" transitionDuration={".4s"} >s.i.o.r.y</Text>
                </Flex>
                <Flex alignItems="center" rowGap={3} justifyContent="center" position="relative" direction={"row"}>

                    {router.pathname !== "/" && <Box mr="3" cursor="pointer"><Link href="/"><ChevronLeft color="white"/></Link></Box>}
                    <Hide below="md">
                         {router.pathname === "/" && <NavigationDesktop />}
                    </Hide>
                    <ToggleColorMode />
                    <PersonalFile />

                    <Hide above="md">
                        <Box onClick={openMenu} p="3" display="flex" justifyContent="center" alignItems="center" borderRadius={2} cursor="pointer">
                            <Box transitionDuration={".3s"}  transform={!open ? 'rotate(0deg)' : 'rotate(-180deg)'}>
                                {!open ? <Menu size={24} color={menuColor} /> : <X size="16" color={menuColor}/>}
                            </Box>
                        </Box>
                    </Hide>

                </Flex>
                    </Flex>
                </Container>
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
        <Flex direction="column" color={bg} transitionTimingFunction={"ease-out"} zIndex="2" backdropFilter="blur(16px)" minH="100vh" width={["100%", "100%", "50%", "50%"]} top="0" bottom="0" position="fixed" transitionDuration=".8s">
            <Flex mx={["auto", "auto", "32", "48"]} mt="24" direction={"column"} gap={6} justifyContent="space-between" >
                <Flex direction="column" id="username_animation" position="relative" alignItems="center" justifyContent="center" >
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
                    <Fade distance="20px" top duration={400}>
                        <Flex direction="column" position="relative" gap="6" mx="auto">

                            <Box position="absolute" id="bar_active_mobile" height="30px" width="4px" bg="white" transitionDuration=".8s" left="-10px"></Box>
                            <IconLink to="home" label={"Acceuil"} >
                                <Home size={24} />
                            </IconLink>
                            <IconLink to="propos" label={"A propos"} >
                                <User size={24} />
                            </IconLink>
                            <IconLink to='Article' label={"Article"} >
                                <File size={24} />
                            </IconLink>
                            <IconLink to='Divertissement' label={"Divertissement"} >
                                <Book size={24} />
                            </IconLink>
                            <IconLink to='Competence' label={"Competence"} >
                                <Server size={24} />
                            </IconLink>
                            <IconLink to='retrouver' label={"Contact"} >
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
            <Box position="absolute" id="bar_active" height="2px" width={18} bg="white" transitionDuration=".8s" bottom="0" left="0"></Box>
            <Flex direction="row" gap="10">
                <TooltipIconLink to="home" _fontSize="16" label={"Acceuil"} _colorBar >
                    <Home size={18}/>
                </TooltipIconLink>
                <TooltipIconLink to="propos" label="A propos" _colorBar>
                    <User size={18}/>
                </TooltipIconLink>
                <TooltipIconLink to='Article' label="Article" _colorBar _fontSize="16" >
                    <File size={18}/>
                </TooltipIconLink>
                <TooltipIconLink to='Divertissement' label="Divertissement" _colorBar _fontSize="16" >
                    <Book size={18}/>
                </TooltipIconLink>
                <TooltipIconLink to='Competence' label="Competence" _colorBar _fontSize="16" >
                    <Server size={18}/>
                </TooltipIconLink>
                <TooltipIconLink to='retrouver' label="Contact" _colorBar _fontSize="16" >
                    <Mail size={18}/>
                </TooltipIconLink>
            </Flex>
        </Flex>
    )
}

let translateBar = (e:any) => {
    var active:any = document.querySelector("#bar_active")
    if(e && active){
        active.style.transform = `translateX(${e.offsetLeft}px)`
    }
}
let translateBarMobile = (e:any) => {
    var active:any = document.querySelector("#bar_active_mobile")
    if(e && active){
        active.style.transform = `translateY(${e.offsetTop}px)`
    }
}