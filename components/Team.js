"use client";

import Image from "next/image";
import Founder from "@/public/Images/henna.png";
import { motion } from "framer-motion";
import { FadeInOnScroll } from "./FadeInOnScroll";
import dynamic from "next/dynamic";

const AnimationSvg = dynamic(() => import("./AnimationSvg"), { ssr: false });

export const Team = () => {
  const founder = {
    name: "Henna Ayoob",
    role: "Founder & Chief Psychologist",
    imageSrc: Founder,
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 uppercase tracking-widest mb-6">
            <AnimationSvg />
            MEET YOUR THERAPIST
          </span>
          <FadeInOnScroll direction="up" delay={0.1}>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium text-center mx-auto text-gray-900 tracking-tight">
              Chief Psychologist
            </h2>
          </FadeInOnScroll>
        </div>

        {/* Founder Section */}
        <FadeInOnScroll direction="up" delay={0.2}>
          <div className="flex justify-center mb-16">
            <div className="mb-6 max-w-md">
              <motion.div
                whileHover="hover"
                initial="rest"
                animate="rest"
                className="relative h-96 w-full rounded-lg overflow-hidden mb-3 aspect-square"
              >
                {/* Image */}
                <Image
                  src={founder.imageSrc}
                  alt={`${founder.name} - ${founder.role}`}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
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
                {founder.name}
              </h3>
              <p className="text-gray-700 text-sm">{founder.role}</p>
            </div>
          </div>
        </FadeInOnScroll>

        {/* Description Section */}
        <FadeInOnScroll direction="up" delay={0.3}>
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <p className="text-sm md:text-lg text-gray-900">
              Our founder and Chief Psychologist, Henna Ayoob, brings over six years of deeply informed clinical experience to her practice. She is devoted to nurturing individual mental wellness and specializes in helping people navigate emotional overwhelm, build clarity, and grow from within. Experience support that is both intentional and deeply human.
            </p>
          </div>
        </FadeInOnScroll>

        {/* Contact Section */}
        <div className="text-center mb-12">
          <FadeInOnScroll direction="up" delay={0.4}>
            <button className="bg-white text-black px-6 py-3 border rounded-md text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors duration-500 cursor-pointer">
              CONTACT US
            </button>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
};