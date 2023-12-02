import {Canvas} from "@react-three/fiber";
import { PropsWithChildren } from "react";

export const Scene:React.FC = (props:PropsWithChildren<any>) => {
    return <Canvas id="canvas_certificate" {...props}>
        {props.children}
    </Canvas>
}