import { useEffect, useRef, useMemo } from "react";
import { BufferGeometry } from "three";

export default function Custom() {
    const bgRef = useRef<BufferGeometry>(null);
    useEffect(() => bgRef!.current!.computeVertexNormals());
    const positions = useMemo(() => new Float32Array([
            -1, -1, 0,   1, -1, 0,   1, 0, -2,]), [ ]);
    return <mesh>
        <bufferGeometry ref={bgRef}>
            <bufferAttribute
                attach="attributes-position"
                args={[positions, 3]}
            />
        </bufferGeometry>
        <meshStandardMaterial color="purple" />
    </mesh>
}
