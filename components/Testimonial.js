"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import client1 from "@/public/Images/client1.jpeg";
import client2 from "@/public/Images/client2.jpeg";
import client3 from "@/public/Images/client3.jpeg";
import { FadeInOnScroll } from "./FadeInOnScroll";
import dynamic from "next/dynamic";

const AnimationSvg = dynamic(() => import("./AnimationSvg"), { ssr: false });

export const Testimonial = () => {
  const testimonials = [
  {
    id: 1,
    rating: "⭐️⭐️⭐️⭐️⭐️",
    title: "Mental health is essential",
    content: `Hi ma'am, your support means a lot. The way you advise feels like chatting with a friend. Your guidance has shown me how to manage different aspects of my life, especially in areas where I lack confidence. Thank you for your help!`,
    author: "Samuel Reyes",
    role: "Haps's Client",
    avatar: client1,
  },
  {
    id: 2,
    rating: "⭐️⭐️⭐️⭐️⭐️",
    title: "Speak up for mental health",
    content: `I still remember the first time I came to see you and my mindset at that time. I was totally disturbed and confused. The way you interacted with me and the tips you gave felt so soothing. I truly appreciate how you spoke with me and the advice you shared. The routine map you suggested helped heal my wounds. I understood the root cause of my issues and how to remove them from my life. Thank you from the bottom of my heart.`,
    author: "Amanda Young",
    role: "Haps's Client",
    avatar: client3,
  },
  {
    id: 3,
    rating: "⭐️⭐️⭐️⭐️⭐️",
    title: "Strong minds, strong lives",
    content: "Suspendisse eu blandit augue. Nam ut lectus venenatis, sodales dui at, tristique odio. Aliquam blandit tristique augue, sit amet suscipit orci ultricies sit amet.",
    author: "Lucas Brown",
    role: "Haps's Client",
    avatar: client2,
  },
];
  const sliderRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const wrapper = wrapperRef.current;
    if (!slider || !wrapper) return;

    const totalWidth = slider.scrollWidth / 2;
    let position = 0;
    const speed = 0.4;
    let requestId;

    const animate = () => {
      position -= speed;
      if (position <= -totalWidth) position = 0;
      slider.style.transform = `translateX(${position}px)`;
      requestId = requestAnimationFrame(animate);
    };

    const handleHover = () => cancelAnimationFrame(requestId);
    const handleHoverEnd = () => (requestId = requestAnimationFrame(animate));

    requestId = requestAnimationFrame(animate);
    wrapper.addEventListener("mouseenter", handleHover);
    wrapper.addEventListener("mouseleave", handleHoverEnd);

    return () => {
      cancelAnimationFrame(requestId);
      wrapper.removeEventListener("mouseenter", handleHover);
      wrapper.removeEventListener("mouseleave", handleHoverEnd);
    };
  }, []);

  return (
    <section className="py-16 w-full mx-auto overflow-hidden ">
      {/* Section Header */}
      <div className="text-center mb-16">
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 uppercase tracking-widest">
          <AnimationSvg />
          TESTIMONIALS
        </span>
        <FadeInOnScroll direction="up" delay={0.1}>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium mt-6 mb-12 tracking-tight text-gray-900">
            Honest Reviews From Our
            <br />
            Clients
          </h2>
        </FadeInOnScroll>
      </div>

      <div className="overflow-hidden w-full py-12" ref={wrapperRef}>
        <FadeInOnScroll direction="up" delay={0.2}>
          <div
            ref={sliderRef}
            className="flex whitespace will-change-transform transition-transform ease-linear"
          >
            {[...Array(2)].flatMap((_, cloneIndex) =>
              testimonials.map((testimonial, index) => (
                <div
                  key={`${testimonial.id}-${cloneIndex}`}
                  className="border border-gray-200 rounded-lg flex flex-col justify-between  p-6 mx-4 min-w-[350px] max-w-xs flex-shrink-0 bg-white/80 backdrop-blur-sm shadow-xl"
                >
                  <div className="text-xs  mb-6">{testimonial.rating}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {testimonial.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6">
                    {testimonial.content}
                  </p>
                  <div className="flex items-center">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-3">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.author || "name"}
                        width={1000}
                        height={10}
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <p className="text-sm font-medium text-gray-400 mb-2">
                        {testimonial.author}
                      </p>
                      <p className="text-gray-500 text-xs mb-3">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
};
