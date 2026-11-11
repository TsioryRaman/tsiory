import { Flex, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { SideBarContext } from "../Navbar";

type IconLinkProps = {
  label: string;
  to: string;
  index?: string;
  isDesktop?: boolean;
};

export const IconLink: React.FC<IconLinkProps> = ({
  to,
  label,
  index,
  isDesktop,
}) => {
  const { setOpen } = useContext(SideBarContext);

  return (
    <a
      href={`#nav-${to}`}
      id={`nv-${to}`}
      onClick={() => setOpen(false)}
      style={{ textDecoration: "none" }}
    >
      <Flex
        direction="row"
        align="baseline"
        gap="2"
        color="muted"
        transitionProperty="color"
        transitionDuration="150ms"
        _hover={{ color: "ink" }}
      >
        {index && (
          <Text
            fontFamily="mono"
            fontSize="10px"
            lineHeight="1"
            color="accent"
          >
            {index}
          </Text>
        )}
        <Text
          fontFamily={isDesktop ? "mono" : "heading"}
          fontSize={isDesktop ? "11px" : "2.4em"}
          lineHeight={isDesktop ? "1.4" : "1.2"}
          textTransform={isDesktop ? "uppercase" : "none"}
          letterSpacing={isDesktop ? "0.12em" : "normal"}
        >
          {label}
        </Text>
      </Flex>
    </a>
  );
};

export const TooltipIconLink = IconLink;
