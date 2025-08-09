"use client";

import React from "react";
import Image from "next/image";
import WhyChooseImage from "@/public/Images/WhyChoose.jpg";
import { FadeInOnScroll } from "./FadeInOnScroll";
import dynamic from "next/dynamic";

const AnimationSvg = dynamic(() => import("./AnimationSvg"), { ssr: false });

export const WhyChooseUs = () => {
  const benefits = [
    {
      icon: "user",
      title: "Worksheets to reflect, reset, and grow between sessions",
    },
    {
      icon: "moon",
      title: "🔄Follow up Support so you feel guided beyond the session ",
      description:
        "We create customized treatment plans tailored to your unique needs and personal growth journey.",
    },
    {
      icon: "calendar",
      title: "Emotional Tools to understand your patterns and feel more in control",
      description:
        "We offer convenient session times that fit into your busy life, including evenings and weekends.",
    },
      {
      icon: "calendar",
      title: "👥A Compassionate Team offering care that is grounded, skilled, and human",
      description:
        "We offer convenient session times that fit into your busy life, including evenings and weekends.",
    },
  ];

  return (
    <div className="flex flex-col-reverse md:flex-row md:h-lvh">
      {/* Left side - Image */}
      <div className="w-full md:w-1/2 h-96 md:h-auto relative">
        <Image
          src={WhyChooseImage}
          alt="People smiling in a circle"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Right side - Content */}
      <div className="w-full md:w-1/2 bg-[#4b276c] text-white p-8 md:p-12 lg:p-16">
        <div className="mb-4">
          <span className="inline-flex items-center gap-2 text-sm font-semibold">
            <AnimationSvg />
            WHY CHOOSE HAPS
          </span>
        </div>
        <FadeInOnScroll direction="up" delay={0.1}>
          <h2 className="text-3xl md:text-6xl font-meduim mb-6">
            Your Mind Deserves Peace and Care
          </h2>
        </FadeInOnScroll>

        <FadeInOnScroll direction="up" delay={0.2}>
          <p className="text-gray-200 mb-12">
            We believe in a holistic approach to mental health, providing
            compassionate support and evidence-based treatments in a safe,
            welcoming environment.
          </p>
        </FadeInOnScroll>

        <div className="space-y-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start">
              <FadeInOnScroll direction="up" delay={0.3}>
                <div className="mr-4 mt-1">
                  {benefit.icon === "user" && (
                    <div className="bg-white rounded-full p-2 text-green-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                  )}
                  {benefit.icon === "moon" && (
                    <div className="bg-white rounded-full p-2 text-green-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                        />
                      </svg>
                    </div>
                  )}
                  {benefit.icon === "calendar" && (
                    <div className="bg-white rounded-full p-2 text-green-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </FadeInOnScroll>

              <FadeInOnScroll direction="up" delay={0.4}>
                <div>
                  <h3 className="text-xl font-medium mb-2">{benefit.title}</h3>
                  {/* <p className="text-gray-300">{benefit.description}</p> */}
                </div>
              </FadeInOnScroll>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
