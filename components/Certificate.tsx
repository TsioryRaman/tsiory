import { Flex, Image } from "@chakra-ui/react"
import React from "react"

const certificates = [
    '/certificate/css certificate.jpg',
    '/certificate/javascript_basic certificate.jpg',
    '/certificate/problem_solving_basic certificate.jpg',
    '/certificate/react_basic certificate.jpg',
    '/certificate/rest_api_intermediate certificate.jpg'
]

export const Certificate:React.FC = () => {
    return (
    <Flex direction={["row"]} gap={2} wrap="wrap" justifyContent="center" alignItems="center" mt="8">
        {certificates.map((certificate,index) => <Image src={certificate} _hover={{transform:"scale(1.6)"}} transitionDuration="300ms" rounded="sm" w="300px" h="200px" backgroundRepeat="no-repeat" key={index} />)}
    </Flex>
    )
}