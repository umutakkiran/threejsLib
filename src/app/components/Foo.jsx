"use client"
import { useThree } from '@react-three/fiber'
import { useEffect } from 'react';
import * as THREE from 'three';
export function Foo() {
  const set = useThree((state) => state.set)
  
  useEffect(() => {
    set({ gl : new THREE.WebGLRenderer({ alpha: true })})
  }, [])

}