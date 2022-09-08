import { Box, Divider, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
type CardCompetenceType = {
    title: String,
    link: string,
    logo: string,
    imgPresentation?: string
}
const Contact: React.FC = () => {
    return (
        <Flex mb="8" gap="4" mt="4" justifyContent={"space-around"} direction={["column", "column", "column", "row"]}>
            <CardContact title="Github" logo="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo-500x281.png" imgPresentation="/img/_contact/github.png" link="https://github.com/TsioryRaman" />

            <CardContact title="Linkedin" logo="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png" imgPresentation="/img/_contact/linkedin.png" link="https://www.linkedin.com/in/tsiory-raman-ab309b1b2/" />

            <CardContact title="Gmail" logo="https://cdn.icon-icons.com/icons2/2631/PNG/512/gmail_new_logo_icon_159149.png" link="rtsiory4@gmail.com" />
        </Flex>
    );
}
const CardContact: React.FC<CardCompetenceType> = ({ title, link, logo, imgPresentation }) => {
    return (
        <Flex boxShadow="xl" gap="4" borderRadius="md" p={4} border="2px" borderColor="whiteAlpha.300">

            <Box>
                <Image alt={logo} src={logo} height="90px" width="90px" />
                <Heading mt="3" fontSize={"xl"}>{title}</Heading>

                <Divider my="2" />

                <Link href={link}>
                    <Text>
                        {link}
                    </Text>

                </Link>
            </Box>
        </Flex>
    );
}
export default Contact;