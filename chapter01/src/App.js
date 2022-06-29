import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Camera } from "./camera/camera";
import { Box } from "./mesh/mesh";

function App() {
    return (
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            {/* Week2 (07) */}
            <OrbitControls enableDamping />
            <Camera />

            {/* Week1 (01-06) */}
            <Box position={[0, 0, 0]} />
        </Canvas>
    );
}

export default App;
