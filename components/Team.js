"use client";

import { useState } from "react";
import Image from "next/image";
import TeamImage from "../public/Images/TeamUser.jpg";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const AnimationSvg = dynamic(() => import("./AnimationSvg"), { ssr: false });

export const Team = () => {
  const teamMembers = [
    {
      name: "Wanda Youngs",
      role: "Company CEO",
      imageSrc: TeamImage,
    },
    {
      name: "Timothy Strong",
      role: "Head Marketing",
      imageSrc: TeamImage,
    },
    {
      name: "Linda Frost",
      role: "Designer",
      imageSrc: TeamImage,
    },
    {
      name: "James Wilson",
      role: "Inventory",
      imageSrc: TeamImage,
    },
    {
      name: "Tina Lawsons",
      role: "Marketing",
      imageSrc: TeamImage,
    },
    {
      name: "Thomas Stanford",
      role: "Photographer",
      imageSrc: TeamImage,
    },
    {
      name: "Lucas Damian",
      role: "Inventory",
      imageSrc: TeamImage,
    },
    {
      name: "Peter Coulson",
      role: "Web Developer",
      imageSrc: TeamImage,
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 uppercase tracking-widest mb-6">
            <AnimationSvg />
            OUR TEAM
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium text-center mx-auto text-gray-900 tracking-tight">
            Meet Our Professional
            <br />
            Team Member
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="mb-6">
              <motion.div
                whileHover="hover"
                initial="rest"
                animate="rest"
                className="relative h-80 w-full rounded-lg overflow-hidden mb-3"
              >
                {/* Image */}
                <Image
                  src={member.imageSrc}
                  alt={`${member.name} - ${member.role}`}
                  fill
                  priority={index < 4}
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />

                {/* Hover Overlay */}
                <motion.div
                  variants={{
                    rest: { y: "100%", opacity: 0 },
                    hover: { y: 0, opacity: 0.5 },
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute inset-0 bg-black"
                />
              </motion.div>

              <h3 className="font-medium text-lg text-gray-900">
                {member.name}
              </h3>
              <p className="text-gray-700 text-sm">{member.role}</p>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="text-center mb-12">
          <p className="mb-6 text-sm md:text-3xl text-gray-900">
            Join us and get an unforgettable <br /> experience
          </p>
          <button className="bg-white text-black px-6 py-3 border rounded-md text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors duration-500 cursor-pointer">
            CONTACT US
          </button>
        </div>
      </div>
    </section>
  );
};
