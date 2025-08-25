import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import './App.css'

export default function App() {

      return (
        <>
            <p>
                hello
            </p>
            <Canvas>
                <mesh>
                    <torusKnotGeometry />
                    <meshNormalMaterial />
                </mesh>
            </Canvas>
        </>
    )
}
