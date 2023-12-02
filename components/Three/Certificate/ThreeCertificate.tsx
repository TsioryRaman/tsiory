import React, { useEffect, useRef, useState} from "react";
import {Scene} from "../Scene";
import {Environment, MeshReflectorMaterial, useTexture} from "@react-three/drei";
import {Suspense} from "react";
import {Euler, ThreeEvent, Vector3, useThree} from "@react-three/fiber";
import gsap from "gsap";
import { useColorModeValue } from "@chakra-ui/react";
import { Loading } from "../../layout/Loading";
import { Mesh } from "three";
// TYPE
type CertificateProps = {
    name:string,
    position: Vector3,
    rotation: Euler,
    changeLightPosition: (position: Array<number> | null) => void
}
// UTILITAIRE
const placeZpoint = (position:number): number => position === 0 ? 3 : position + 2

export const ThreeCertificate = () => {
    const [ratio,setRatio] = useState(0)

    useEffect(() => {
        setRatio(window.innerWidth / window.innerHeight)
    },[])
    return (
    <Suspense fallback={<Loading />}>
        <Scene>
            <perspectiveCamera fov={75} position={[0,0,5]} aspect={ratio} near={0.1} far={1000}/>
            <BackgroundSceneLoader />
        </Scene>
    </Suspense>
    )
}

const Certificate:React.FC<CertificateProps> = React.memo(({name,position,rotation,changeLightPosition}) => {
    const [texture] = useTexture([name])
    const {camera} = useThree()
    const defaultRotation = rotation.toString().split(',').map(v => parseFloat(v))
    const ref = useRef<Mesh>(null!)
    const bgCertificate = useColorModeValue('#a5f3fc', '#60a5fa')
    const positionCamera = position.toString().split(',').map(v => parseInt(v))
    const concentrate = (e:ThreeEvent<MouseEvent>) => {
        // console.log(position)
        e.stopPropagation()
        // let [x,y,z] = position
        changeLightPosition(positionCamera)
        gsap.to(camera.position,{
            x:positionCamera[0],
            y:positionCamera[1],
            z:placeZpoint(positionCamera[2]),
            duration: 3
        })
        gsap.to(ref.current.rotation,{
            y:0,
            z:0,
            x:0,
            duration: 1.5,
            delay: 1
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
        gsap.to(ref.current.rotation,{
            x:defaultRotation[0],
            y:defaultRotation[1],
            z:defaultRotation[2],
            duration: 1,
        })
        changeLightPosition(null)
    }
   
    return <mesh ref={ref} onPointerOut={resetCamera} onPointerDown={concentrate} rotation={rotation} position={position}>
        {/* <ambientLight intensity={0.2}/> */}
        <planeGeometry args={[3,2.2]} />
        <meshPhysicalMaterial ior={0} reflectivity={2} roughness={0} map={texture}/>
        <mesh position={[0,0,-0.001]}>
            <planeGeometry args={[3.1,2.3]}/>
        <meshPhysicalMaterial ior={0} reflectivity={2} roughness={0} color={bgCertificate}/>

        </mesh>
    </mesh>

})

const BackgroundSceneLoader = React.memo(() => {
    const refLight = useRef<any>()
    const bgHeader = useColorModeValue('#a5f3fc', '#60a5fa')
    const {viewport} = useThree()
    const floor = useTexture("img/background/floor/SurfaceImperfections003_1K_var1.jpg")
    const changeLightPosition = (position: Array<number>|null) => {
        if(position === null)
        {
            refLight.current && gsap.to(refLight?.current.position,{
                x:0,
                y:1,
                z:0.85,
                duration: 3
            })
            return
        }
        gsap.to(refLight?.current.position,{
            x:-1 * position[0],
            y:position[1] + 3,
            z:position[2] !== 0 ? position[2] - 1 : 2,
            duration: 3,
            delay:1.5
        })
    }
    return <>
        <spotLight ref={refLight} intensity={0.5} color={bgHeader} position={[0,1,0.85]}/>
        <ambientLight intensity={0.1} />
        <Certificate changeLightPosition={changeLightPosition} name="/certificate/api.jpg" rotation={[0,0,0]} position={[0,0,0]}/>
        <Certificate changeLightPosition={changeLightPosition} name="/certificate/react_basic certificate.jpg" rotation={[0,-Math.PI / 4,0]} position={[4,0,-2]}/>
        <Certificate changeLightPosition={changeLightPosition} name="/certificate/problem_solving_basic certificate.jpg" rotation={[0,Math.PI / 4,0]} position={[-4,0,-2]}/>
        <Certificate changeLightPosition={changeLightPosition} name="/certificate/javascript_basic certificate.jpg" rotation={[0,-Math.PI / 4,0]} position={[4,3,-6]}/>
        <Certificate changeLightPosition={changeLightPosition} name="/certificate/css certificate.jpg" rotation={[0,Math.PI / 4,0]} position={[-4,3,-6]}/>
        <mesh rotation={[Math.PI / 2,0,0]} position={[0,0,0]}>
            <planeGeometry args={[viewport.width,viewport.height]}/>
            <MeshReflectorMaterial  
            // blur={[0, 0]}
            mirror={0.5}
            // mixStrength={60}
            roughnessMap={floor}
            roughness={0}
            // depthScale={0}
            // minDepthThreshold={0}
            // maxDepthThreshold={1.4}
              color={bgHeader}
          metalness={0.5}/>
        </mesh>
        <Environment files="/free_hdr/night.hdr"/>
</>
})