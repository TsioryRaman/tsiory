import { Flex, useColorMode } from "@chakra-ui/react";
import { Moon, Sun } from "react-feather";

const ButtonToggleColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      as="button"
      aria-label={
        colorMode === "dark"
          ? "Passer en mode clair"
          : "Passer en mode sombre"
      }
      onClick={() => toggleColorMode()}
      alignItems="center"
      justifyContent="center"
      p="2"
      color="muted"
      transitionProperty="color"
      transitionDuration="150ms"
      _hover={{ color: "ink" }}
    >
      {colorMode === "dark" ? <Sun size="17" /> : <Moon size="17" />}
    </Flex>
  );
};

export default ButtonToggleColorMode;
