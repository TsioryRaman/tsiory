import { Flex, Spinner,Text } from "@chakra-ui/react"

export const Loading = () => {
    return <Flex as="div" height="100%" minH="100vh" direction="column" justify="center" alignItems="center" w="100%">
        <Spinner />
        <Text fontSize="2xl">Chargement...</Text>
    </Flex>
}