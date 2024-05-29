import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  Hide,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { X, Menu, ChevronLeft } from "react-feather";
import Link from "next/link";
import { useRouter } from "next/router";
import ButtonToggleColorMode from "./ButtonToggleColorMode";
import { Intersect } from "../../common/IntersectionObserver";
import Cv from "../CV";
import { useToggle } from "../../hooks";
import { NavigationDesktop, NavigationMobile } from "./Navigation";
import { translateBar, translateBarMobile } from "../../utils/dom.functions";

export const Navbar: React.FC = () => {
  const router = useRouter();
  const navbarBg = useColorModeValue(
    "rgba(66,153,255,.3)",
    "rgba(26,54,93,.2)"
  );
  const menuColor = useColorModeValue("#63b3ed", "white");
  const { state: open, toggle: toggleMenu } = useToggle(false);
  const nameRef = useRef<HTMLParagraphElement>(null);

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    if (
      nameRef.current &&
      window.pageYOffset > window.innerHeight &&
      window.pageYOffset < window.innerHeight + 50
    ) {
      nameRef.current.style.transform = `translateY(-${
        window.pageYOffset - window.innerHeight
      }px)`;
      nameRef.current.style.opacity = (
        window.pageYOffset / window.innerHeight -
        1.1
      ).toString();
    }
    if (window.pageYOffset <= window.innerHeight && nameRef.current) {
      nameRef.current.style.transform = `translateY(0)`;
      nameRef.current.style.opacity = (1).toString();
    }
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    Intersect('div[id^="nav-"]', (entry: any) => {
      if (entry.isIntersecting) {
        let idNav = entry.target.id.split("-")[1];
        let nav_desktop = document.querySelector(`#${idNav}`);
        translateBar(nav_desktop);

        let nav_mobile = document.querySelector(`#nv-${idNav}`);
        if (nav_mobile) translateBarMobile(nav_mobile);
      }
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [router.pathname, open]);
  useEffect(() => {
    document.body.style.overflowY = open ? "hidden" : "auto";
    let username: any = document.querySelector("#username");
    if (username && open) {
      username.style.opacity = 0;
    } else {
      username.style.opacity = 1;
    }
  }, [open]);

  return (
    <>
      <Flex
        zIndex={10}
        bg={
          (scrollPosition !== 0 && !open) || router.pathname !== "/"
            ? navbarBg
            : ""
        }
        position="fixed"
        w="100%"
        backdropFilter={scrollPosition !== 0 ? `blur(18px)` : "0"}
        py={2}
      >
        <Box
          position="absolute"
          zIndex={-1}
          width="full"
          backdropFilter={scrollPosition !== 0 ? `blur(18px)` : "0"}
          bottom="0"
          left="0"
          right="0"
        ></Box>
        <Container my="auto" maxW={["100%", "md", "2xl", "6xl"]}>
          <Flex justifyContent="space-between" alignItems="center">
            <Flex
              alignItems="center"
              role="group"
              gap="4"
              id="username"
              transitionDuration=".4s"
            >
              <Box
                display="flex"
                justifyContent="center"
                position="relative"
                alignItems="center"
                color="white"
                overflow="hidden"
                px="4"
                py="1.5"
                borderColor={"white"}
                borderStyle="dashed"
                borderWidth="4px"
                cursor="default"
                borderRadius="4px"
              >
                <Heading
                  fontSize={["1.5em", "1.5em", "2em", "2em"]}
                  fontWeight="bold"
                  textShadow={`1px 1px 8px ${menuColor}`}
                  color="white"
                  fontFamily="Seven Segment"
                >
                  T
                </Heading>
              </Box>
              <Text
                color="#FFF"
                ref={nameRef}
                p="0"
                alignSelf="flex-end"
                letterSpacing={4}
                className="seven"
                fontSize={["1.5em", "1.5em", "1.75em", "2em"]}
                _groupHover={{ transform: "translateY(0%)", opacity: 1 }}
                fontWeight={"bold"}
                cursor="default"
                transitionDuration={".4s"}
              >
                s.i.o.r.y
              </Text>
            </Flex>
            <Flex
              alignItems="center"
              rowGap={3}
              justifyContent="center"
              position="relative"
              direction={"row"}
            >
              {router.pathname !== "/" && (
                <Box mr="3" cursor="pointer">
                  <Link href="/">
                    <ChevronLeft color="white" />
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
                  onClick={toggleMenu}
                  p="3"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  borderRadius={2}
                  cursor="pointer"
                >
                  <Box
                    transitionDuration={".3s"}
                    transform={!open ? "rotate(0deg)" : "rotate(-180deg)"}
                  >
                    {!open ? (
                      <Menu size={24} color={menuColor} />
                    ) : (
                      <X size="16" color={menuColor} />
                    )}
                  </Box>
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
