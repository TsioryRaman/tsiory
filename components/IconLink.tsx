import { Box, Flex } from "@chakra-ui/react";
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

export const IconLink: React.FC<IconLinkProps> = ({ children, to, label,_fontSize }) => {

    const { setOpen } = useContext(SideBarContext);

    return (
        <Link href={to}>
            <Flex
                mr="auto"
                color={"white"}
                textShadow="1px 1px 1px gray"
                cursor='pointer'
                transitionDuration='0.5s'
                onClick={() => setOpen(false)}
                direction="row"
                justify='center'
                alignItems='center'>
                <Box _selected={{borderColor: `white`,boxShadow: '0 1px 1px gray'}} borderBottom="2px solid transparent" display={"flex"} _hover={{ borderColor: `white`,boxShadow: '0 1px 1px -1px gray'}} transitionDuration=".4s" justifyContent={"center"} alignItems="center" flexDirection="row" gap={4} fontSize={_fontSize || 18} as='div'>
                    {children} {label}
                </Box>
            </Flex >
        </Link>

    );
}