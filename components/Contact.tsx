import { Box, Divider, Flex, Heading, Image, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
type CardCompetenceType = {
    title: String,
    link: string,
    logo: string,
    imgPresentation?: string
}
const Contact: React.FC = () => {

    return (
        <Flex mb="8" gap="4" mt="4" flexBasis="0" alignItems="center" direction={["column", "column", "column", "row"]}>
            <CardContact title="Github" logo="/img/stack image/Octocat.png" imgPresentation="/img/_contact/github.png" link="https://www.github.com/TsioryRaman" />

            <CardContact title="Linkedin" logo="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png" imgPresentation="/img/_contact/linkedin.png" link="https://www.linkedin.com/in/tsiory-ramanantoanina" />

            <CardContact title="Gmail" logo="https://cdn.icon-icons.com/icons2/2631/PNG/512/gmail_new_logo_icon_159149.png" link="rtsiory4@gmail.com" />
        </Flex>
    );
}
const CardContact: React.FC<CardCompetenceType> = ({ title, link, logo }) => {

    const formatUrlToText = (url: string) => url.replace("https://www.", "")

    const bg = useColorModeValue('blue.400', 'blue.800')
    return (
        <Flex color="gray.100" _hover={{ background: bg }} transitionDuration={".6s"} cursor="pointer" borderLeft="4px" borderRight="4px" borderRightColor={bg} borderLeftColor={bg} boxShadow="xl" flex="1" alignSelf="stretch" gap="4" borderRadius="sm" p={6}>

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