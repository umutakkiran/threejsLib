"use client"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei'
import {  useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { useSpring, animated } from '@react-spring/three'
 export function William({onPress}) {
    const [active ,setActive] = useState(false)
    const mesh = useRef(null)
    const model = useGLTF("http://threejstutorial-273c3c9262ac.herokuapp.com/william.glb")

    const { scale } = useSpring({ scale: active ? 0.015 : 0.01 })
    const {position} = useSpring({position: active ? [2,1.85,1.5] : [1.8,3.35,-0.1] })
    const {rotation} = useSpring({rotation : active ? [0,-0.1,0] : [0,-0.5,0]})

    const data = {
        name: "Burning Chrome",
        year: "1982",
        description: "Burning Chrome is a science fiction short story by Canadian-American writer William Gibson, first published in Omni in July 1982. Gibson first read the story at a science fiction convention in Denver, Colorado in the autumn of 1981,"+
        ", to an audience of four people, among them Bruce Sterling (who Gibson later said completely got it).[1] It was nominated for a Nebula Award in 1983[2] and collected with the rest of Gibson's early short fiction in a 1986 volume of the same name.",
        episode: "Tek Kitap",
        color: "#B2B2B2"
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
