import Link from 'next/link';
import Image from 'next/image';

export const Footer =() => {
  return (
    <footer className="bg-[#1c1c1a] text-white py-12">
      {/* Logo + Headline */}
      <div className="text-center mb-12 px-6">
        <Link href="/" className="inline-flex items-center mb-4">
          <span className="text-white text-3xl font-semibold">
            <span className="text-amber-200">&#9728;</span> Lantera
          </span>
        </Link>
        <p className="text-white text-xl max-w-md mx-auto">
          In the journey of life, mental health is your compass.
        </p>
      </div>

      {/* Grid Columns */}
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center text-gray-300 py-12 ">
        {/* Contact Column */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
          <ul className="space-y-2">
            <li>A: 205 Brook Fork, Alexandria, MD 18165</li>
            <li>P: +1 (234) 567 890 00</li>
            <li>
              <Link href="mailto:lantera.info@mail.com" className="hover:text-white transition-colors">
                E: lantera.info@mail.com
              </Link>
            </li>
          </ul>
        </div>

        {/* Services Column */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
          <ul className="space-y-2">
            <li><Link href="/services/therapy" className="hover:text-white transition-colors">Personalized Therapy</Link></li>
            <li><Link href="/services/groups" className="hover:text-white transition-colors">Online Support Groups</Link></li>
            <li><Link href="/services/resources" className="hover:text-white transition-colors">Mental Health Resources</Link></li>
            <li><Link href="/services/growth" className="hover:text-white transition-colors">Resources for Growth</Link></li>
            <li><Link href="/services/wellness" className="hover:text-white transition-colors">Wellness Programs</Link></li>
          </ul>
        </div>

        {/* Follow Us Column */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
          <ul className="space-y-2">
            <li><Link href="https://facebook.com" className="hover:text-white transition-colors">Facebook</Link></li>
            <li><Link href="https://instagram.com" className="hover:text-white transition-colors">Instagram</Link></li>
            <li><Link href="https://linkedin.com" className="hover:text-white transition-colors">LinkedIn</Link></li>
            <li><Link href="https://youtube.com" className="hover:text-white transition-colors">YouTube</Link></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-12 text-sm text-gray-400 px-6">
        ©2025 by ASK Project. Powered and secured by SDEC Digital
      </div>
    </footer>
  );
}
