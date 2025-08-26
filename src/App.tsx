import { Canvas } from '@react-three/fiber'
import './App.css'
import Experience from './experience.tsx'

export default function App() {

    return (
        <Canvas
            camera={ {
                fov: 45,
                position: [6, 6, 6],
            } }
        >
            <Experience />
        </Canvas>
    )
}
