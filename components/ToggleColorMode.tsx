import { Flex, Box, useColorMode } from "@chakra-ui/react";
import { Moon } from "react-feather";
export const ToggleColorMode: React.FC = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Flex position='relative'>
            <Box cursor="pointer" p="3" onClick={() => toggleColorMode()}>
                <Moon fill={colorMode === "light" ? "#2a4365" : "white"} color={colorMode === "light" ? "#2a4365" : "white"} />
            </Box>
        </Flex>
    );
}