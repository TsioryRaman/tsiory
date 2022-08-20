import { Avatar, Badge, Box, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react"
import Link from "next/link"
export const Article: React.FC = () => {
    return (
        <Link href='/article/1'>
            <Box cursor="pointer" _hover={{ boxShadow: 'lg', }} transitionDuration='0.5s' borderColor={'gray.600'} borderRadius={6} my={3} p={4}>
                <Flex direction='row' justifyContent='space-between'>
                    <Flex direction='column'>
                        <Heading fontSize='xl' as='h3'>
                            1 - Meilleurs pratique en react
                        </Heading>
                        <Flex direction={["column", "column", "row", "row"]} wrap='nowrap' mt='3' gap={['2', '2', '4', '4']}>
                            <Badge w='-webkit-fit-content' size='sm'>
                                MAIN
                            </Badge>
                            <Badge w='-webkit-fit-content' colorScheme='green'>
                                Javascript
                            </Badge>
                            <Badge w='-webkit-fit-content' colorScheme="red">
                                Typescript
                            </Badge>
                            <Badge w='-webkit-fit-content' colorScheme='purple'>
                                React | Nest
                            </Badge>
                            <Text display='inline' p='0' fontSize='sm' color='gray.400'>Aout 19,2022</Text>
                        </Flex>
                    </Flex>
                    <Avatar name='Tsiory Ramanantoanina' />
                </Flex>
                <Divider mt='2' />
                <Text isTruncated={true}>
                    L'écriture de code propre implique d'écrire des codes avec des modèles de conception clairs et simples qui facilitent la lecture, le test et la maintenance pour les humains. Par conséquent, un code propre peut réduire le coût du développement logiciel. Et c'est parce que les principes impliqués dans l'écriture de code propre éliminent les dettes techniques.
                </Text>
            </Box>
        </Link >
    );
}