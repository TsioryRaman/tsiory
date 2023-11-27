import {Canvas, ThreeEvent, useThree} from "@react-three/fiber";
import gsap from "gsap";
import { PropsWithChildren, useLayoutEffect } from "react";

export const Scene:React.FC = (props:PropsWithChildren<any>) => {
    const cancel = (e:ThreeEvent<MouseEvent>) => {
        e.stopPropagation()
        console.log("clicked")
    }
    return <Canvas id="canvas_certificate" onPointerDown={cancel} {...props}>
        {props.children}
        <ReturnToCamera />
    </Canvas>
}

export const ReturnToCamera = () => {

    const {camera} = useThree()

    // useLayoutEffect(() => {
    //     document.querySelector("#canvas_certificate")?.addEventListener('click', (e) => {
    //         e.stopPropagation()
    //         gsap.to(camera.position,{
    //             x:0,
    //             y:0,
    //             z:5,
    //             duration: 3
    //         })
    //     })
    // })
    return null
}