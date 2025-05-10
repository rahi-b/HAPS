"use client";

import { useState } from "react";
import Image from "next/image";
import GetStartedImage from "../public/Images/GetStarted.jpg";
import { FadeInOnScroll } from "./FadeInOnScroll";
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
          <FadeInOnScroll direction="up" delay={0.1}>
            <div className="bg-[#4b276c] text-white p-8 md:p-12 rounded-3xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-2 text-sm font-semibold">
                  <AnimationSvg />
                  GET STARTED
                </span>
              </div>
              <FadeInOnScroll direction="up" delay={0.2}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
                  Speak Your Mind, You&apos;ll Find Your Kind
                </h1>
              </FadeInOnScroll>

              <FadeInOnScroll direction="up" delay={0.3}>
                <p className="mb-8 text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis pulvinar leo.
                </p>
              </FadeInOnScroll>

              <ul className="space-y-3 mb-8">
                <FadeInOnScroll direction="up" delay={0.4}>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mt-2"></div>
                    <span>
                      Get tailored advice from mental health professionals
                    </span>
                  </li>
                </FadeInOnScroll>
                <FadeInOnScroll direction="up" delay={0.5}>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mt-2"></div>
                    <span>
                      Discuss your specific needs and create a personalized plan
                    </span>
                  </li>
                </FadeInOnScroll>
                <FadeInOnScroll direction="up" delay={0.6}>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mt-2"></div>
                    <span>Confidential and compassionate support</span>
                  </li>
                </FadeInOnScroll>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <FadeInOnScroll direction="up" delay={0.7}>
                  <button className="bg-white text-black py-3 px-6 rounded-md font-medium hover:bg-black hover:text-white duration-500 transition-colors cursor-pointer">
                    GET STARTED
                  </button>
                </FadeInOnScroll>
                <FadeInOnScroll direction="up" delay={0.8}>
                  <button className="border border-white text-white py-3 px-6 rounded-md font-medium hover:bg-white hover:text-black duration-500 transition-colors cursor-pointer">
                    CONTACT US
                  </button>
                </FadeInOnScroll>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </div>
  );
};
