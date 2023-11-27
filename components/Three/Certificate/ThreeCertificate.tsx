import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import {Scene} from "../Scene";
import {OrbitControls, useTexture} from "@react-three/drei";
import * as THREE from "three"
import {Suspense} from "react";
import {ThreeEvent, useFrame, useThree} from "@react-three/fiber";
import gsap from "gsap";

type CertificateProps = {
    name:string,
    position: Array<number>
    rotation: Array<number>,
}

export const ThreeCertificate = () => {
    const [ratio,setRatio] = useState(0)
    useEffect(() => {
        setRatio(window.innerWidth / window.innerHeight)
    },[])
    return (
    <Suspense fallback={null}>
        <Scene camera={{position:[0,0,5]}}>
            <perspectiveCamera fov={75} position={[0,0,2]} aspect={ratio} near={0.1} far={1000}/>
            <BackgroundSceneLoader />
            
            <Certificate name="/certificate/api.jpg" rotation={[0,0,0]} position={[0,0,0]}/>
            <Certificate name="/certificate/react_basic certificate.jpg" rotation={[0,-1,0]} position={[4,0,-2]}/>
            <Certificate name="/certificate/problem_solving_basic certificate.jpg" rotation={[0,1,0]} position={[-4,0,-2]}/>
            <Certificate name="/certificate/javascript_basic certificate.jpg" rotation={[0,-1,0]} position={[4,3,-6]}/>
            <Certificate name="/certificate/css certificate.jpg" rotation={[0,1,0]} position={[-4,3,-6]}/>
            {/* <Certificate name="/certificate/css certificate.jpg" position={[0,0,-4]}/> */}
    </Scene>
    </Suspense>
    )
}

const Certificate:React.FC<CertificateProps> = React.memo(({name,position,rotation}) => {
    const [texture] = useTexture([name])
    const {camera} = useThree()
    const concentrate = (e:ThreeEvent<MouseEvent>) => {
        e.stopPropagation()
        gsap.to(camera.position,{
            x:position[0] - (position[0] !== 0 && (position[0] >= 0 ? 2 : -2) || 0),
            y:position[1],
            z:position[2] + 1.25,
            duration: 3
        })
        gsap.to(camera.rotation,{
            y:rotation[1],
            // x:rotation[0] / 4,
            duration: 3,
            delay: 3
        })
    }

    const resetCamera = (e:ThreeEvent<MouseEvent>) => {
        e.stopPropagation()
        gsap.to(camera.position,{
            x:0,
            y:0,
            z:5,
            duration: 3
        })
        gsap.to(camera.rotation,{
            y:0,
            duration: 3,
        })
    }
   
    return <mesh onPointerOut={resetCamera} onPointerDown={concentrate} rotation={rotation} position={position}>
        <ambientLight intensity={0.2}/>
        <planeGeometry args={[3,2.2]} />
        <meshStandardMaterial map={texture}/>
    </mesh>

})

const BackgroundSceneLoader = React.memo(() => {
    const {scene,camera} = useThree()
    
    const texture = useTexture("/img/background/dark_certificate.jpg")
    useEffect(() => {
        texture.mapping = THREE.EquirectangularReflectionMapping
        scene.background = texture
    })
    return null
})