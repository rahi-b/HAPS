"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import client1 from "@/public/Images/client1.jpeg";
import client2 from "@/public/Images/client2.jpeg";
import client3 from "@/public/Images/client3.jpeg";
import client4 from "@/public/Images/client4.jpeg";

export const HeroSection = () => {
  const redirectToWhatsApp = () => {
    // The phone number should be in international format without any symbols
  const phoneNumber = "+918075252370";// Replace with your actual WhatsApp number

    // Create a pre-filled message using the form data
    const message = `Hello, I'd like to book a mental health consultation.`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);

    // Create the WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
  };
  const avatars = [client1, client2, client3,client4];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
      className="relative min-h-screen flex items-center justify-center py-12"
    >
      {/* Background image */}
      <div className="absolute inset-0 bg-[#4b276c] z-0">
        <div className="absolute inset-0 bg-[url('/textures/noise.png')] opacity-5 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-6 z-10 text-center max-w-7xl">
        {/* Trusted by section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-[#1c1c1a]/70 backdrop-blur-sm rounded-full py-2 px-4 inline-flex items-center">
            <div className="flex -space-x-2 mr-3">
              {avatars.map((avatar, index) => (
                <div
                  key={index}
                  className="w-8 h-8 rounded-full border-2 border-[#1c1c1a] overflow-hidden bg-gray-200"
                >
                  <Image
                    src={avatar}
                    width={32}
                    height={32}
                    alt={`User ${index + 1}`}
                    className="object-cover"
                  />
                </div>
              ))}
              {/* Add a fourth placeholder if needed */}
              {/* <div className="w-8 h-8 rounded-full border-2 border-[#1c1c1a] bg-gray-400 flex items-center justify-center">
                <span className="text-xs text-white font-medium">+</span>
              </div> */}
            </div>
            <span className="text-white text-xs md:text-sm">
              TRUSTED BY 1000+ PEOPLE
            </span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-white text-4xl md:text-6xl lg:text-7xl font-normal leading-tight max-w-5xl mx-auto mb-6"
        >
          Creating a World Where Mental Health Is Valued
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="text-gray-300 md:text-lg max-w-3xl mx-auto mb-12"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/get-started"
            className="bg-amber-50 hover:bg-black hover:text-white text-[#1c1c1a] text-sm md:text-lg font-medium py-3 md:px-8 px-6 rounded-md transition-colors duration-500 w-full sm:w-auto cursor-pointer"
          >
            GET STARTED
          </Link>
          <button
           onClick={redirectToWhatsApp}
            className="border border-white text-white hover:bg-white hover:text-black text-sm md:text-lg font-medium py-3 px-8 rounded-md transition-colors duration-500 w-full sm:w-auto"
          >
            CONTACT US
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};