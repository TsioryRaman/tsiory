import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import React, { useContext } from "react"
import { SideBarContext } from "./Navbar";

type IconLinkProps = {
    label: String,
    to: string,
    href?: string
}

export const IconLink: React.FC<IconLinkProps> = ({ children, to, label }) => {

    const { setOpen } = useContext(SideBarContext);

    const color = useColorModeValue('blue.500','white')

    return (
        <Link href={to}>
            <Flex
                mr="auto"
                color={color}
                cursor='pointer'
                transitionDuration='0.5s'
                onClick={() => setOpen(false)}
                direction="row"
                justify='center'
                alignItems='center'>
                <Box borderBottom="2px solid transparent" display={"flex"} _hover={{ borderColor: `${color}`}} transitionDuration=".4s" justifyContent={"center"} alignItems="center" flexDirection="row" gap={4} fontSize={18} as='div'>
                    {children} {label}
                </Box>
            </Flex >
        </Link>

    );
}