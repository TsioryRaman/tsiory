import { Canvas } from "@react-three/fiber";
import React from "react";

export const Scene: React.FC<React.ComponentProps<typeof Canvas>> = React.memo(
  (props) => {
    return (
      <Canvas id="canvas_certificate" {...props}>
        {props.children}
      </Canvas>
    );
  }
);
