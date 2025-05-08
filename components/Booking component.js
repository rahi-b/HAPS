"use client";

import { useState } from 'react';
import dynamic from "next/dynamic";

const AnimationSvg = dynamic(() => import("./AnimationSvg"), { ssr: false });

export const BookingForm = ()=> {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your API/backend
  };
  
  const redirectToWhatsApp = () => {
    // The phone number should be in international format without any symbols
    const phoneNumber = "+918086158928"; // Replace with your actual WhatsApp number
    
    // Create a pre-filled message using the form data
    const message = `Hello, my name is ${formData.name}. I'd like to book a mental health consultation on ${formData.date}. ${formData.message}`;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create the WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="flex flex-col-reverse md:flex-row bg-[#4b276c] text-white p-8 rounded-3xl w-full max-w-7xl mx-auto py-16">
      {/* Left column - Form */}
      <div className="w-full md:w-1/2 pr-0 md:pr-8">
        <div className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name*"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:border-gray-400 hover:border-1 hover:border-gray-400 cursor-pointer text-gray-300"
            />
          </div>
          
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number*"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-4 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:border-gray-400 hover:border-1 hover:border-gray-400 cursor-pointer text-gray-300"
            />
            
            <input
              type="email"
              name="email"
              placeholder="Your Email*"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:border-gray-400 hover:border-1 hover:border-gray-400 cursor-pointer text-gray-300"
            />
          </div>
          
          <div>
            <input
              type="date"
              name="date"
              placeholder="Select Date*"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full p-4 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:border-gray-400 hover:border-1 hover:border-gray-400 cursor-pointer text-gray-300"
            />
          </div>
          
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full p-4 bg-transparent border border-gray-600 rounded-md min-h-[200px] focus:outline-none focus:border-gray-400 hover:border-1 hover:border-gray-400 cursor-pointer text-gray-300 resize-y"
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleSubmit}
              className="px-4 py-2 md:px-6 md:py-3 bg-white text-black font-medium rounded-md hover:bg-black hover:text-white cursor-pointer duration-500 transition-colors"
            >
              MAKE APPOINTMENT
            </button>
            
            <button
              onClick={redirectToWhatsApp}
              className=" px-4 py-2 md:px-6 md:py-3 bg-black text-white font-medium rounded-md hover:bg-green-900 cursor-pointer transition-colors duration-500 flex items-center justify-center"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 mr-2" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              CHAT ON WHATSAPP
            </button>
          </div>
        </div>
      </div>
      
      {/* Right column - Content */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0">
           <span className="inline-flex items-center gap-2 text-sm font-semibold text-white uppercase tracking-widest mb-4">
            <AnimationSvg />
            BOOK A SESSION
          </span>
        
        <h1 className="  text-3xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
          Mental Health Is a Right, Not a Privilege
        </h1>
        
        <p className="text-gray-300 mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis pulvinar leo.
        </p>
        
        <ul className="space-y-3 mb-8">
          <li className="flex items-baseline">
            <div className="w-1.5 h-1.5 bg-white rounded-full mr-2 mt-2"></div>
            <span>Get tailored advice from mental health professionals</span>
          </li>
          <li className="flex items-baseline">
            <div className="w-1.5 h-1.5 bg-white rounded-full mr-2 mt-2"></div>
            <span>Discuss your specific needs and create a personalized plan</span>
          </li>
          <li className="flex items-baseline">
            <div className="w-1.5 h-1.5 bg-white rounded-full mr-2 mt-2"></div>
            <span>Confidential and compassionate support</span>
          </li>
        </ul>
      </div>
    </div>
  );
}