import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { Mesh } from 'three'

export default function Experience() {
    const sphereRef = useRef<Mesh>(null);
    useFrame(() => {
        sphereRef!.current!.rotation.z += 0.01;
    })
    return <>
        {/* <mesh scale={[3,2,1]} > */}
        <mesh ref={sphereRef} scale={2} rotation-z={0.3}>
            <sphereGeometry args={[1.2]} />
            <meshBasicMaterial color="pink" wireframe />
            {/* <meshNormalMaterial args={[{ wireframe: true}]} /> */}
        </mesh>
    </>
}
