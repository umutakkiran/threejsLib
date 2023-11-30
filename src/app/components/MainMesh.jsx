"use client"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei'
import {  useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { useSpring, animated } from '@react-spring/three'
 export function MainMesh() {
    const [active ,setActive] = useState(false)
    const mesh = useRef(null)
    const model = useGLTF("http://localhost:3000/room/scene.gltf")

    

    useFrame(() => {
        mesh.current.rotation.y += 0.0000;
     });
    return (
        <animated.mesh position={[0.2,0.35,3]} rotation={[0,0,0]} ref={mesh}
        >
        <primitive object={model.scene} />
        </animated.mesh>
    )
  }