import React, { useState } from "react";

import { Box, Flex } from '@chakra-ui/react'
import { IconLink } from "./IconLink";
import { AlignRight, ArrowLeft, Book, File, Home, Mail, Server, User } from 'react-feather';
import Link from "next/link";
import { useRouter } from "next/router";
import { ToggleColorMode } from "./ToggleColorMode";
export const Navbar: React.FC = () => {

    const router = useRouter()
    const [open, setOpen] = useState(false)
    return (
        <React.Fragment>
            <Flex zIndex={"5"} justifyContent={"center"} flexDirection={"column"} position={"fixed"} top="4" right={"15"}>
                {router.pathname !== "/" && <Box mt="3" cursor="pointer"><Link href="/"><ArrowLeft /></Link></Box>}
                <Flex direction={"row"}>

                    <ToggleColorMode />
                    <Box onClick={() => setOpen(s => !s)} p="3" borderRadius={2} cursor="pointer">
                        <Box transitionDuration={".5s"} style={{ transform: !open ? 'rotate(0deg)' : 'rotate(-90deg)' }}>
                            <AlignRight />
                        </Box>
                    </Box>
                </Flex>
                {/*<Box mt='auto'>
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
    </Box>*/}
                {/*<ToggleColorMode />*/}

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
            <Flex mx={["48", "32", "32", "48"]} mt="56" direction={"column"} justifyContent="space-around" gap={6} >
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