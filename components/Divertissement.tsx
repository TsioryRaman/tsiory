import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react"

type Feature = {
    title: String,
    desc: String,
    img?: string,
}

const Feature: React.FC<Feature> = ({ title, desc, img, ...rest }) => {
    return (
        <Box p={5} mt={8} shadow='md' borderWidth='1px' overflow={"hidden"} {...rest}>
            {img && <Box overflow="hidden">
                <Image src={"/img/" + img} cursor="pointer" alt={img} height={["400px"]} width={["100%","100%","100%","100%"]} _hover={{ transform: "scale(1.2)" }} transitionDuration={".8s"} />
            </Box>}
            <Heading mt='4' fontSize='xl'>{title}</Heading>
            <Text mt={4}>{desc}</Text>
        </Box>
    )
}

const Divertissement: React.FC = () => {
    return (
        <Flex gap={8} flexDirection={["column", "column", "column", "row"]} >
            <Box width={["100%","100%","100%","30%"]} mx={["auto", "auto", "auto", 0]}>
                <Feature
                    title='Bon plan 😂😂'
                    desc='Regarder des films et des dessins animes😎😎'
                    img='the_amazing_spider_man_le_destin_d_un_heros.jpg'
                />
            </Box>
            <Box width={["100%","100%","100%","70%"]}>
                <Feature
                    title='Jouer au jeu, surtout les jeux en ligne 🏹🏆'
                    desc='Cela nous offre divers facon de trouver des coequipiers a qui on peut former une equipe comme dans la vie professionelle'
                    img='pubg.jpg'
                />
            </Box>
        </Flex>
    );
}
export default Divertissement