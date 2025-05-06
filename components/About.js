"use client";

import React from "react";
import Image from "next/image";
import AboutImage from "../public/Images/AboutImage.jpg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

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

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 1.2, ease: "easeOut" },
      });
    }
  }, [inView, controls]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10">
        <span className="inline-flex items-center gap-2 text-md font-semibold text-gray-700">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="#444444"
            >
              <path d="M12,2 L12,22 M2,12 L22,12 M4.93,4.93 L19.07,19.07 M4.93,19.07 L19.07,4.93" />
              <path
                d="M12,2 L12,22 M2,12 L22,12 M4.93,4.93 L19.07,19.07 M4.93,19.07 L19.07,4.93"
                fill="none"
                stroke="#444444"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
          ABOUT LANTERA
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-14 items-center">
        <div>
          <h1 className=" text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6">
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

          <button className="inline-flex items-center px-6 py-3 border border-gray-900 text-base font-medium rounded-md text-gray-900 bg-white hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 cursor-pointer">
            LEARN MORE
          </button>

          <div className="mt-12 flex flex-wrap gap-2">
            {topics.map((topic, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full text-md border bg-gray-100 text-gray-800 hover:bg-[#201a32] hover:text-white"
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
              {stat.value}
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
