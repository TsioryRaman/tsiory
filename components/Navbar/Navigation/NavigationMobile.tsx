import { Flex, Text } from "@chakra-ui/react";
import { IconLink } from "../IconLink";

type NavigationLinkProps = {
  open: Boolean;
  setOpen: Function;
};

const links = [
  { to: "propos", label: "À propos", index: "01" },
  { to: "Projets", label: "Projets", index: "02" },
  { to: "certifications", label: "Certifications", index: "03" },
  { to: "Competences", label: "Compétences", index: "04" },
  { to: "retrouver", label: "Contact", index: "05" },
];

const NavigationMobile: React.FC<NavigationLinkProps> = ({ setOpen }) => {
  return (
    <Flex
      direction="column"
      bg="page"
      zIndex={9}
      minH="100vh"
      width="100%"
      top="0"
      left="0"
      bottom="0"
      position="fixed"
      px={["6", "8"]}
      pt="32"
      pb="10"
    >
      <Flex direction="column" gap="1">
        {links.map((link) => (
          <IconLink.IconLink key={link.to} {...link} />
        ))}
      </Flex>
      <Flex mt="auto" gap="6" alignItems="baseline" flexWrap="wrap">
        <a
          href="https://github.com/TsioryRaman"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
        >
          <Text fontFamily="mono" fontSize="11px" color="muted">
            github
          </Text>
        </a>
        <a
          href="https://www.linkedin.com/in/tsiory-ramanantoanina/"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
        >
          <Text fontFamily="mono" fontSize="11px" color="muted">
            linkedin
          </Text>
        </a>
        <a
          href="mailto:rtsiory4@gmail.com"
          onClick={() => setOpen(false)}
          style={{ textDecoration: "none" }}
        >
          <Text fontFamily="mono" fontSize="11px" color="muted">
            rtsiory4@gmail.com
          </Text>
        </a>
      </Flex>
    </Flex>
  );
};

export default NavigationMobile;
