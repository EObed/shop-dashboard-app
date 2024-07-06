'use client';
import React from 'react';
import Lottie from "lottie-react";
import dashboardAnimation from './../dashboard.json';
import { IoLogInOutline } from "react-icons/io5";

const LandingPage = () => {
  return (
    <div className='w-full h-full flex flex-col items-center'>
      <h1 className="sm:text-xs md:text-2xl lg:text-xl font-bold">Welcome to the Shop Dashboard App</h1>
      <div className="py-3 sm:w-[50%] sm:h-[50%] md:w-[70%] md:h-[70%] lg:w-[30%] h-[30%]"><Lottie animationData={dashboardAnimation}/></div>
      <button className='flex border rounded-md w-fit items-center h-fit p-2'><div className='mr-2'>Sign In</div><IoLogInOutline/></button>
    </div>
  )
}

export default LandingPage