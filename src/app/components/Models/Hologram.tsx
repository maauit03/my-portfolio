'use client';

import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber'
import React from 'react'

const Hologram = () => {
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
        <ambientLight intensity={0.2} color="#1a1a40"></ambientLight>
        <directionalLight position={[5,5,5]} intensity={3} />
        <OrbitControls
        enablePan={false}
        enableZoom={false}
        />
        <mesh>
            <boxGeometry args={[4,4,4]}/>
            <meshStandardMaterial color="grey"/>
        </mesh>
    </Canvas>
  )
}

export default Hologram
