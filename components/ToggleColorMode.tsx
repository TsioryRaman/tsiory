import { Flex, Box, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { Moon, Sun } from "react-feather";
export const ToggleColorMode = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    const color = useColorModeValue("#63b3ed","yellow")
    return (
        <Flex position='relative'>
            <Box cursor="pointer" p="3" onClick={() => toggleColorMode()} _hover={{borderColor:`${color}`}} transitionDuration="0.2s" borderWidth={`1.5px`} borderRadius="3">
                {colorMode === "dark" ? <Sun color="yellow"/> : <Moon fill="#63b3ed" color="#63b3ed"/>}
            </Box>
        </Flex>
    );
}