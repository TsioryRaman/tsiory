import { Box, Divider, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react"

type CardCompetenceType = {
    title: String,
    description: String,
    logo: string
}
const Competence: React.FC = () => {
    return (
        <Flex mt="8" gap="8" justifyContent={"space-between"} direction={["column", "column", "column", "row"]}>
            <CardCompetence description={" Je développe des applications PHP depuis plus de 2 ans et je maitrise les frameworks Symfony 4/5"} title="Backend Symfony ou Laravel" logo="https://symfony.com/logos/symfony_black_03.png" />
            <CardCompetence description="Je développe des applications reactives avec React.js et Vue.js" title={"Frontend Reactjs/Vuejs"} logo={"https://cdn.worldvectorlogo.com/logos/react-2.svg"} />
        </Flex>
    );
}
const CardCompetence: React.FC<CardCompetenceType> = ({ title, description, logo }) => {
    return (
        <Box boxShadow="xl" p={4} border="2px" borderColor="whiteAlpha.300">
            <Image alt={logo} src={logo} height="50px" width="50px" />
            <Divider my="2" />
            <Heading mt="3" fontSize={"xl"}>{title}</Heading>
            <Text>
                {description}
            </Text>
        </Box>
    );
}
export default Competence;
