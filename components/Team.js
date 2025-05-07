"use client"

import { useState } from 'react';
import Image from 'next/image';

export const Team= () => {
  const teamMembers = [
    {
      name: "Wanda Youngs",
      role: "Company CEO",
      imageSrc: "/images/team/wanda-youngs.jpg"
    },
    {
      name: "Timothy Strong",
      role: "Head Marketing",
      imageSrc: "/images/team/timothy-strong.jpg"
    },
    {
      name: "Linda Frost",
      role: "Designer",
      imageSrc: "/images/team/linda-frost.jpg"
    },
    {
      name: "James Wilson",
      role: "Inventory",
      imageSrc: "/images/team/james-wilson.jpg"
    },
    {
      name: "Tina Lawsons",
      role: "Marketing",
      imageSrc: "/images/team/tina-lawsons.jpg"
    },
    {
      name: "Thomas Stanford",
      role: "Photographer",
      imageSrc: "/images/team/thomas-stanford.jpg"
    },
    {
      name: "Lucas Damian",
      role: "Inventory",
      imageSrc: "/images/team/lucas-damian.jpg"
    },
    {
      name: "Peter Coulson",
      role: "Web Developer",
      imageSrc: "/images/team/peter-coulson.jpg"
    }
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
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
          OUR TEAM
        </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-center max-w-3xl mx-auto leading-tight">
            Meet Our Professional
            <br />
            Team Member
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="mb-6">
              <div className="rounded-lg overflow-hidden mb-3">
                <div className="relative h-72 w-full">
                  <Image
                    src={member.imageSrc}
                    alt={`${member.name} - ${member.role}`}
                    fill
                    priority={index < 4}
                    sizes="(max-width: 768px) 50vw, 25vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
              <h3 className="font-medium text-lg">{member.name}</h3>
              <p className="text-gray-700 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}