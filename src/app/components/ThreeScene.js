"use client"
import * as THREE from 'three';
import { MainMesh } from './MainMesh';
import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Foo } from './Foo';
import { Akira } from './Akira';
import { Neuromancer } from './Neuromancer';
import { Cup } from './Cup';
import { William } from './William';
import { data } from 'autoprefixer';
const ThreeScene = ({ onClick }) => {
   const [light , setLight] = useState("#efc070")
    
   const changeLight = (data) => {
        onClick(data)
        setLight(data.color)
   }
    return (
        <Suspense fallback={"loading"}>
            <Canvas
                
                camera={{ position: [2, 2, 2], rotation:[0,0,0] }}
            >
                <gridHelper />
                <pointLight position={ new THREE.Vector3(2,3,1)} power={80} color={light} />
                <MainMesh />
                <Akira onPress={(data)  => changeLight(data)} />
                <Neuromancer onPress={(data)  => changeLight(data)}/>
                <Cup onPress={(data)  => changeLight(data)}/>
                <William onPress={(data)  => changeLight(data)}/>
                <color attach="background" args={["black"]} />
            </Canvas>
        </Suspense>
    )
};



export default ThreeScene;