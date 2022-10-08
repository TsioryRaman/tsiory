import { Flex, Box, useColorMode } from "@chakra-ui/react";
import { Moon, Sun } from "react-feather";
export const ToggleColorMode: React.FC = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Flex position='relative'>
            <Box cursor="pointer" p="3" onClick={() => toggleColorMode()}>
                
                
                {colorMode === "dark" ? <Sun color="yellow"/> : <Moon fill="#2a4365" color="#2a4365"/>}
            </Box>
        </Flex>
    );
}