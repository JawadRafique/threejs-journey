import { useEffect, useRef, useState } from "react";
import { useThree, useFrame } from "@react-three/fiber";

export const Geometries = (props) => {
    const [vertices, setVertices] = useState([]);

    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef();

    const { camera, mouse } = useThree();

    useFrame(() => {
        /* Checking if the ref is not null. */
        if (ref.current) {
            const mesh = ref.current;
            camera.lookAt(mesh.position);
        }
    });

    useEffect(() => {
        // Number of triangles
        const count = 100;

        // Vertices
        /* Creating a new Float32Array with the length of count * 3 * 3. */
        // first *3 is for each triangle will be composed of three vertices, and each vertics will be composed of three values (x,y,z)
        const vertices = new Float32Array(count * 3 * 3);

        /* Creating a random number between -2 and 2 and assigning it to each of the vertices. */
        for (let i = 0; i < count * 3 * 3; i++) {
            vertices[i] = (Math.random() - 0.5) * 4;
        }

        // setVeritices state
        setVertices(vertices);

        return () => {};
    }, []);

    return (
        <>
            {vertices.length > 0 && (
                <mesh {...props} ref={ref}>
                    <bufferGeometry
                        attach="geometry"
                        /* A function that is called when the geometry is updated. */
                        onUpdate={(self) => self.computeVertexNormals()} // for colors to work
                    >
                        <bufferAttribute
                            attach="attributes-position"
                            count={vertices.length / 3}
                            array={vertices}
                            itemSize={3}
                        />
                    </bufferGeometry>
                    <meshStandardMaterial color={"red"} wireframe />
                </mesh>
            )}
        </>
    );
};
