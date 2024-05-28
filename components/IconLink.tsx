import { Box, Flex,Hide,Tooltip } from "@chakra-ui/react";
import Link from "next/link";
import React, { useContext } from "react"
import { SideBarContext } from "./Navbar/Navbar";

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

    const hoverMobile = () => {
        return !isDesktop ? {_before:{content:`''`, position:'absolute', height:'30px',width:'4px', left:'-10px', background:'white'}} : {}
    }

    return (
        <Link href={`#nav-${to}`} >
            <Flex
                id={`nv-${to}`}
                mr="auto"
                cursor='pointer'
                transitionDuration='0.5s'
                onClick={() => setOpen(false)}
                direction="row"
                justify='center'
                alignItems='center'>
                <Box 
                color={"inherit"}  borderBottom={!isDesktop ? "2px solid transparent" : ""} display={"flex"} _hover={{...hoverMobile}} transitionDuration=".4s" justifyContent={"center"} alignItems="center" flexDirection="row" gap={4} fontSize={_fontSize || 18} as='div'>
                {children}
                {!isDesktop && label}
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