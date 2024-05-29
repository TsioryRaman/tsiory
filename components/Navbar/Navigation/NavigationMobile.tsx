import {
  useColorModeValue,
  Flex,
  Box,
  Heading,
  Text,
  Badge,
} from "@chakra-ui/react";
import { SideBarContext } from "../Navbar";
import Fade from "react-reveal";
import { IconLink } from "../IconLink";
import {
  Book,
  Facebook,
  File,
  GitHub,
  Home,
  Linkedin,
  Mail,
  Server,
  User,
} from "react-feather";

type NavigationLinkProps = {
  open: Boolean;
  setOpen: Function;
};

const NavigationMobile: React.FC<NavigationLinkProps> = ({ setOpen }) => {
  const bg = useColorModeValue("blue.500", "white");
  const color = useColorModeValue("white", "blue.900");

  return (
    <Flex
      direction="column"
      color={bg}
      transitionTimingFunction={"ease-out"}
      zIndex="2"
      backdropFilter="blur(16px)"
      minH="100vh"
      width={["100%", "100%", "50%", "50%"]}
      top="0"
      bottom="0"
      position="fixed"
      transitionDuration=".8s"
    >
      <Flex
        mx={["auto", "auto", "32", "48"]}
        mt="24"
        direction={"column"}
        gap={6}
        justifyContent="space-between"
      >
        <Flex
          direction="column"
          id="username_animation"
          position="relative"
          alignItems="center"
          justifyContent="center"
        >
          <Box display="flex" flexBasis="baseline" alignItems="baseline">
            <Heading
              as="h1"
              fontSize="6em"
              fontWeight={`bold`}
              textAlign="center"
            >
              T
            </Heading>
            <Text fontSize="3em" p="0" fontWeight="medium">
              siory
            </Text>
          </Box>
          <Box
            display="flex"
            clipPath="inset(-1% -1% 50% -1%)"
            px="24"
            color={color}
            background={bg}
            position="absolute"
            flexBasis="baseline"
            alignItems="baseline"
          >
            <Heading
              as="h1"
              fontSize="6em"
              fontWeight={`bold`}
              textAlign="center"
            >
              T
            </Heading>
            <Text fontSize="3em" p="0" fontWeight="medium">
              siory
            </Text>
          </Box>
        </Flex>
        <SideBarContext.Provider value={{ setOpen: setOpen }}>
          <Fade distance="20px" top duration={400}>
            <Flex direction="column" position="relative" gap="6" mx="auto">
              <Box
                position="absolute"
                id="bar_active_mobile"
                height="30px"
                width="4px"
                bg="white"
                transitionDuration=".8s"
                left="-10px"
              ></Box>
              <IconLink.IconLink to="home" label={"Acceuil"}>
                <Home size={24} />
              </IconLink.IconLink>
              <IconLink.IconLink to="propos" label={"A propos"}>
                <User size={24} />
              </IconLink.IconLink>
              <IconLink.IconLink to="Article" label={"Article"}>
                <File size={24} />
              </IconLink.IconLink>
              <IconLink.IconLink to="Divertissement" label={"Divertissement"}>
                <Book size={24} />
              </IconLink.IconLink>
              <IconLink.IconLink to="Competence" label={"Competence"}>
                <Server size={24} />
              </IconLink.IconLink>
              <IconLink.IconLink to="retrouver" label={"Contact"}>
                <Mail size={24} />
              </IconLink.IconLink>
            </Flex>
          </Fade>
        </SideBarContext.Provider>
      </Flex>
      <Flex
        mt="auto"
        pr="8"
        justifyContent="end"
        w="full"
        direction={"row"}
        gap={"2"}
      >
        <a
          href="https://web.facebook.com/RamanantoaninaTsiory/"
          style={{ color: `${bg}` }}
          target="_blank"
        >
          <Badge
            colorScheme={"facebook"}
            display="flex"
            gap="2"
            alignItems={"center"}
          >
            <span>Facebook</span>
            <Facebook size="12px" />
          </Badge>
        </a>
        <a
          href="https://www.linkedin.com/in/tsiory-ramanantoanina/"
          target="_blank"
        >
          <Badge
            gap="2"
            colorScheme={"linkedin"}
            display="flex"
            alignItems={"center"}
          >
            <span>Linkedin</span>
            <Linkedin size="12px" />
          </Badge>
        </a>
        <a href="https://github.com/TsioryRaman" target="_blank">
          <GitHub />
        </a>
      </Flex>
    </Flex>
  );
};

export default NavigationMobile;
