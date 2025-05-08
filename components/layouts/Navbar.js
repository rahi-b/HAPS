"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../../public/Images/Logo.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#1c1c1a] shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                {/* <span className="text-white text-2xl font-semibold">
                  <span className="text-amber-200">&#9728;</span> HAPS
                </span> */}
                <div className="relative h-14 w-auto">
                  <Image
                    src={Logo}
                    alt="Company Logo"
                    height={28} // Fixed height, width will adjust proportionally
                    priority
                    style={{ width: "auto", objectFit: "contain" }}
                  />
                </div>
              </Link>
            </div>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link
                href="/"
                className="text-white hover:text-amber-200 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-300 hover:text-amber-200 transition-colors"
              >
                About
              </Link>
              <Link
                href="/service"
                className="text-gray-300 hover:text-amber-200 transition-colors"
              >
                Service
              </Link>
              <Link
                href="/faq"
                className="text-gray-300 hover:text-amber-200 transition-colors"
              >
                Faq
              </Link>
              <Link
                href="/contact"
                className="text-gray-300 hover:text-amber-200 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center">
            <Link
              href="/appointment"
              className="bg-amber-50 hover:bg-amber-100 text-[#1c1c1a] font-medium py-2 px-6 rounded-md transition-colors"
            >
              APPOINTMENT
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-0 left-0 z-50 h-full w-3/4 max-w-xs bg-[#1c1c1a]/80 backdrop-blur-md shadow-lg md:hidden"
          >
            <div className="px-4 pt-16 pb-6 space-y-6">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
              >
                <Link href="/" className="text-white text-xl font-semibold">
                  {/* <span className="text-amber-200">&#9728;</span> Lantera */}
                  <div className="relative h-14 w-auto">
                  <Image
                    src={Logo}
                    alt="Company Logo"
                    height={28} // Fixed height, width will adjust proportionally
                    priority
                    style={{ width: "auto", objectFit: "contain" }}
                  />
                </div>
                </Link>
              </motion.div>

              {/* Menu Items */}
              {[
                { href: "/", text: "Home" },
                { href: "/about", text: "About" },
                { href: "/service", text: "Service" },
                { href: "/faq", text: "FAQ" },
                { href: "/contact", text: "Contact" },
              ].map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                >
                  <Link
                    href={item.href}
                    className="block text-gray-300 hover:text-amber-200 text-lg"
                  >
                    {item.text}
                  </Link>
                </motion.div>
              ))}

              {/* Appointment Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.4 }}
              >
                <Link
                  href="/appointment"
                  className="mt-4 block bg-amber-50 hover:bg-amber-100 text-[#1c1c1a] font-medium py-2 px-6 text-center rounded-md"
                >
                  APPOINTMENT
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
