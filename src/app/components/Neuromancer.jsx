"use client"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei'
import {  useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { useSpring, animated } from '@react-spring/three'
 export function Neuromancer({onPress}) {
    const [active ,setActive] = useState(false)
    const mesh = useRef(null)
    const model = useGLTF("https://threejstutorial-273c3c9262ac.herokuapp.com/neuromancer.glb")

    const { scale } = useSpring({ scale: active ? 0.015 : 0.009 })
    const {position} = useSpring({position: active ? [2,1.85,1.5] : [2.25,3.32,-0.1] })
    const {rotation} = useSpring({rotation : active ? [0,-0.1,0] : [0,-0.5,0]})

    const data = {
        name: "Neuromancer",
        year: "1998",
        description: "Neuromancer, William Gibson'ın dünya çapında üne kavuşmasını sağlayan ilk siberpunk romanı. 1984 yılında yayınlandıktan sonra bilimkurgunun üçlü tacı olarak adlandırılan Nebula,"+
        "Philip K. Dick'i Anma ve Hugo ödüllerini kazanmıştır. Bu Gibson'un Sprawl Üçlemesinin başlangıç romanıdır. Kitap, Türkçede önce Neuromancer adı yayınlanmış olup Matrix Avcısı adı altında yeniden yayınlanmıştır.",
        episode: "Tek Kitap",
        color: "#232D3F"
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
