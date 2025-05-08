"use client"

import { useState } from 'react';
import Image from 'next/image';
import GetStartedImage from '../public/Images/GetStarted.jpg'
import dynamic from "next/dynamic";

const AnimationSvg = dynamic(() => import("./AnimationSvg"), { ssr: false });

export const GetStarted = () => {
    return (
        <div className="relative w-full min-h-screen">
          {/* Full Background Image */}
          <div className="absolute inset-0 z-0">
            <Image 
              src={GetStartedImage}
              alt="Person with peaceful expression" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-stone-200/10"></div>
          </div>
          
          {/* Content Container */}
          <div className="relative z-10 w-full min-h-screen flex items-center justify-end p-6 md:p-12 lg:p-16">
            <div className="w-full md:w-2/3 lg:w-1/2 xl:w-5/12 ml-auto">
              <div className="bg-[#4b276c] text-white p-8 md:p-12 rounded-3xl">
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold">
          <AnimationSvg />
          GET STARTED
        </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
                  Speak Your Mind, You&apos;ll Find Your Kind
                </h1>
                
                <p className="mb-8 text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis pulvinar leo.
                </p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mt-2"></div>
                    <span>Get tailored advice from mental health professionals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mt-2"></div>
                    <span>Discuss your specific needs and create a personalized plan</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mt-2"></div>
                    <span>Confidential and compassionate support</span>
                  </li>
                </ul>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white text-black py-3 px-6 rounded-md font-medium hover:bg-black hover:text-white duration-500 transition-colors cursor-pointer">
                    GET STARTED
                  </button>
                  <button className="border border-white text-white py-3 px-6 rounded-md font-medium hover:bg-white hover:text-black duration-500 transition-colors cursor-pointer">
                    CONTACT US
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }