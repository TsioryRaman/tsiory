import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Flex,
  Hide,
  Text,
} from "@chakra-ui/react";
import { X, Menu, ChevronLeft } from "react-feather";
import Link from "next/link";
import { useRouter } from "next/router";
import ButtonToggleColorMode from "./ButtonToggleColorMode";
import Cv from "../CV";
import { useToggle } from "../../hooks";
import { NavigationDesktop, NavigationMobile } from "./Navigation";

export const Navbar: React.FC = () => {
  const router = useRouter();
  const { state: open, toggle: toggleMenu } = useToggle(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.pageYOffset > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflowY = open ? "hidden" : "auto";
  }, [open]);

  const showSurface = scrolled || open;

  return (
    <>
      <Flex
        zIndex={10}
        position="fixed"
        w="100%"
        top="0"
        left="0"
        py={3}
        bg={showSurface ? "page" : "transparent"}
        borderBottomWidth="1px"
        borderColor={showSurface ? "rule" : "transparent"}
        transitionProperty="background-color, border-color"
        transitionDuration="200ms"
      >
        <Container my="auto" maxW={["100%", "md", "2xl", "6xl"]}>
          <Flex justifyContent="space-between" alignItems="center">
            <Link href="/" style={{ textDecoration: "none" }}>
              <Flex alignItems="baseline" gap="3" cursor="pointer">
                <Text
                  fontFamily="heading"
                  fontSize="1.6em"
                  lineHeight="1"
                  color="ink"
                >
                  Tsiory
                </Text>
                <Text
                  display={["none", "none", "block", "block"]}
                  fontFamily="mono"
                  fontSize="10px"
                  letterSpacing="0.18em"
                  textTransform="uppercase"
                  color="muted"
                >
                  Ramanantoanina
                </Text>
              </Flex>
            </Link>
            <Flex alignItems="center" gap={["2", "3", "4", "6"]}>
              {router.pathname !== "/" && (
                <Box cursor="pointer" color="muted">
                  <Link href="/" style={{ textDecoration: "none" }}>
                    <ChevronLeft size={18} />
                  </Link>
                </Box>
              )}
              <Hide below="md">
                {router.pathname === "/" && <NavigationDesktop />}
              </Hide>
              <ButtonToggleColorMode />
              <Cv />
              <Hide above="md">
                <Box
                  as="button"
                  aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
                  aria-expanded={open}
                  onClick={toggleMenu}
                  p="2"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  cursor="pointer"
                  color="ink"
                >
                  {!open ? <Menu size={22} /> : <X size={22} />}
                </Box>
              </Hide>
            </Flex>
          </Flex>
        </Container>
      </Flex>
      <Hide above="md">
        {open && <NavigationMobile open={open} setOpen={toggleMenu} />}
      </Hide>
    </>
  );
};

type SideBarContexte = {
  setOpen: Function;
};

export const SideBarContext = React.createContext<SideBarContexte>({
  setOpen: () => {},
});

export default Navbar;
