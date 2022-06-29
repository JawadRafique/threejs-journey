import { useEffect, useRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";

export const Box = (props) => {
    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef();

    const { camera, mouse } = useThree();

    // useEffect(() => {
    //     ref.current.scale.set(2, 0.5, 0.5);
    //     ref.current.rotation.reorder("YXZ");
    //     ref.current.rotation.x = Math.PI * 0.25;
    //     ref.current.rotation.y = Math.PI * 0.25;
    //     return () => {};
    // }, []);

    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame(() => {
        const mesh = ref.current;

        // for rotation of mesh
        // mesh.rotation.y = state.clock.elapsedTime;

        // for camera movement
        // camera.position.x = Math.sin(mouse.x * Math.PI * 2) * 3;
        // camera.position.z = Math.cos(mouse.x * Math.PI * 2) * 3;
        // camera.position.y = mouse.y * 3;

        // for camera to always look at mesh
        camera.lookAt(mesh.position);
    });

    return (
        <group ref={ref}>
            <mesh {...props} ref={ref}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color={"red"} />
            </mesh>
            {/* <mesh position={[2, 0, 0]}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color={"pink"} />
            </mesh> */}
        </group>
    );
};
