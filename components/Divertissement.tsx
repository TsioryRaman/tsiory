import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react"

type Feature = {
    title: String,
    desc: String,
    img?: string,
    heightImg?: string,
    widthImg?: string
}

const Feature: React.FC<Feature> = ({ title, desc, img, heightImg, widthImg, ...rest }) => {
    return (
        <Box p={5} shadow='md' borderWidth='1px' overflow={"hidden"} {...rest}>
            {img && <Box overflow="hidden">
                <Image src={"/img/" + img} cursor="pointer" alt={img} height={heightImg} width={widthImg} _hover={{ transform: "scale(1.2)" }} transitionDuration={".8s"} />
            </Box>}
            <Heading mt='4' fontSize='xl'>{title}</Heading>
            <Text mt={4}>{desc}</Text>
        </Box>
    )
}

const Divertissement: React.FC = () => {
    return (
        <Box gap={8} display="flex" flexShrink={'unset'} flexDirection={["column", "column", "column", "row"]} >
            <Stack direction='row' height={"fit-content"} mx={["auto", "auto", "auto", 0]}>
                <Feature
                    title='Bon plan 😂😂'
                    desc='Regarder des films et des dessins animes😎😎'
                    img='the_amazing_spider_man_le_destin_d_un_heros.jpg'
                    heightImg="auto"
                    widthImg="100%"
                />
            </Stack>
            <Stack>
                <Feature
                    heightImg="auto"
                    widthImg="100%"
                    title='Jouer au jeu, surtout les jeux en ligne 🏹🏆'
                    desc='Cela nous offre divers facon de trouver des coequipiers a qui on peut former une equipe comme dans la vie professionelle'
                    img='pubg.jpg'
                />
            </Stack>
        </Box>
    );
}
export default Divertissement