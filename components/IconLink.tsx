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

    const color = useColorModeValue('blue.900','white')

    return (
        <Link href={to}>
            <Flex
                mr="auto"
                color={color}
                cursor='pointer'
                transitionDuration='0.5s'
                onClick={() => setOpen(false)}
                justify='center'
                alignItems='center'>
                <Box display={"flex"} _before={{ _hover: { borderBottom: "4px solid white" } }} justifyContent={"center"} alignItems="center" flexDirection="row" gap={4} fontSize={18} as='div'>
                    {children} {label}
                </Box>
            </Flex >
        </Link>

    );
}