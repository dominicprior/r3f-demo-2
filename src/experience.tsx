// @ts-nochec k

import type { ThreeElement } from "@react-three/fiber"
import { useThree, extend, useFrame,  } from "@react-three/fiber"
import { useRef } from "react"
import { Mesh, Group } from 'three'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// import { OrbitControls } from "three/examples/jsm/Addons.js";

extend({ OrbitControls });

// declare global {
//   namespace JSX {
//     interface IntrinsicElements {
//       'orbitControls': ThreeElement<OrbitControls, typeof OrbitControls>;
//     }
//   }
// }

export default function Experience() {
    const { camera, gl } = useThree();
    console.log(gl)
    const groupRef = useRef<Group>(null);
    const sphereRef = useRef<Mesh>(null);
    useFrame((_state, delta) => {
        // sphereRef!.current!.rotation.z += 0.01 * delta * 60;
        groupRef!.current!.rotation.x += 0.01 * delta * 60;
    })
    return <>
        <orbitControls args={ [ camera, gl.domElements ] } />
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
