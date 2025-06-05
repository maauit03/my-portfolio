import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Goldbar({ controlsRef }) {
  const ref = useRef()
  const { nodes, materials } = useGLTF('models/Goldbar.glb')

  useFrame(() => {
    const controls = controlsRef.current
    if (ref.current && controls && !controls?.dragging) {
      // Very slow rotation when idle
      ref.current.rotation.y += 0.002
    }
  })

  return (
    <group ref={ref} dispose={null}>
      <mesh
        geometry={nodes.Cube.geometry}
        material={materials['Material.002']}
        position={[0, -0.5, 0]}
        scale={[1.228, 1, 0.69]}
      />
    </group>
  )
}
