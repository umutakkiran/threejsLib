"use client"
import Image from 'next/image'
import ThreeScene from './components/ThreeScene'
import {  useEffect, useState } from 'react'
if (typeof window !== "undefined") import("@lottiefiles/lottie-player");

export default function Home() {
  const [bookData , setBookData] = useState({name:"" , year:""});
  const [opened , setOpened] = useState(false);

  const handleAnimationFinish = () => {
    setOpened(true)
  }

  useEffect(()=> {
    setTimeout(() => {
      handleAnimationFinish();
    }, 6500);
  },[opened])


  return (
    <div className=" w-screen h-screen overflow-hidden grid grid-cols-6">
      <div className={ opened === true ? ' bg-black absolute top-0 left-0 w-0 h-screen transition-all duration-1000 ease-in-out z-50' : ' bg-black absolute top-0 left-0 w-screen h-screen transition-all duration-1000 ease-in-out z-50'}>
      <lottie-player
              // width={25}
              style={{ width:"100%" }}
              // ref={player}
              autoplay
              mode
              src={"/transition.json"}
        ></lottie-player>
      </div>
      <div className=' col-span-6 relative flex justify-center items-center w-full h-full' >
        <ThreeScene onClick={(data) => setBookData(data)} />
      </div>
      <div className=' absolute top-0 right-0  w-1/3 h-full p-5'>
        <div  className={" flex flex-col w-full h-full rounded-lg   bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 p-5"} >
          <h1 className=' text-white text-3xl'>{bookData.name} </h1>
          <p className='text-white'>{bookData.year}</p>
          <p className='text-white'>{bookData.description}</p>
        </div>
      </div>
    </div>
  )
}
