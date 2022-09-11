import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react"
import { Award, Link2, Terminal } from "react-feather";

type CardCompetenceType = {
    title: String,
    description: String,
    logo: string,
    type: string
}
const Competence: React.FC = () => {
    return (
        <Flex mt="8" gap="8" justifyContent={"space-between"} direction={["column", "column", "column", "row"]}>
            <CardCompetence type="Backend" description={" Je développe des applications PHP depuis plus de 2 ans et je maitrise les frameworks Symfony 4/5"} title="Symfony ou Laravel" logo="https://cdn.worldvectorlogo.com/logos/symfony.svg" />
            <CardCompetence type="Environement" description="Je développe des applications sur Linux | Windows avec des outils comme Docker" title={"Linux|Windows"} logo={"https://training.galaxyproject.org/archive/2022-06-01/topics/admin/images/docker_whale.png"} />
            <CardCompetence type="Frontend" description="Je développe des applications reactives avec React.js et Vue.js" title={"Reactjs/Vuejs"} logo={"https://cdn.worldvectorlogo.com/logos/react-2.svg"} />
        </Flex>
    );
}
const CardCompetence: React.FC<CardCompetenceType> = ({ title, description, type, logo }) => {
    return (
        <Flex _hover={{ transform: "scale(1.01)" }} cursor="default" transitionDuration=".1s" direction="column" w={["100%", "100%", "100%", "50%"]} position="relative" overflow="hidden" boxShadow="xl">

            <Image opacity=".7" zIndex="-1" height="100%" position="absolute" src="/img/stack image/background_card.jpg" />
            <Flex p={4} flexDirection="column">
                <Heading display="flex" justifyContent="center" gap="2" mt="3" textAlign={"center"} fontSize={"xl"}>{title}<Award /></Heading>
                <Heading mt="3" textAlign={"center"} fontSize={"xl"}>{type}</Heading>
                <Box mt="8" position="relative" borderRadius="full" overflow="hidden" height="150px" width="150px" display="flex" alignItems="center" justifyContent="center" p="4" mx="auto">
                    <Box zIndex="-1" top="0" opacity=".7" bottom="0" left="0" right="0" position="absolute" bgColor="black"></Box>
                    <Image mx="auto" alt={logo} src={logo} height="75px" width="75px" />
                </Box>
                <Text textAlign="center" fontWeight="bold" mt="8">
                    {description}
                </Text>

            </Flex>
            <Flex mt="auto" justifyContent="center" alignContent="center" flexDirection="row">
                <Flex w={["50%"]} gap="3" justifyContent="center" alignItems="center">
                    <Link2 />
                    <Text fontWeight="bold">Site officiel</Text>
                </Flex>
                <Flex w={["50%"]} gap="2" justifyContent="center" alignItems="center">
                    <Terminal />
                    <Text fontWeight="bold">Profile</Text>
                </Flex>
            </Flex>
        </Flex >
    );
}
export default Competence;
