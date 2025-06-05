'use client';

import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber'
import React, { useRef } from 'react'
import { Goldbar } from './Goldbar'

const Hologram = () => {
  const controlsRef = useRef(null)

  return (
    <Canvas className='w-full h-full' camera={{ position: [-10, 5, 5], fov: 12 }}>
      <ambientLight intensity={0.5} color="#1a1a40" />
      <directionalLight position={[5, 5, 3]} intensity={10} />
      <directionalLight position={[-5, -5, -3]} intensity={10} />

      <OrbitControls
        ref={controlsRef}
        enablePan={false}
        enableZoom={false}
      />
      <Goldbar controlsRef={controlsRef} />
    </Canvas>
  )
}

export default Hologram
