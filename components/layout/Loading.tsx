import { Flex, useColorModeValue } from "@chakra-ui/react"
import { HashLoader } from "react-spinners"

export const Loading = () => {

    const colorLoader = useColorModeValue("#3b82f6","#1e3a8a")

    return <Flex as="div" height="100%" minH="100vh" direction="column" justify="center" alignItems="center" w="100%">
        <HashLoader color={colorLoader} />
    </Flex>
}