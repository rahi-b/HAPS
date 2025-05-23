import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/Images/HapsLogo.svg';
import { FadeInOnScroll } from '../FadeInOnScroll';

export const Footer =() => {
  return (
    <footer className="bg-[#fffcf4] text-white py-12">
      {/* Logo + Headline */}
      <div className="text-center mb-12 px-6">
        <FadeInOnScroll direction='up' delay={0.1}>
        <Link href="/" className="inline-flex items-center mb-4">
          {/* <span className="text-black text-3xl font-semibold">
            <span className="text-amber-200">&#9728;</span> HAPS
          </span> */}
          <div className="relative h-14 w-30">
                            <Image
                              src={Logo}
                              alt="Company Logo"
                              height={28} // Fixed height, width will adjust proportionally
                              priority
                              style={{ width: "auto", objectFit: "contain" }}
                            />
                          </div>
        </Link>
        </FadeInOnScroll>
        <FadeInOnScroll direction='up' delay={0.2}>
        <p className="text-black text-2xl max-w-md mx-auto py-5">
          In the journey of life, mental health is your compass.
        </p>
        </FadeInOnScroll>
      </div>

      {/* Grid Columns */}
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-x-80 md:pl-16 justify-center  text-black py-12 ">
        {/* Contact Column */}
        <FadeInOnScroll direction='up' delay={0.3}>
        <div>
          <h3 className="text-lg font-semibold mb-4 text-black">Contact</h3>
          <ul className="space-y-2">
            <li>A: 205 Brook Fork, Alexandria, MD 18165</li>
            <li>P: +1 (234) 567 890 00</li>
            <li>
              <Link href="mailto:lantera.info@mail.com" className="hover:text-gray-500 transition-colors">
                E: lantera.info@mail.com
              </Link>
            </li>
          </ul>
        </div>
        </FadeInOnScroll>

        {/* Services Column */}
        <FadeInOnScroll direction='up' delay={0.4}>
        <div>
          <h3 className="text-lg font-semibold mb-4 text-black">Services</h3>
          <ul className="space-y-2">
            <li><Link href="/services/therapy" className="hover:text-gray-500 transition-colors">Personalized Therapy</Link></li>
            <li><Link href="/services/groups" className="hover:text-gray-500 transition-colors">Online Support Groups</Link></li>
            <li><Link href="/services/resources" className="hover:text-gray-500 transition-colors">Mental Health Resources</Link></li>
            <li><Link href="/services/growth" className="hover:text-gray-500 transition-colors">Resources for Growth</Link></li>
            <li><Link href="/services/wellness" className="hover:text-gray-500 transition-colors">Wellness Programs</Link></li>
          </ul>
        </div>
        </FadeInOnScroll>

        {/* Follow Us Column */}
        <FadeInOnScroll direction='up' delay={0.5}>
        <div>
          <h3 className="text-lg font-semibold mb-4 text-black">Follow Us</h3>
          <ul className="space-y-2">
            <li><Link href="https://facebook.com" className="hover:text-gray-500 transition-colors">Facebook</Link></li>
            <li><Link href="https://instagram.com" className="hover:text-gray-500 transition-colors">Instagram</Link></li>
            <li><Link href="https://linkedin.com" className="hover:text-gray-500 transition-colors">LinkedIn</Link></li>
            <li><Link href="https://youtube.com" className="hover:text-gray-500 transition-colors">YouTube</Link></li>
          </ul>
        </div>
        </FadeInOnScroll>
      </div>

      {/* Copyright */}
      <FadeInOnScroll direction='up' delay={0.6}>
      <div className="text-center mt-12 text-sm text-gray-400 px-6">
        ©2025 by ASK Project. Powered and secured by SDEC Digital
      </div>
      </FadeInOnScroll>
    </footer>
  );
}
