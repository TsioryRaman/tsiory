import { Badge, Box, Container, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const BestTechnology: React.FC = () => {
    return (
        <Container maxW={["sm", "md", "2xl", "5xl"]}>
            <Box mt='24'>
                <Heading as='h2' fontWeight='bold' fontSize="3xl">
                    Choix du meilleur technologie pour son application
                </Heading>
                <Flex direction="row" mt='3' gap='4'>
                    <Badge>
                        Technologie
                    </Badge>
                    <Badge colorScheme='green'>
                        Langage
                    </Badge>
                    <Badge colorScheme="red">
                        Framework
                    </Badge>
                    <Text display='inline' p='0' color='gray.400'>Aout 19,2022</Text>
                </Flex>
                <Divider mt='3' />
                <Text fontSize='lg'>
                    Pour accéder à certains services, communiquer avec d’autres personnes, faire des achats, jouer ou visionner des vidéos, les applications mobiles sont partout ! Dans ce contexte, la création d’appli est devenue incontournable pour de nombreuses entreprises.
                </Text>
                <Heading as='h2' fontWeight='bold' fontSize="3xl">
                    1. L’application native, pour une expérience utilisateur optimale
                </Heading>
                <Text fontSize='lg'>
                    Les applications mobiles natives sont conçues pour une plateforme particulière : Android, iOS, Windows Phone. Optimisées pour la plateforme pour laquelle elles sont conçues, elles offrent une excellente expérience utilisateur avec notamment un chargement très rapide, une utilisation sans connexion Internet et la possibilité d’intégrer de nombreuses fonctionnalités (appareil photo, capteur biométrique, gyroscope, etc.).
                </Text>
                <Heading as='h2' fontWeight='bold' fontSize="3xl" mt='4'>
                    2. Entre appli web et appli native, la création d’appli hybride
                </Heading>
                <Text fontSize='lg'>
                    Les applications mobiles hybrides sont développées avec des langages web ou Webview (HTML, JavaScript, CSS) et utilisent un framework comme Apache Cordova ou Ionic Framework qui permet de déployer l’appli sur les différentes plateformes mobiles (iOS, Android, Windows Phone) et ce avec une seule base de code.
                </Text>
                <Heading as='h2' fontWeight='bold' fontSize="3xl" mt='4'>
                    3. Applications multiplateformes, un langage pour des performances optimisées
                </Heading>
                <Text fontSize='lg'>
                    Reprenant le principe des applications hybrides associant technologies web et frameworks, les applis cross-platform sont développées avec de nouveaux frameworks tels que React Native de Facebook, Flutter de Google, ou NativeScript.
                </Text>
                <Heading as='h2' fontWeight='bold' fontSize="3xl" mt='4'>
                    4. Progressive Web App, des technologies web pour des applis simples
                </Heading>
                <Text fontSize='lg'>
                    Apparues pour la première fois en 2015, les PWA permettent de développer, grâce aux technologies web et notamment JavaScript, une seule application qui sera utilisable sur tous les supports (ordinateur, tablette, mobile) et ce quel que soit le navigateur web.
                </Text>
                <Heading as='h2' fontWeight='bold' fontSize="3xl" mt='4'>
                    5. Comment faire le bon choix lors d’une création d’appli ?
                </Heading>
                <Text fontSize='lg'>
                    Performance, budget, expérience utilisateur, fonctionnalités, chaque application a des atouts et des inconvénients. La bonne appli ne sera pas celle qui offre le plus de fonctionnalités ou la meilleure performance, mais celle qui correspondra le mieux à votre projet de développement mobile.
                </Text>

            </Box>
        </Container>
    );
}

export default BestTechnology;