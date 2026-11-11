import { Flex } from "@chakra-ui/react";
import { IconLink } from "../IconLink";

const links = [
  { to: "propos", label: "À propos", index: "01" },
  { to: "Projets", label: "Projets", index: "02" },
  { to: "Competences", label: "Compétences", index: "03" },
  { to: "retrouver", label: "Contact", index: "04" },
];

const NavigationDesktop = () => {
  return (
    <Flex mr="2" direction="row" gap={["4", "5", "6", "8"]}>
      {links.map((link) => (
        <IconLink.TooltipIconLink key={link.to} isDesktop {...link} />
      ))}
    </Flex>
  );
};

export default NavigationDesktop;
