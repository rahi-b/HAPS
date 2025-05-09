"use client";

import React from "react";
import Image from "next/image";
import AboutImage from "../public/Images/AboutImage.jpg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState,useEffect } from "react";
import dynamic from "next/dynamic";

const AnimationSvg = dynamic(() => import("./AnimationSvg"), { ssr: false });


export const About = () => {
  const topics = [
    "Trauma",
    "Relationships",
    "Anxiety",
    "Stress",
    "OCD",
    "Conflict",
    "Mood Disorders",
    "Chronic Illness",
    "Loneliness",
    "Anger Management",
  ];

  const stats = [
    {
      value: "98%",
      description: "Of our clients feel more confident.",
    },
    {
      value: "4.6/5",
      description: "Average rating given by our clients.",
    },
    {
      value: "90%",
      description: "Of our clients feel more optimistic.",
    },
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  
  const AnimatedStatus = ({ value}) =>{
    const [ count,setCount]= useState('0');
    useEffect(()=>{
       // Try to extract numeric part
       const numericMatch = value.match(/^([0-9.]+)(.*)$/);

     // If no match or not a number format, just display the value as is
      if (!numericMatch) {
        setCount(value);
        return;
      }

      const numericalValue = parseFloat(numericMatch[1]);
      const suffix = numericMatch[2]; // Get any non-numeric suffix
      
      if (isNaN(numericalValue)) {
        setCount(value);
        return;
      }
    
    let start = 0;
    const duration = 2000; // Animation duration in ms
    const increment = numericalValue / (duration / 30);
    const interval = setInterval(() => {
      start += increment;
      if (start >= numericalValue) {
        start = numericalValue;
        clearInterval(interval);
      }
      setCount(`${Math.round(start * 10) / 10}${suffix}`); // Append non-numeric part
    }, 30);

    return () => clearInterval(interval);
  }, [value]);

  return <span>{count}</span>;
}

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 1.2, ease: "easeOut" },
      });
    };


  }, [inView, controls]);



  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10">
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700">
          <AnimationSvg />
          ABOUT HAPS
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-14 items-center">
        <div>
          <h1 className=" text-3xl md:text-4xl font-medium tracking-tight text-gray-900 mb-6">
            Every Step Towards Mental Health Is a Step Towards a Better Life.
            Your Mind Deserves Peace and Care
          </h1>

          <p className="text-md text-gray-600 mb-6">
            We believe in providing compassionate support for your mental health
            journey. Our team of experienced professionals is dedicated to
            helping you find balance, healing, and growth in all aspects of your
            life.
          </p>

          <p className="text-md text-gray-600 mb-8">
            Whether you&apos;re facing challenges with anxiety, trauma,
            relationships, or simply seeking personal development, we offer
            personalized approaches that respect your unique experiences and
            needs.
          </p>

          <button className="inline-flex items-center px-6 py-3 border border-gray-900 text-base font-medium rounded-md text-gray-900 bg-white hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-500 cursor-pointer">
            LEARN MORE
          </button>

          <div className="mt-12 flex flex-wrap gap-2">
            {topics.map((topic, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full text-md border font-bold  bg-gray-100 text-gray-800 duration-500 hover:bg-[#201a32] hover:text-white"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={controls}
          className="relative h-96 md:h-full min-h-96"
        >
          <div className="rounded-lg overflow-hidden h-full w-full relative">
            <Image
              src={AboutImage}
              alt="People smiling in a circle"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </motion.div>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat, index) => (
          <div key={index} className="border-t border-gray-200 pt-6">
            <p className=" text-4xl md:text-5xl font-bold text-gray-900">
              {/* {stat.value} */}
              <AnimatedStatus value={stat.value} />
            </p>
            <p className="mt-2 text-md md:text-lg text-gray-600">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
