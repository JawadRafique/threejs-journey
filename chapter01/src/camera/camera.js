import { OrthographicCamera, PerspectiveCamera } from "@react-three/drei";
import React from "react";
import { useThree } from "@react-three/fiber";

export const Camera = () => {
    const { size, viewport } = useThree();

    // for OrthographicCamera
    // const aspectRatio = size.width / size.height;
    console.log(viewport);
    return (
        // <OrthographicCamera
        //     position={[2, 2, 2]}
        //     left={-1 * aspectRatio}
        //     right={1 * aspectRatio}
        //     top={1}
        //     bottom={-1}
        //     near={0.1}
        //     far={100}
        //     makeDefault
        // />

        <PerspectiveCamera
            position={[0, 0, 5]}
            fov={75}
            aspect={size.width / size.height}
            near={0.1}
            far={100}
            makeDefault
        />
    );
};
