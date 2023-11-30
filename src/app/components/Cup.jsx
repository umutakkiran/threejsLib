"use client"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei'
import {  useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { useSpring, animated } from '@react-spring/three'
 export function Cup({onPress}) {
    const [active ,setActive] = useState(false)
    const mesh = useRef(null)
    const model = useGLTF("http://localhost:3000/cup.glb")

    const { scale } = useSpring({ scale: active ? 0.01 : 0.005 })
    const {position} = useSpring({position: active ? [2,1.85,1.5] : [2,1.35,1.2] })
    const {rotation} = useSpring({rotation : active ? [0,-0.1,0] : [0,-0.5,0]})

    const data = {
        name: "Starbukcs",
        year: "",
        description:"Sıradan bir kahve"
    }

    useFrame(() => {
        active ? 
        mesh.current.rotation.y += 0.003 :
        null
     });
    return (
        <animated.mesh position={position} rotation={rotation} scale={scale} onClick={() =>{ setActive(!active) ; onPress(data)}} ref={mesh}
        >
        <primitive object={model.scene} />
        </animated.mesh>
    )
  }