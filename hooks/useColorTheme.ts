import { useColorModeValue } from "@chakra-ui/react";

export const useColorTheme = () => {
  const color = useColorModeValue("blue.400", "blue.900");

  return color;
};

export default useColorTheme;
