import React from "react"
import { Box } from "@chakra-ui/react"
import { Canvas } from "@react-three/fiber"

export const Three = () => {
    return (
        <Box display="flex" alignItems="center" justifyContent="center" minH="100vh" w="100%">
            <Canvas>
                <mesh>
                    <boxGeometry args={[5,5,5]}/>
                </mesh>
            </Canvas>
        </Box>
    )
}