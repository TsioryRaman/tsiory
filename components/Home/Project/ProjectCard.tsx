import {
  Box,
  Text,
  Heading,
  useColorModeValue,
  Badge,
  Flex,
} from "@chakra-ui/react";
import { useEffect } from "react";
import Fade from "react-reveal"


export interface ProjectCardProps {
  img: string;
  stack: Array<string>;
  title: string;
  description: string;
}

export const ProjectCard:React.FC<ProjectCardProps> = ({
  img,
  stack,
  title,
  description,
}: ProjectCardProps) => {
  const bg = useColorModeValue("blue.400", "blue.900");
  const cardBgFooter = useColorModeValue("gray.100","gray.900")
  const gradient = useColorModeValue("rgba(255, 255, 225,", "rgba(26, 54, 93,");
  const text= useColorModeValue("gray.100","white")

  return (
          <Fade distance="100px" bottom duration={800}>

    <Box  shadow="2xl" position="relative" rounded="2xl" role="group" transitionDuration="300" _hover={{overflow:"visible"}} w={["full","full","700px","700px"]} height="400px">
        <Box overflow="hidden" h="full" rounded="2xl" >
            <Box  h="full" 
                bg={`linear-gradient(to bottom, ${gradient} 0.3), ${gradient} 0.7)),url(${img})`} transitionDuration="300ms" 
                _groupHover={{transform:"scale(1.1)"}}
                 roundedBottomRight="0" w="full" bgPosition="center" bgSize="cover" bgRepeat="no-repeat">
        </Box>
        </Box>
      <Box mx="8" transform="translateY(-50%)" position="relative">
        <Box bottom="0"  px="8" py="6" bg={bg} roundedTop="2xl" zIndex={10} >
        <Heading color={text} as="h2" size="lg">
            {title}
        </Heading>
        <Flex wrap="wrap" mt="4" gap="2">
            {stack.map(s => <Badge key={s} >{s}</Badge>)}
        </Flex>
        </Box>
        <Box roundedBottom="2xl" px="8" bg={cardBgFooter} zIndex={10} transitionDuration="300" transitionDelay="300" _groupHover={{opacity:"1"}}>
        <Text>
            {description}
        </Text>
       </Box>
      </Box>
    </Box>
    </Fade>
  );
};
