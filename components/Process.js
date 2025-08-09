"use client";

import React from "react";
import dynamic from "next/dynamic";
import { FadeInOnScroll } from "./FadeInOnScroll";

const AnimationSvg = dynamic(() => import("./AnimationSvg"), { ssr: false });

export const OurProcess = () => {
  const processSteps = [
    {
      number: "01",
      title: "ONE-ON-ONE SESSIONSTAILORED TO YOUR NEEDS",
      description:
        "We begin with a thorough assessment of your needs and goals to understand how we can best support your mental health journey.",
    },
    {
      number: "02",
      title: `A SAFE SPACE TO REFLECT,RELEASE, AND GROW`,
      description:
        "We work together to create a schedule that fits your life, ensuring consistent support through regular therapy sessions.",
    },
    {
      number: "03",
      title: "FLEXIBLE SCHEDULING THAT FITS YOUR ROUTINE",
      description:
        "Based on your unique needs, we develop personalized approaches that address your specific challenges and support your growth.",
    },
     {
      number: "04",
      title: "100% CONFIDENTIAL ANDJUDGMENT FREE",
      description:
        "Based on your unique needs, we develop personalized approaches that address your specific challenges and support your growth.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10">
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700">
          <AnimationSvg />
          OUR PROCESS
        </span>
      </div>

      <FadeInOnScroll direction="up" delay={0.1}>
        <div className="mb-10">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-meduim tracking-tight text-gray-900">
            Take a Break, Your Mental Health <br /> Deserves It
          </h2>
        </div>
      </FadeInOnScroll>

      <FadeInOnScroll direction="up" delay={0.2}>
        <div className="mb-16">
          <button className="px-4 py-2 border border-gray-900 text-base font-medium rounded-md text-gray-900 bg-white hover:bg-black hover:text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-500 cursor-pointer">
            START YOUR CONSULTATION
          </button>
        </div>
      </FadeInOnScroll>

      <FadeInOnScroll direction="up" delay={0.3}>
        <div className="grid md:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="group relative border-l px-5 border-gray-500 pt-8 rounded-md cursor-pointer overflow-hidden"
            >
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#4b276c] opacity-0 group-hover:opacity-90 translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out z-0"></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="absolute -top-30 left-5 my-8">
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-gray-900 text-white text-xl font-medium">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 my-18 group-hover:text-white transition-colors duration-300">
                  {step.title}
                </h3>
                {/* <p className="text-base text-gray-600 mb-4 group-hover:text-gray-200 transition-colors duration-300">
                  {step.description}
                </p> */}
              </div>
            </div>
          ))}
        </div>
      </FadeInOnScroll>
    </div>
  );
};
