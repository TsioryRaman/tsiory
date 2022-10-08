import { Flex, Box, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { Moon, Sun } from "react-feather";
export const ToggleColorMode: React.FC = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    const color = useColorModeValue("#2a4365","yellow")
    return (
        <Flex position='relative'>
            <Box cursor="pointer" p="3" onClick={() => toggleColorMode()} _hover={{borderColor:`${color}`}} transitionDuration="0.2s" borderWidth={`1.5px`} borderRadius="3">
                {colorMode === "dark" ? <Sun color="yellow"/> : <Moon fill="#2a4365" color="#2a4365"/>}
            </Box>
        </Flex>
    );
}