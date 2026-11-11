import { Box, Flex, Spinner, Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React, { useEffect, useRef, useState } from "react";
import { CERTIFICATE_CANVAS_HEIGHT } from "../../Three/Certificate/constants";

const Placeholder: React.FC = () => (
  <Flex
    h={CERTIFICATE_CANVAS_HEIGHT}
    direction="column"
    alignItems="center"
    justifyContent="center"
    gap="3"
  >
    <Spinner size="sm" color="accent" thickness="2px" />
    <Text
      fontFamily="mono"
      fontSize="10px"
      letterSpacing="0.14em"
      textTransform="uppercase"
      color="muted"
    >
      Préparation des certificats…
    </Text>
  </Flex>
);

const ThreeCertificate = dynamic(
  () => import("../../Three/Certificate/ThreeCertificate"),
  { ssr: false, loading: () => <Placeholder /> }
);

export const Certifications: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (mounted) return;

    const element = container.current;
    if (!element) return;

    if (!("IntersectionObserver" in window)) {
      setMounted(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setMounted(true);
          observer.disconnect();
        }
      },
      { rootMargin: "600px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [mounted]);

  return (
    <Box ref={container} minH={CERTIFICATE_CANVAS_HEIGHT}>
      {mounted ? <ThreeCertificate /> : <Placeholder />}
    </Box>
  );
};

export default Certifications;
