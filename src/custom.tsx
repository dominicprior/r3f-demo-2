export default function Custom() {
    const positions = new Float32Array([
            -1, -1, 0,    1, -1, 0,    1, 1, 0,]);
    return <mesh>
        <bufferGeometry>
            <bufferAttribute
                attach="attributes-position"
                args={[positions, 3]}
            />
        </bufferGeometry>
        <meshBasicMaterial color="purple" />
    </mesh>
}
