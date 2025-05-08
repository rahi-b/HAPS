"use client";

import { useState } from "react";
import Image from "next/image";
import FamilyService from "../public/Images/FamilyService.jpg";
import IndividualService from "../public/Images/IndividualService.jpg";
import CoupleService from "../public/Images/CoupleService.jpg";
import dynamic from "next/dynamic";

const AnimationSvg = dynamic(() => import("./AnimationSvg"), { ssr: false });

export const Service = () => {
  return (
    <section className="bg-stone-200 py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 uppercase tracking-widest mb-4">
           <AnimationSvg />
            OUR SERVICES
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium mt-6 mb-12 tracking-tight text-gray-900">
            Creating a World Where Mental Health <br /> Is Valued
          </h2>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Individual Therapy Card */}
          <div
            className="bg-white rounded-xl overflow-hidden"
            style={{
              boxShadow:
                "0 15px 30px rgba(0,0,0,0.1), -20px 0 30px rgba(0,0,0,0.05)",
              border: "3px solid white",
            }}
          >
            <div
              className="rounded-lg overflow-hidden h-full w-full relative"
              style={{ height: "240px" }}
            >
              <Image
                src={IndividualService}
                alt="Individual therapy session"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="p-6">
              <h3 className=" text-xl md:text-2xl font-semibold mb-2 text-gray-900">
                Individuals
              </h3>
              <p className="text-gray-600 mb-6 text-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit tellus,
                luctus nec ullamcorper.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-black mt-2 mr-2"></span>
                  <span className="text-md text-gray-700">
                    Personalized Therapy Plans
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-black mt-2 mr-2"></span>
                  <span className="text-md text-gray-700">
                    Flexible Scheduling
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-black mt-2 mr-2"></span>
                  <span className="text-md text-gray-700">
                    Private Online Session
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Couple Therapy Card */}
          <div
            className="bg-white rounded-lg overflow-hidden shadow-sm"
            style={{
              boxShadow:
                "0 15px 30px rgba(0,0,0,0.1), -20px 0 30px rgba(0,0,0,0.05)",
              border: "3px solid white",
            }}
          >
            <div
              className="rounded-lg overflow-hidden h-full w-full relative"
              style={{ height: "240px" }}
            >
              <Image
                src={CoupleService}
                alt="Individual therapy session"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl md:text-2xl font-semibold mb-2 text-gray-900">
                Couple
              </h3>
              <p className="text-gray-600 mb-6 text-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit tellus,
                luctus nec ullamcorper.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-black mt-2 mr-2"></span>
                  <span className="text-md text-gray-700">
                    Conflict Resolution
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-black mt-2 mr-2"></span>
                  <span className="text-md text-gray-700">
                    Strengthening Intimacy
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-black mt-2 mr-2"></span>
                  <span className="text-md text-gray-700">
                    Communication Strategy
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Family Therapy Card */}
          <div
            className="bg-white rounded-lg overflow-hidden shadow-sm"
            style={{
              boxShadow:
                "0 15px 30px rgba(0,0,0,0.1), -20px 0 30px rgba(0,0,0,0.05)",
              border: "3px solid white",
            }}
          >
            <div
              className="rounded-lg overflow-hidden h-full w-full relative"
              style={{ height: "240px" }}
            >
              <Image
                src={FamilyService}
                alt="Individual therapy session"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl md:text-2xl font-semibold mb-2 text-gray-900">
                Families
              </h3>
              <p className="text-gray-600 mb-6 text-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit tellus,
                luctus nec ullamcorper.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-black mt-2 mr-2"></span>
                  <span className="text-md text-gray-700">
                    Addressing Family Problems
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-black mt-2 mr-2"></span>
                  <span className="text-md text-gray-700">
                    Individual Family Needs
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="h-1.5 w-1.5 rounded-full bg-black mt-2 mr-2"></span>
                  <span className="text-md text-gray-700">
                    Coping Strategies for Changes
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center mb-12">
          <p className="mb-6 text-sm md:text-xl text-gray-900">
            Can&apos;t find the service you need? Contact us now for a <br />{" "}
            consultation.
          </p>
          <button className="bg-black text-white px-6 py-3 border rounded-md text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-colors duration-500 cursor-pointer">
            CONTACT US
          </button>
        </div>
      </div>
    </section>
  );
};
