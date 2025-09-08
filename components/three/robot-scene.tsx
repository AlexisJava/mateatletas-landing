"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF, Environment, ContactShadows } from "@react-three/drei"
import { Suspense, useRef, useEffect } from "react"
import * as THREE from "three"

function Robot() {
  const { scene, animations } = useGLTF("/models/robot.glb")
  const mixer = useRef<THREE.AnimationMixer>()

  useEffect(() => {
    if (animations && animations.length > 0) {
      mixer.current = new THREE.AnimationMixer(scene)
      const action = mixer.current.clipAction(animations[0])
      action.play()
    }

    // Enable shadows and enhance materials
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true
        child.receiveShadow = true

        if (child.material instanceof THREE.MeshStandardMaterial) {
          child.material.metalness = Math.max(child.material.metalness || 0.9, 0.9)
          child.material.roughness = Math.min(child.material.roughness || 0.3, 0.35)
          child.material.envMapIntensity = 1.0
          child.material.needsUpdate = true
        }
      }
    })

    return () => {
      if (mixer.current) {
        mixer.current.stopAllAction()
      }
    }
  }, [scene, animations])

  useEffect(() => {
    const animate = () => {
      if (mixer.current) {
        mixer.current.update(0.016) // ~60fps
      }
      requestAnimationFrame(animate)
    }
    animate()
  }, [])

  return <primitive object={scene} scale={1.6} position={[0, -1.5, 0]} />
}

function RobotScene() {
  return (
    <div className="w-full h-full min-h-[500px] lg:min-h-[600px]">
      <Canvas
        shadows
        camera={{ position: [4, 1, 6], fov: 50 }}
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.1,
          outputColorSpace: THREE.SRGBColorSpace,
          alpha: true,
        }}
      >
        {/* Lighting setup matching the provided code */}
        <hemisphereLight args={["#bfd4ff", "#0a0b0d", 0.55]} />
        <directionalLight
          position={[6, 10, 6]}
          intensity={1.0}
          castShadow
          shadow-mapSize={[1024, 1024]}
          shadow-camera-near={0.5}
          shadow-camera-far={50}
        />
        <directionalLight position={[-7, 5, -4]} intensity={0.45} color="#66aaff" />

        <Suspense fallback={null}>
          <Robot />
          <Environment preset="studio" />
          <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={10} blur={2} far={4} />
        </Suspense>

        <OrbitControls
          enableDamping
          dampingFactor={0.05}
          target={[0, -0.5, 0]}
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
        />
      </Canvas>
    </div>
  )
}

export default RobotScene
