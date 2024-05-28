import { Flex, Image, Skeleton } from "@chakra-ui/react"
import React,{useState,useCallback} from "react"

const certificates = [
    '/certificate/css certificate.jpg',
    '/certificate/javascript_basic certificate.jpg',
    '/certificate/problem_solving_basic certificate.jpg',
    '/certificate/react_basic certificate.jpg',
    '/certificate/rest_api_intermediate certificate.jpg'
]

export const Certificate:React.FC<any> = () => {

    return (
    <Flex direction={["row"]} gap={2} wrap="wrap" justifyContent="center" alignItems="center" mt="8">
        {certificates.map((certificate,index) => <LoadingImage certificate={certificate} key={index}/>)}
    </Flex>
    )
}

type LoadingImageProps = {
    certificate: string
}

const LoadingImage:React.FC<LoadingImageProps> = React.memo(({certificate}) => {
    const [loading,setLoading] = useState(false)

    const onLoad = useCallback(() => {
        setLoading(false)
    },[])
    return (
        <>
            {loading ? <Skeleton w="300px" h="200px"/> :<Image src={certificate} _hover={{transform:"scale(1.6)"}} onLoad={onLoad} transitionDuration="300ms" rounded="sm" w="300px" h="200px" backgroundRepeat="no-repeat" />}
        </>
    )
})