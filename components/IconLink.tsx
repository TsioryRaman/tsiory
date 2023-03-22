import { Box, Flex,Hide,Tooltip } from "@chakra-ui/react";
import Link from "next/link";
import React, { useContext } from "react"
import { SideBarContext } from "./Navbar";

type IconLinkProps = {
    label?: String,
    to: string,
    href?: string,
    _colorBar?:boolean,
    _fontSize?:string,
    isDesktop?:boolean
}

export const IconLink: React.FC<IconLinkProps> = ({ children, to, label,_fontSize,isDesktop }) => {

    const { setOpen } = useContext(SideBarContext);

    return (
        <Link href={`#nav-${to}`}>
            <Flex
                mr="auto"
                cursor='pointer'
                transitionDuration='0.5s'
                onClick={() => setOpen(false)}
                direction="row"
                justify='center'
                alignItems='center'>
                <Box 
                color={"inherit"} _selected={{borderColor: `white`,boxShadow: '0 1px 1px gray'}} borderBottom={!isDesktop ? "2px solid transparent" : ""} display={"flex"} _hover={{ borderColor: `${!isDesktop ? "white" : ""}`,boxShadow: '0 1px 1px -1px gray'}} transitionDuration=".4s" justifyContent={"center"} alignItems="center" flexDirection="row" gap={4} fontSize={_fontSize || 18} as='div'>
                {children} <Hide above="md">
                {label}
                </Hide>
                </Box>
            </Flex >
        </Link>

    );
}

export const TooltipIconLink: React.FC<IconLinkProps> = (props) => {
    return (
        <Tooltip zIndex="99999999999" hasArrow label={props.label}>
            <Flex color="white" id={props.to} borderBottom="2px solid transparent" transitionDuration=".4s" justify="center">
                <IconLink isDesktop={true} {...props}/>
            </Flex>
        </Tooltip>
    )
}