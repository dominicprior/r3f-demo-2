import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { Mesh } from 'three'

export default function Experience() {
    const groupRef = useRef<Group>(null);
    const sphereRef = useRef<Mesh>(null);
    useFrame((_state, delta) => {
        // sphereRef!.current!.rotation.z += 0.01 * delta * 60;
        groupRef!.current!.rotation.x += 0.01 * delta * 60;
    })
    return <>
        <group ref={groupRef}>
        {/* <mesh scale={[3,2,1]} > */}
            <mesh ref={sphereRef} scale={2} rotation-z={0.3}>
                <sphereGeometry args={[1.2]} />
                <meshBasicMaterial color="pink" wireframe />
                {/* <meshNormalMaterial args={[{ wireframe: true}]} /> */}
            </mesh>
            <mesh scale={2}>
                <boxGeometry args={[0.5, 0.5, 3]} />
                <meshBasicMaterial color="orange" wireframe />
                {/* <meshNormalMaterial args={[{ wireframe: true}]} /> */}
            </mesh>
        </group>
    </>
}
