import {
  Box,
  Text,
  Heading,
  useColorModeValue,
  Badge,
  Flex,
  Image,
} from "@chakra-ui/react";
import Fade from "react-reveal";
import { PacmanLoader } from "react-spinners";

export interface ProjectCardProps {
  img: string;
  stack: Array<string>;
  title: string;
  description: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  img,
  stack,
  title,
  description,
}: ProjectCardProps) => {
  const bg = useColorModeValue("blue.400", "blue.900");
  const cardBgFooter = useColorModeValue("gray.100", "gray.900");
  const gradient = useColorModeValue("rgba(0, 0, 0,", "rgba(26, 54, 93,");
  const text = useColorModeValue("gray.100", "white");

  return (
    <Fade distance="100px" bottom duration={800}>
      <Box
        shadow="2xl"
        position="relative"
        rounded="2xl"
        role="group"
        transitionDuration="300"
        _hover={{ overflow: "visible" }}
        w={["full", "full", "700px", "700px"]}
        height="400px"
      >
        <Box overflow="hidden" position="relative" h="full" rounded="2xl">
          <Box
            h="full"
            position="absolute"
            height="full"
            width="full"
            top="0"
            left="0"
            transitionDuration="300ms"
            bg={`linear-gradient(to bottom, ${gradient} 0.3), ${gradient} 0.7))`}
            _groupHover={{
              bg: `linear-gradient(to bottom, ${gradient} 0.1), ${gradient} 0.4))`,
            }}
            roundedBottomRight="0"
            w="full"
            zIndex={2}
          ></Box>
          <Image
            zIndex={1}
            _groupHover={{ transform: "scale(1.1)" }}
            alt={img}
            transitionDuration="300ms"
            src={img}
            bgSize="cover"
            fallback={
              <Flex
                w="full"
                alignItems="center"
                justifyContent="center"
                height="full"
              >
                <PacmanLoader />
              </Flex>
            }
          />
        </Box>
        <Box mx="8" zIndex={3} transform="translateY(-50%)" position="relative">
          <Box bottom="0" px="8" py="6" bg={bg} roundedTop="2xl" zIndex={10}>
            <Heading color={text} as="h2" size="lg">
              {title}
            </Heading>
            <Flex wrap="wrap" mt="4" gap="2">
              {stack.map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </Flex>
          </Box>
          <Box
            roundedBottom="2xl"
            px="8"
            bg={cardBgFooter}
            zIndex={10}
            transitionDuration="300"
            transitionDelay="300"
            _groupHover={{ opacity: "1" }}
          >
            <Text>{description}</Text>
          </Box>
        </Box>
      </Box>
    </Fade>
  );
};
