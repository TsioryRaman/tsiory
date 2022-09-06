import { Avatar, Badge, Box, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react"
import Link from "next/link"

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
            <Box cursor="pointer" _hover={{ boxShadow: 'lg', }} transitionDuration='0.5s' borderColor={'gray.600'} borderRadius={6} my={3} p={4}>
                <Flex direction='row' justifyContent='space-between'>
                    <Flex direction='column'>
                        <Heading fontSize='xl' as='h3'>
                            {title}
                        </Heading>
                        <Flex direction={["column", "column", "row", "row"]} wrap='nowrap' mt='3' gap={['2', '2', '4', '4']}>
                            {stack?.map((s, index) => <Badge key={index} w='-webkit-fit-content' colorScheme={s.colorScheme}>
                                {s.name}
                            </Badge>)}
                            <Text display='inline' p='0' fontSize='sm' color='gray.400'>Aout 19,2022</Text>
                        </Flex>
                    </Flex>
                    <Avatar name='Tsiory Ramanantoanina' />
                </Flex>
                <Divider mt='2' />
                <Text isTruncated={true}>
                    {description}
                </Text>
            </Box>
        </Link >
    );
}