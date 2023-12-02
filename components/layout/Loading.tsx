import { Flex, Spinner } from "@chakra-ui/react"

export const Loading = () => {
    return <Flex as="div" height="100%" direction="column" justify="center" alignItems="center" w="100%">
        <Spinner ></Spinner>
    </Flex>
}