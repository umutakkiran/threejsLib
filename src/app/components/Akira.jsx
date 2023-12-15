"use client"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei'
import {  useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { useSpring, animated } from '@react-spring/three'
 export function Akira({onPress}) {
    const [active ,setActive] = useState(false)
    const mesh = useRef(null)
    const model = useGLTF("http://threejstutorial-273c3c9262ac.herokuapp.com/akira.glb")

    const { scale } = useSpring({ scale: active ? 0.015 : 0.009 })
    const {position} = useSpring({position: active ? [2,1.85,1.5] : [1.97,3.35,-0.1] })
    const {rotation} = useSpring({rotation : active ? [0,-0.1,0] : [0,-0.5,0]})

    const data = {
        name: "AKIRA VOL. 4",
        year: "1982-1990",
        description: "Akira, Katsuhiro Otomo tarafından yazılan bir siberpunk manga serisidir. Seri, Aralık 1982-Haziran 1990 tarihleri arasında Kodansha'nın Weekly Shōnen Magazine dergisinde altı tankōbon cilt halinde yayınlandı. Tokyo Movie Shinsha tarafından hazırlanan bir anime filmi uyarlaması 16 Temmuz 1988 tarihinde gösterime girdi."+
        "Manga filmden daha geniş bir zaman çerçevesinde yer alır ve karakter dizisi ile ikincil olaylar daha fazladır. Çalışmanın içerdiği engin öğeler arasında Otomo, sosyal yalıtımı, yozlaşmayı ve gücü yorumlar. Otomo'nun manga ve film uyarlaması, kendisinin öncelikli olarak basılı manganın yaratımı ve tasarımı üzerine bir kariyerden neredeyse sadece anime yaratımı, yönetimi ve tasarımı ve televizyona geçişini göstermektedir."+
        " Akira, Japonya dışındada manganın popülaritesinin artmasında etkili oldu. Manga, Kodansha Manga ve Harvey Ödülleri de dahil olmak üzere birçok ödül kazandı.",
        episode: 4,
        color: "#900C3F"
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
