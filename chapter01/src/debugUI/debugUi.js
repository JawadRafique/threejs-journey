import { useRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";

import { useControls } from "leva";

export const Debugui = (props) => {
    const { width, height, depth } = useControls({
        width: {
            min: 1,
            max: 4,
            value: 1,
            step: 1,
        },
        height: {
            min: 1,
            max: 4,
            value: 1,
            step: 1,
        },
        depth: {
            min: 1,
            max: 4,
            value: 1,
            step: 1,
        },
    });

    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef();

    const { camera, mouse } = useThree();

    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame(() => {
        const mesh = ref.current;

        // for camera to always look at mesh
        camera.lookAt(mesh.position);
    });

    return (
        <>
            <mesh {...props} ref={ref}>
                <boxGeometry args={[width, height, depth]} />
                <meshStandardMaterial color={"red"} />
            </mesh>
        </>
    );
};
