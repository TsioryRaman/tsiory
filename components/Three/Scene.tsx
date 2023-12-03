import {Canvas} from "@react-three/fiber";
import React, { PropsWithChildren } from "react";

export const Scene:React.FC = React.memo((props:PropsWithChildren<any>) => {
    return <Canvas id="canvas_certificate" {...props}>
        {props.children}
    </Canvas>
})
