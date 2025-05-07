"use client";

import { useState } from 'react';
import Image from 'next/image';
import FaqImage from '../public/Images/FaqImage.jpg'
import Link from 'next/link';

export const Faq =() => {
  const [openIndex, setOpenIndex] = useState(null);
  
  const faqs = [
    {
      question: "How long has your company been established?",
      answer: "Our company has been established since 2015, providing quality services for over 8 years."
    },
    {
      question: "How much does it cost for one care?",
      answer: "Our basic care package starts at $99 per month. We also offer customized solutions depending on your specific needs."
    },
    {
      question: "How many people work at your company?",
      answer: "We currently have a team of 45 dedicated professionals working across different departments."
    },
    {
      question: "Does your company open job vacancies?",
      answer: "Yes, we regularly post job openings on our careers page. We're always looking for talented individuals to join our team."
    },
    {
      question: "How do I contact Lantera for appointment?",
      answer: "You can contact us at +1 (234) 567 890 00 or email us at lantera@mails.com to schedule an appointment."
    },
    {
      question: "What kind of contracts do you provide?",
      answer: "We offer various types of contracts including fixed-term, project-based, and long-term service agreements tailored to your needs."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className=" py-12 px-4 md:px-8 lg:px-16">
    <div className="flex flex-col-reverse md:flex-row gap-8 max-w-7xl mx-auto p-4">
      {/* Left side - Image with contact info */}
      <div className="md:w-1/2 relative rounded-xl overflow-hidden mb-6">
      <div className="h-full min-h-[500px] md:min-h-[700px] relative">
        <div className="w-full h-full absolute">
          <div className=" relative w-full h-full">
                  <Image
                    src={FaqImage}
                    alt="People smiling in a circle"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                </div>
          <div className="absolute left-8 bottom-8 bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-900 h-8 w-8 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <Link className="text-gray-700" href="tel:+">+1 (234) 567 890 00</Link>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-green-900 h-8 w-8 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <Link className="text-gray-700" href="mailto:">lantera@mails.com</Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right side - FAQ accordion */}
      <div className="md:w-1/2">
        <div className="mb-10">
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 uppercase tracking-widest mb-4">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="#444444"
              >
                <path d="M12,2 L12,22 M2,12 L22,12 M4.93,4.93 L19.07,19.07 M4.93,19.07 L19.07,4.93" />
                <path
                  d="M12,2 L12,22 M2,12 L22,12 M4.93,4.93 L19.07,19.07 M4.93,19.07 L19.07,4.93"
                  fill="none"
                  stroke="#444444"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            FAQS
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium mt-2 mb-8 text-gray-900">Frequently Asked Questions</h2>
        </div>
        
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 p-4 px-6 rounded-lg">
              <button
                className="flex justify-between items-center w-full text-left py-2 cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-base font-medium text-gray-900">{faq.question}</h3>
                <div className={`flex items-center justify-center text-black w-6 h-6 transform transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-40 opacity-100 py-3' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
}