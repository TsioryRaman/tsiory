import { Flex, Box, useColorMode } from "@chakra-ui/react";
import { Moon, Sun } from "react-feather";
export const ToggleColorMode = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Flex transitionDuration="0.2s" cursor="pointer"  position='relative' p="2" h="10" w="10" display="flex" onClick={() => toggleColorMode()} alignItems="center" justifyContent="center" borderRadius="50%" bg={!(colorMode === "dark") ? "white" : "rgba(255,255,255,.6)"}>
            <Box>
                {colorMode === "dark" ? <Sun size="18" color="yellow"/> : <Moon size="18" color="gray"/>}
            </Box>
        </Flex>
    );
}