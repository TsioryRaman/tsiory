import { Flex, useColorMode } from "@chakra-ui/react";
import { Moon, Sun } from "react-feather";
const ButtonToggleColorMode = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const checkBg = !(colorMode === "dark") ? "white" : "rgba(255,255,255,.6)"
    
    return (
        <Flex transitionDuration="0.2s" cursor="pointer" p="2" h="10" w="10" display="flex" onClick={() => toggleColorMode()} alignItems="center" justifyContent="center" borderRadius="50%" bg={checkBg}>
                {colorMode === "dark" ? <Sun size="18" color="yellow"/> : <Moon size="18" color="gray"/>}
        </Flex>
    );
}

export default ButtonToggleColorMode;