import { Avatar, Box, Divider, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react"
import { Coffee, Video } from "react-feather";

type Feature = {
    title: String,
    desc: String,
    img?: string,
}

const Feature: React.FC<Feature> = ({ title, desc, img, ...rest }) => {
    return (
        <Box mt={8} height="100%" borderRadius={8} shadow='md' borderWidth='1px' overflow={"hidden"} {...rest}>
            {img && <Box position="relative" borderBottomLeftRadius={48} overflow="hidden">
                
                <Image src={"/img/" + img} cursor="pointer" alt={img} height={["400px"]} width="100%" _hover={{ transform: "scale(1.2)" }} transitionDuration={".8s"} />
            </Box>}
            <Box p={4} position="relative">
                <Box position="absolute" top="-8" right="6" >
                    <Avatar bg="green.400" icon={<Video size="20px"  color="white" />}/>
                </Box>
                <Heading mb="4" display="flex" justifyContent="space-between" color='#53c9c6' mt='4' fontSize='xl'>{title}<Coffee color="#ED64A6"/></Heading>
                <Divider />
                <Text fontWeight={"medium"} mt={4}>{desc}</Text>
            </Box>
        </Box>
    )
}

const Divertissement: React.FC = () => {
    return (
        <Flex gap={8} flexDirection={["column", "column", "row", "row"]} >
            <Box width={["100%","100%","50%","30%"]}>
                <Feature
                    title='Bon plan 😂😂'
                    desc='Regarder des films et des dessins animes😎😎'
                    img='the_amazing_spider_man_le_destin_d_un_heros.jpg'
                />
            </Box>
            <Box width={["100%","100%","50%","70%"]}>
                <Feature
                    title='Jouer au jeu video 🏹🏆'
                    desc='Cela nous offre divers facon de trouver des coequipiers a qui on peut former une equipe comme dans la vie professionelle'
                    img='pubg.jpg'
                />
            </Box>
        </Flex>
    );
}
export default Divertissement