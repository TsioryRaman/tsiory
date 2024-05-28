import { Box, Divider, Flex, Heading, Image, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import {Zoom} from "react-reveal";
type CardCompetenceType = {
    title: String,
    link: string,
    logo: string,
    imgPresentation?: string
}
const Contact: React.FC = () => {

    return (
        <Zoom duration={800}>
            <Flex mb="8" gap="4" mt="4" flexBasis="0" alignItems="center" direction={["column", "column", "column", "row"]}>
                <CardContact title="Github" logo="/img/stack image/Octocat.png" imgPresentation="/img/_contact/github.png" link="https://www.github.com/TsioryRaman" />

                <CardContact title="Linkedin" logo="/img/_contact/linkedin.png" imgPresentation="/img/_contact/linkedin.png" link="https://www.linkedin.com/in/tsiory-ramanantoanina" />

                <CardContact title="Gmail" logo="/img/_contact/gmail.png" link="rtsiory4@gmail.com" />
            </Flex>
        </Zoom>
    );
}
const CardContact: React.FC<CardCompetenceType> = ({ title, link, logo }) => {

    const formatUrlToText = (url: string) => url.replace("https://www.", "")

    const bg = useColorModeValue('blue.300', 'blue.800')
    return (
        <Flex color="gray.100" _hover={{ background: bg }} transitionDuration={".6s"} cursor="pointer" border="1px" borderColor={bg} boxShadow="xl" flex="1" alignSelf="stretch" gap="4" borderRadius="sm" p={6}>

            <Box w="75%">
                <Heading mt="3" fontSize={"xl"}>{title}</Heading>
                <Divider my="2" />
                <a href={link}>
                    <Text fontWeight={"medium"}>
                        {formatUrlToText(link)}
                    </Text>
                </a>
            </Box>
            <Box w="25%">
                <Image alt={logo} src={logo} height="50px" width="50px" />
            </Box>
        </Flex>
    );
}
export default Contact;