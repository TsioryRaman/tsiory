import { Box, Divider, Flex, Heading, Image, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react"
import { Film, Monitor, Music } from "react-feather";
import Fade from "react-reveal"

type Feature = {
    title: String,
    desc: String,
    img?: string,
}

const Feature: React.FC<Feature> = ({ title, desc, img,children, ...rest }) => {

    const border = useColorModeValue("blue.200","gray.700")

    return (
        <Box borderRadius={3} height="100%" shadow='md' borderColor={border} borderWidth='1px' {...rest}>
            <Flex height="100%" flexDirection="column" p={4}>
                <Heading mb="4" display="flex" justifyContent="space-between" color='#53c9c6' mt='4' fontSize={['xs','sm','md','xl']}>{title}{children}</Heading>
                <Divider />
                <Text fontWeight={"medium"} fontSize={['xs','xs','xs','lg']} mt={4}>{desc}</Text>

                {img && <Box mt="auto" marginLeft={["-6","-8","-16","-16"]}>
                
                <Image transform="scaleX(-1)" src={"/img/" + img} cursor="pointer" zIndex="2" alt={img} height={["300px","400px","250px","400px"]} width="100%" _hover={{ transform: "scale(-1.2,1.2)",zIndex:"1000" }} transitionDuration={".8s"} />
            </Box>}
            </Flex>
        </Box>
    )
}

const Divertissement: React.FC = () => {
    return (
        <Flex mt={8} gap={[4,4,2,8]} flexDirection={["column", "column", "row", "row"]} >
            <Box className="boxFade" width={["100%","100%","50%","50%"]}>
                <Fade duration={800} left={true}>
                    <Feature
                        title='Bon plan 😂😂'
                        desc='Regarder des films et des dessins animes😎😎'
                        img='spiderman.png'
                    ><Film /></Feature>
                </Fade>
            </Box>
            <Box className="boxFade" width={["100%","100%","50%","50%"]}>
                <Fade duration={800} distance="100px" top={true}>
                    <Feature
                        title='Ecouter de la musique'
                        desc='Cela nous offre divers facon de trouver des coequipiers a qui on peut former une equipe comme dans la vie professionelle'
                        img='musique.png'
                    ><Music color="purple"/></Feature>
                </Fade>
            </Box>
            <Box className="boxFade" width={["100%","100%","50%","50%"]}>

            <Fade duration={800} right={true}>
                <Feature
                    title='Jouer au jeu video 🏹🏆'
                    desc='Cela nous offre divers facon de trouver des coequipiers a qui on peut former une equipe comme dans la vie professionelle'
                    img='pubg.png'
                ><Monitor /></Feature>

            </Fade>
            </Box>

        </Flex>
    );
}
export default Divertissement