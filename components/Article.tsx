import { Badge, Flex, Heading, Progress, Text } from "@chakra-ui/react";
import React from "react"
import Link from "next/link"
import { ChevronRight } from "react-feather";

export type StackType = {
    name: String,
    colorScheme: string
}

type ArticleType = {
    title: String,
    stack?: Array<StackType>,
    description: String,
    id: Number
}

export const Article: React.FC<ArticleType> = ({ title, stack, description, id }) => {
    return (
        <Link href={'/article/' + id}>
            <Flex _hover={{transform:"scaleX(1.005) translateZ(0)",backfaceVisibility:"hidden",filter:"blur(0)"}} filter="blur(0)" transitionDuration="0.5s" cursor="pointer" boxShadow={"lg"} my="8" borderRadius={["xl", "xl", "lg", "lg"]} overflow={"hidden"} direction={["column", "column", "row", "row"]} w="full">
                <Flex color="gray.300" direction={"column"} p="8" pl={["8", "8", "8", "12"]} w={["100%", "100%", "35%", "35%"]} bg="blue.900">
                    <Text textTransform={"uppercase"} as="h4">COURS</Text>
                    <Heading mt="4" mb="4" fontWeight={"bold"} fontSize={"1.5em"} as="h1">{title}</Heading>
                    <Text display={"flex"} flexDirection="row" gap="2">Voir le chapitre<ChevronRight /></Text>
                </Flex>
                <Flex bg="gray.100" mt={["-18", "-18", "0", "0"]} borderTopRadius={["2xl", "2xl", "0", "0"]} color="gray.700" direction={"column"} p="8" pt={["16", "16", "8", "8"]} w={["100%", "100%", "65%", "65%"]}>
                    <Flex alignItems={"center"} justifyContent={"space-between"} direction={"row"}>
                        <Text fontWeight={"medium"}>ARTICLE {id}</Text>
                        <Progress bg="gray.300" width={"150px"} borderRadius="lg" value={80} />

                    </Flex>
                    <Flex wrap='nowrap' gap={['2', '2', '4', '4']}>
                        {stack?.map((s, index) => <Badge key={index} w='-webkit-fit-content' colorScheme={s.colorScheme}>
                            {s.name}
                        </Badge>)}
                    </Flex>
                    <Text display='inline' p='0' fontSize='sm' color='gray.400'>Aout 19,2022</Text>
                    <Text fontWeight={"bold"} fontSize={"2em"} isTruncated={true}>
                        {description}
                    </Text>
                </Flex>
            </Flex>
        </Link >
    );
}