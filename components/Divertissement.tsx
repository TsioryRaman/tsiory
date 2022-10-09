import { Box, Divider, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react"
import { Film, Monitor, Music } from "react-feather";

type Feature = {
    title: String,
    desc: String,
    img?: string,
}

const Feature: React.FC<Feature> = ({ title, desc, img,children, ...rest }) => {
    return (
        <Box mt={8} height="100%" shadow='md' borderWidth='1px' {...rest}>
            <Flex flexDirection="column" height="100%" p={4}  position="relative">
                <Heading mb="4" display="flex" justifyContent="space-between" color='#53c9c6' mt='4' fontSize='xl'>{title}{children}</Heading>
                <Divider />
                <Text fontWeight={"medium"} mt={4}>{desc}</Text>

                {img && <Box mt="auto" position="relative" marginLeft={["-6","-8","-16","-16"]}>
                
                <Image transform="scaleX(-1)" src={"/img/" + img} cursor="pointer" zIndex="2" alt={img} height={["400px"]} width="100%" _hover={{ transform: "scale(-1.2,1.2)",zIndex:"1000" }} transitionDuration={".8s"} />
            </Box>}
            </Flex>
        </Box>
    )
}

const Divertissement: React.FC = () => {
    return (
        <Flex gap={8} flexDirection={["column", "column", "row", "row"]} >
            <Box width={["100%","100%","50%","50%"]}>
                <Feature
                    title='Bon plan 😂😂'
                    desc='Regarder des films et des dessins animes😎😎'
                    img='spiderman.png'
                ><Film /></Feature>
            </Box>
            <Box width={["100%","100%","50%","50%"]}>
                <Feature
                    title='Ecouter de la musique'
                    desc='Cela nous offre divers facon de trouver des coequipiers a qui on peut former une equipe comme dans la vie professionelle'
                    img='musique.png'
                ><Music color="purple"/></Feature>
            </Box>
            <Box width={["100%","100%","50%","50%"]}>
                <Feature
                    title='Jouer au jeu video 🏹🏆'
                    desc='Cela nous offre divers facon de trouver des coequipiers a qui on peut former une equipe comme dans la vie professionelle'
                    img='pubg.png'
                ><Monitor /></Feature>
            </Box>

        </Flex>
    );
}
export default Divertissement