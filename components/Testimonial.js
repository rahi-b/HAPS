"use client";

import { useEffect,useRef } from "react";
import Image from "next/image";
import Ajnas from "../public/Images/Ajnas2.jpg";
import dynamic from "next/dynamic";

const AnimationSvg = dynamic(() => import("./AnimationSvg"), { ssr: false });

export const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      rating: '⭐️⭐️⭐️⭐️⭐️',
      title: "Mental health is essential",
      content:
        "Morbi id varius nisi. Curabitur vel sodales quam, vel condimentum lorem. Proin eu urna sit amet augue scelerisque mollis et vel neque ultrices massa sapien, nec rhoncus.",
      author: "Samuel Reyes",
      role: "Lantera's Client",
      avatar: Ajnas ,
    },
    {
      id: 2,
      rating: '⭐️⭐️⭐️⭐️⭐️',
      title: "Speak up for mental health",
      content:
        "Donec vitae quam id sem convallis rhoncus. Pellentesque nec interdum erat. Duis laoreet ex dui. Quisque ut tortor nec lorem finibus lobortis aliquet quis magna.",
      author: "Amanda Young",
      role: "Lantera's Client",
      avatar: Ajnas 
    },
    {
      id: 3,
      rating: '⭐️⭐️⭐️⭐️⭐️',
      title: "Strong minds, strong lives",
      content:
        "Suspendisse eu blandit augue. Nam ut lectus venenatis, sodales dui at, tristique odio. Aliquam blandit tristique augue, sit amet suscipit orci ultricies sit amet.",
      author: "Lucas Brown",
      role: "Lantera's Client",
      avatar: Ajnas
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
    <section className="py-16 px-4 w-full mx-auto overflow-hidden">

      {/* Section Header */}
      <div className="text-center mb-16">
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 uppercase tracking-widest">
          <AnimationSvg />
          TESTIMONIALS
        </span>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium mt-6 mb-12 tracking-tight text-gray-900">
          Honest Reviews From Our
          <br />
          Clients
        </h2>
      </div>

      <div className="overflow-hidden w-full py-12" ref={wrapperRef}>
      <div
        ref={sliderRef}
        className="flex whitespace will-change-transform transition-transform ease-linear"
      >
        {[...Array(2)].flatMap((_, cloneIndex) =>
          testimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${cloneIndex}`}
              className="border border-gray-200 rounded-lg p-6 mx-4 min-w-[350px] max-w-xs flex-shrink-0 bg-white/80 backdrop-blur-sm shadow-xl"
            >
              <div className="text-xs  mb-6">{testimonial.rating}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{testimonial.title}</h3>
              <p className="text-gray-600 text-sm mb-6">{testimonial.content}</p>
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
                  <p className="text-sm font-medium text-gray-400 mb-2">{testimonial.author}</p>
                  <p className="text-gray-500 text-xs mb-3">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
    </section>
  );
};
