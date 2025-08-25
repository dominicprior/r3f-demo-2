// @ts-nochec k

import type { ThreeElement } from "@react-three/fiber";
import { useThree, extend, useFrame, } from "@react-three/fiber"
import { useRef } from "react"
import { Mesh, Group } from 'three'
import { OrbitControls } from "three/addons";
import Custom from './custom.tsx';

declare module '@react-three/fiber' {
    interface ThreeElements {
        orbitControls: ThreeElement<typeof OrbitControls>
    }
}

extend({ OrbitControls });

export default function Experience() {
    const { camera, gl } = useThree();
    const groupRef = useRef<Group>(null);
    const sphereRef = useRef<Mesh>(null);
    useFrame((_state, _delta) => {
        // sphereRef!.current!.rotation.z += 0.01 * delta * 60;
        // groupRef!.current!.rotation.x += 0.01 * delta * 60;
    })
    return <>
        <orbitControls args={ [ camera, gl.domElement ] } />
        <directionalLight />
        <ambientLight />
        <Custom />
        <group ref={groupRef}>

            <mesh ref={sphereRef} scale={0.5}  position-x={-1}>
                <sphereGeometry args={[1.2]} />
                <meshStandardMaterial color="pink" />
            </mesh>

            <mesh scale={0.5} position-x={1}>
                <boxGeometry args={[1, 1, 3]} />
                <meshStandardMaterial color="orange" />
            </mesh>

            <mesh rotation-x={-1.57}  position-y={-1}>
                <planeGeometry args={[5, 5]} />
                <meshStandardMaterial color="yellowgreen" />
            </mesh>
        </group>
    </>
}
