import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import React, { useContext } from "react"
import { SideBarContext } from "./Navbar";

type IconLinkProps = {
    label: String,
    to: string,
    href?: string,
    _colorBar?:boolean,
    _fontSize?:string
}

export const IconLink: React.FC<IconLinkProps> = ({ children, to, label,_colorBar=false,_fontSize }) => {

    const { setOpen } = useContext(SideBarContext);

    const color = useColorModeValue('blue.500','white')

    return (
        <Link href={to}>
            <Flex
                mr="auto"
                color={_colorBar && "white" || color}
                cursor='pointer'
                transitionDuration='0.5s'
                onClick={() => setOpen(false)}
                direction="row"
                justify='center'
                alignItems='center'>
                <Box _selected={{borderColor: `${color}`}} borderBottom="2px solid transparent" display={"flex"} _hover={{ borderColor: `${color}`}} transitionDuration=".4s" justifyContent={"center"} alignItems="center" flexDirection="row" gap={4} fontSize={_fontSize || 18} as='div'>
                    {children} {label}
                </Box>
            </Flex >
        </Link>

    );
}