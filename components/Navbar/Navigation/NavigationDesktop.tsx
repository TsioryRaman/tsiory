import { Flex, Box } from "@chakra-ui/react";
import { IconLink } from "../IconLink";
import { Book, File, Home, Mail, Server, User } from "react-feather";

const NavigationDesktop = () => {
  return (
    <Flex mr="6">
      <Box
        position="absolute"
        id="bar_active"
        height="2px"
        width={18}
        bg="white"
        transitionDuration=".8s"
        bottom="0"
        left="0"
      ></Box>
      <Flex direction="row" gap="10">
        <IconLink.TooltipIconLink
          to="home"
          _fontSize="16"
          label={"Acceuil"}
          _colorBar
        >
          <Home size={18} />
        </IconLink.TooltipIconLink>
        <IconLink.TooltipIconLink to="propos" label="A propos" _colorBar>
          <User size={18} />
        </IconLink.TooltipIconLink>
        <IconLink.TooltipIconLink
          to="Article"
          label="Article"
          _colorBar
          _fontSize="16"
        >
          <File size={18} />
        </IconLink.TooltipIconLink>
        <IconLink.TooltipIconLink
          to="Divertissement"
          label="Divertissement"
          _colorBar
          _fontSize="16"
        >
          <Book size={18} />
        </IconLink.TooltipIconLink>
        <IconLink.TooltipIconLink
          to="Competence"
          label="Competence"
          _colorBar
          _fontSize="16"
        >
          <Server size={18} />
        </IconLink.TooltipIconLink>
        <IconLink.TooltipIconLink
          to="retrouver"
          label="Contact"
          _colorBar
          _fontSize="16"
        >
          <Mail size={18} />
        </IconLink.TooltipIconLink>
      </Flex>
    </Flex>
  );
};

export default NavigationDesktop;
