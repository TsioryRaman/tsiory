import { Box, Flex } from "@chakra-ui/react";
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

    return (
        <Link href={to}>
            <Flex
                mr="auto"
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