'use client'

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Envelope, Phone, MapPin, FacebookLogo, InstagramLogo, LinkedinLogo, YoutubeLogo } from '@phosphor-icons/react';
import Logo from '@/public/Images/Haps-final-logo.svg';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#fffcf4] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <Link href="/" className="inline-flex items-center">
              <div className="relative h-14 w-30">
                <Image
                  src={Logo}
                  alt="HAPS Logo"
                  height={56}
                  priority
                  style={{ width: "auto", objectFit: "contain" }}
                />
              </div>
            </Link>
            <p className="text-black text-lg mb-6 leading-relaxed max-w-md">
              In the journey of life, mental health is your compass. We provide comprehensive mental health services to guide you toward wellness.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-black">
                <Envelope size={16} className="text-amber-500" />
                <Link href="mailto:lantera.info@mail.com" className="hover:text-gray-600 transition-colors">
                  Hennaayoobps@gmail.com
                </Link>
              </div>
              <div className="flex items-center space-x-3 text-black">
                <Phone size={16} className="text-amber-500" />
                <span>+91 80-75252370</span>
              </div>
              <div className="flex items-center space-x-3 text-black">
                <MapPin size={16} className="text-amber-500" />
                <span>Hilite Business Park, Calicut</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-black">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Services', href: '/services' },
                { name: 'Resources', href: '/resources' },
                { name: 'Support Groups', href: '/services/groups' },
                { name: 'Wellness Programs', href: '/services/wellness' },
                { name: 'Contact', href: '/contact' }
              ].map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={link.href}
                    className="text-black hover:text-amber-600 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-black">Our Services</h4>
            <ul className="space-y-3">
              {[
                'Personalized Therapy',
                'Online Support Groups',
                'Mental Health Resources',
                'Resources for Growth',
                'Wellness Programs',
                'Crisis Support'
              ].map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 + 0.1 * index }}
                  viewport={{ once: true }}
                  className="text-black text-sm"
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Social Media & Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-black/20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="flex space-x-4"
            >
              {[
                { name: 'Facebook', href: 'https://facebook.com', icon: FacebookLogo },
                { name: 'Instagram', href: 'https://instagram.com', icon: InstagramLogo },
                { name: 'LinkedIn', href: 'https://linkedin.com', icon: LinkedinLogo },
                { name: 'YouTube', href: 'https://youtube.com', icon: YoutubeLogo }
              ].map((social, index) => (
                <motion.div
                  key={social.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 1 + 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={social.href}
                    className="w-10 h-10 bg-[#8051a1] border border-amber-200 rounded-full flex items-center justify-center text-[#ffff] hover:text-[#ffff] hover:bg-[#057d90] transition-all duration-200 hover:scale-110 hover:-translate-y-1"
                  >
                 
                    <social.icon size={20} />
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
              className="text-gray-600 text-sm"
            >
              ©{currentYear} by ASK Project. Powered and secured by SDEC Digital
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}