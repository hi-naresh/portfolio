import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { useGLTF, PerspectiveCamera, useAnimations, useEnvironment, MeshTransmissionMaterial, Html, useScroll } from '@react-three/drei'
import { useFrame, useLoader, useThree } from '@react-three/fiber'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
export default function Model(props) {
  const group = useRef()
  const meshRef = useRef()
  const screen = useRef()
  const naresh = useRef()
  const stand = useRef()
  const timeRef = useRef(0)
  const scene = useRef()

  const { nodes, materials, animations } = useGLTF('/model.glb')
  const { actions } = useAnimations(animations, scene)
  const envMap1 = useEnvironment({ files: './assets/lights.hdr' })
  const tl = useRef()
  const scroll = useScroll()
  // const { camera } = useThree()

  useFrame((state, delta) => {
    tl.current.seek(scroll.offset * tl.current.duration())
  })

  useFrame((state, delta) => {
    timeRef.current += delta * 2
    meshRef.current.position.y = Math.sin(timeRef.current) * 0.1

    timeRef.current += delta * 0.0001
    scene.current.rotation.z = -Math.sin(timeRef.current) * 0.3
  })

  useLayoutEffect(() => {
    tl.current = gsap.timeline({ defaults: { duration: 2, ease: 'easeInOut' }, paused: true })

    tl.current
      .to(meshRef.current.position, { x: -0.4, y:0.4,z: -1.8 }, 0)
      .to(meshRef.current.rotation, { x: 0 }, 1)
      .to(screen.current.scale, { z: 0.2 }, 1)
      .to(stand.current.position, { y: -1.24 }, 1)
      .to(naresh.current.rotation, { x: 0 }, 1)
      .to(scene.current.position, { x: 2 }, 1)
      .to(meshRef.current.position, { x:2 }, 1)
      .to(meshRef.current.rotation, { y: 1.5 }, 1)
      // .to(meshRef.current.scale, { x:1.5,y:1.5,z: 1.5 }, 1)
  }, [])

  useEffect(() => {
    actions.typing.play()
  }, [])
  return (
    <group ref={scene} {...props} dispose={null}>
      <group ref={meshRef} name="Scene" position={[-2.4, -2.4, -1.8]} rotation={[0, 0.89, 0]} >
        <group ref={naresh} name="naresh" position={[-0.02, -2, -0.03]} >
          <primitive object={nodes.Hips} />
            <skinnedMesh name="avaturn_body001" geometry={nodes.avaturn_body001.geometry} material={materials.avaturn_body_material} skeleton={nodes.avaturn_body001.skeleton} />
            <skinnedMesh name="avaturn_body001_1" geometry={nodes.avaturn_body001_1.geometry} material={materials.avaturn_hair_0_material} skeleton={nodes.avaturn_body001_1.skeleton} />
          <skinnedMesh name="Wolf3D_Body" geometry={nodes.Wolf3D_Body.geometry} material={materials['Wolf3D_Body.001']} skeleton={nodes.Wolf3D_Body.skeleton} />
          <skinnedMesh name="Wolf3D_Outfit_Bottom" geometry={nodes.Wolf3D_Outfit_Bottom.geometry} material={materials['Wolf3D_Outfit_Bottom.003']} skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton} />
          <skinnedMesh name="Wolf3D_Outfit_Footwear" geometry={nodes.Wolf3D_Outfit_Footwear.geometry} material={materials['Wolf3D_Outfit_Footwear.002']} skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton} />
          <skinnedMesh name="Wolf3D_Outfit_Top" geometry={nodes.Wolf3D_Outfit_Top.geometry} material={materials['Wolf3D_Outfit_Top.003']} skeleton={nodes.Wolf3D_Outfit_Top.skeleton} />
        </group>
        <mesh
          name="half_sphere"
          geometry={nodes.half_sphere.geometry}
          material={materials['avaturn_glasses_0_material.002']}
          position={[0.03, -0.59, -0.01]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.71}>
          <MeshTransmissionMaterial
            roughness={0.4}
            metalness={0.6}
            // envMap={envMap1}
            // color="rgb(90,140,200)"
            resolution={128}
            thickness={0.4}
            anisotropy={1}
            temporalDistortion={0.2}
            distortion={0.15}
          />
        </mesh>
        <mesh
          name="base_bottom"
          geometry={nodes.base_bottom.geometry}
          material={materials['avaturn_glasses_0_material.002']}
          position={[0.03, -0.59, -0.01]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.71}>
          <MeshTransmissionMaterial
            roughness={0.4}
            metalness={0.3}
            envMap={envMap1}
            // color="rgb(255,200,255)"
            resolution={128}
            thickness={2}
            anisotropy={1}
            temporalDistortion={0.9}
            distortion={0.2}
          />
        </mesh>
        <mesh
          name="sheet"
          geometry={nodes.sheet.geometry}
          material={materials['Wolf3D_Glasses.002']}
          position={[0.03, -0.59, -0.01]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.71}>
          <MeshTransmissionMaterial
            roughness={0.6}
            metalness={0.9}
            // envMap={envMap}
            // color="rgb(55,0,200)"
            // resolution={128}
            thickness={0.1}
            anisotropy={10}
            temporalDistortion={0.2}
            distortion={0.1}
          />
        </mesh>
        <mesh
          name="seat"
          geometry={nodes.seat.geometry}
          material={materials['Material.018']}
          position={[0.03, -0.59, -0.01]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.71}>
          <MeshTransmissionMaterial
            roughness={0.9}
            metalness={0.2}
            envMap={envMap1}
            color="rgb(60,140,220)"
            resolution={128}
            thickness={0.4}
            anisotropy={1}
            temporalDistortion={0.2}
            distortion={0.15}
          />
        </mesh>
        <mesh
          name="chair_base"
          geometry={nodes.chair_base.geometry}
          material={materials['Material.019']}
          position={[0.03, -0.59, -0.01]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.71}>
          <MeshTransmissionMaterial
            roughness={0.3}
            metalness={0.6}
            // envMap={envMap1}
            // color="rgb(90,140,200)"
            resolution={128}
            thickness={0.4}
            anisotropy={1}
            temporalDistortion={0.2}
            distortion={0.15}
          />
        </mesh>
        <mesh
          name="chair_base1"
          geometry={nodes.chair_base1.geometry}
          material={materials['Material.020']}
          position={[0.03, -0.59, -0.01]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.71}>
          <MeshTransmissionMaterial
            roughness={0.3}
            metalness={0.6}
            // envMap={envMap1}
            // color="rgb(90,140,200)"
            resolution={128}
            thickness={0.7}
            anisotropy={1}
            temporalDistortion={0.2}
            distortion={0.15}
          />
        </mesh>
        <mesh
          name="rod"
          geometry={nodes.rod.geometry}
          material={materials['Material.021']}
          position={[0.03, -0.59, -0.01]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.71}>
          <MeshTransmissionMaterial
            roughness={0.6}
            metalness={0.2}
            // envMap={envMap1}
            // color="rgb(90,140,200)"
            resolution={128}
            thickness={0.4}
            anisotropy={1}
            temporalDistortion={0.2}
            distortion={0.15}
          />
        </mesh>
        <mesh
          ref={screen}
          name="screens"
          geometry={nodes.screens.geometry}
          material={materials['avaturn_glasses_1_material.003']}
          position={[0.03, -0.59, 0.03]}
          rotation={[Math.PI / 2, 0, -2.7]}
          scale={0.79}>
          <MeshTransmissionMaterial roughness={0.3} metalness={0.1} thickness={0.2} anisotropy={5} temporalDistortion={0} distortion={0} />
        </mesh>
        <mesh
          ref={stand}
          name="stand"
          geometry={nodes.stand.geometry}
          material={materials['avaturn_glasses_0_material.002']}
          position={[0.03, -0.59, 0.03]}
          rotation={[Math.PI / 2, 0, -2.69]}
          scale={0.79}
        />
      </group>
      <pointLight name="Point" intensity={1.06535} decay={2}   />
      <PerspectiveCamera
        name="Camera"
        makeDefault={true}
        fov={20}
        far={1000}
        near={0.1}
        position={[10.19, 2.09, -1.8]}
        rotation={[-Math.PI / 2, 1.43, Math.PI / 2]}
      />
    </group>
  )
}

useGLTF.preload('/model.glb')
