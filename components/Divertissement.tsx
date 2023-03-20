import { Box, Flex, Heading, Image, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react"
import Fade from "react-reveal"

type Feature = {
    title: String,
    desc: String,
    img?: string,
}

const Feature: React.FC<Feature> = ({ title, desc, img, children, ...rest }) => {

    const border = useColorModeValue("blue.50", "gray.700")
    const textShadow = useColorModeValue("transparent", "gray")
    const svgFill = useColorModeValue("#f5f5f5", "#1A365D")

    return (
        <Box borderRadius={3} height="100%" _hover={{ shadow: "xl" }} transitionDuration={".2s"} shadow='md' borderColor={border} borderWidth='1px' {...rest}>
            <Flex height="100%" flexDirection="column" p={4}>
                <Flex position={"relative"} alignItems="center" justifyContent={"center"}>
                    <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                        <path stroke="none" stroke-width="0" fill={svgFill} d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174">
                        </path>
                    </svg>
                    <Image transform="scaleX(-1)" position={"absolute"} src={"/img/" + img} cursor="pointer" zIndex="2" alt={img} height={["auto"]} width="50px" _hover={{ transform: "scale(-1.2,1.2)", zIndex: "1000" }} transitionDuration={".8s"} />
                </Flex>
                <Heading mb="4" display="flex" justifyContent="space-between" color='#53c9c6' mt='4' mx="auto" fontSize={['xl']}>{title}{children}</Heading>
                <Text textShadow={`3px 1px 15px ${textShadow}`} fontWeight={"medium"} mx="auto" fontSize={['xs', 'xs', 'xs', 'sm']} mt={4}>{desc}</Text>

                {img && <Box mt="auto" marginLeft={["-6", "-8", "-16", "-16"]}>

                </Box>}
            </Flex>
        </Box>
    )
}

const Divertissement: React.FC = () => {
    return (
        <Box>
            <Flex mt={8} gap={[4, 4, 2, 8]} flexDirection={["column", "column", "row", "row"]} >
                <Box className="boxFade" width={["100%", "100%", "50%", "50%"]}>
                    <Fade duration={800} left={true}>
                        <Feature
                            title='Bon plan'
                            desc='Regarder des films et des dessins animes'
                            img='spiderman.png'
                        ></Feature>
                    </Fade>
                </Box>
                <Box className="boxFade" width={["100%", "100%", "50%", "50%"]}>
                    <Fade duration={800} distance="100px" top={true}>
                        <Feature
                            title='Ecouter de la musique'
                            desc='Cela nous offre divers facon de trouver des coequipiers a qui on peut former une equipe comme dans la vie professionelle'
                            img='musique.png'
                        ></Feature>
                    </Fade>
                </Box>
                <Box className="boxFade" width={["100%", "100%", "50%", "50%"]}>

                    <Fade duration={800} right={true}>
                        <Feature
                            title='Jouer au jeu video'
                            desc='Cela nous offre divers facon de trouver des coequipiers a qui on peut former une equipe comme dans la vie professionelle'
                            img='pubg.png'
                        ></Feature>

                    </Fade>
                </Box>
            </Flex>
            <Flex mt={8} gap={[4, 4, 2, 8]} flexDirection={["column", "column", "row", "row"]} >
                <Box className="boxFade" width={["100%", "100%", "50%", "50%"]}>
                    <Fade duration={800} left={true}>
                        <Feature
                            title={`Sortir prendre l'air`}
                            desc={`J'aime sortir dehors pour prendre l'air afin de me clarifier les idees`}
                            img='hobby.png'
                        ></Feature>
                    </Fade>
                </Box>
                <Box className="boxFade" width={["100%", "100%", "50%", "50%"]}>
                    <Fade duration={800} distance="100px" top={true}>
                        <Feature
                            title={`Football`}
                            desc='Regarder les matchs de foot meme si je ne joue pas'
                            img='football.png'
                        ></Feature>
                    </Fade>
                </Box>
                <Box className="boxFade" width={["100%", "100%", "50%", "50%"]}>

                    <Fade duration={800} right={true}>
                        <Feature
                            title={`Faire des echanges`}
                            desc='Faire de echanges avec les amis ou les collaborateurs'
                            img='dialog.png'
                        ></Feature>

                    </Fade>
                </Box>
            </Flex>
        </Box>
    );
}
export default Divertissement