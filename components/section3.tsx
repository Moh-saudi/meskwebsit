"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FadeInWhenVisible } from './fade-in-when-visible';

const Section3 = () => {
  return (
    <section className="min-h-screen w-full relative overflow-hidden bg-gradient-to-b from-[#011818] to-[#010C0C] text-white p-8 flex items-center justify-center">
      <div className="absolute inset-0 bg-opacity-30 z-10">
        <svg className="w-full h-full" viewBox="0 0 1565 880" xmlns="http://www.w3.org/2000/svg">
          <path d="M865.7 478.6c0 0-389.8 389.7-389.8 389.7c-19.6 19.7-51.5 19.7-71.2 0c0 0-389.8-389.7-389.8-389.7c-19.5-19.7-19.5-51.6 0-71.3c0 0 389.8-389.7 389.8-389.7C424.4-2 456.3-2 475.9 17.6c0 0 389.8 389.7 389.8 389.7c19.7 19.7 19.7 51.6 0 71.3Z" fill="#FE696E" fillOpacity="0.1"/>
          <path d="M2075 477.9c0 0-389.8 389.8-389.8 389.8c-19.6 19.7-51.6 19.7-71.2 0c0 0-389.8-389.8-389.8-389.8c-19.7-19.6-19.7-51.5 0-71.2c0 0 389.8-389.8 389.8-389.8c19.6-19.5 51.6-19.5 71.2 0c0 0 389.8 389.8 389.8 389.8c19.7 19.7 19.7 51.6 0 71.2Z" fill="#5382FF" fillOpacity="0.1"/>
          <path d="M1194.5 479.6c0 0-114.2 114.2-114.2 114.2c-19.6 19.7-51.5 19.7-71.2 0c0 0-114.2-113.8-114.2-113.8c-19.7-19.7-19.7-51.6 0-71.2c0 0 113.8-115.1 113.8-115.1c19.7-19.6 51.6-19.6 71.2 0c0 0 114.6 114.7 114.6 114.7c19.7 19.6 19.7 51.5 0 71.2Z" fill="#00C892" fillOpacity="0.1"/>
        </svg>
      </div>
      <div className="relative z-20 max-w-7xl mx-auto">
        <FadeInWhenVisible>
          <h2 className="text-6xl font-bold mb-12 text-[#00C892] text-center">Services</h2>
        </FadeInWhenVisible>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Sports & Health",
              description: "Innovative solutions for managing sports academies and facilities, along with supporting public health initiatives through platforms for tracking physical activity and wellness.",
              icon: "M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            },
            {
              title: "Digital Education",
              description: "Learning Management System (LMS) to support schools and universities in delivering efficient digital education, ensuring access to quality education for all.",
              icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            },
            {
              title: "Smart Cities Management",
              description: "Assisting governments in executing smart city strategies, including sustainable transport, energy distribution, and resource management.",
              icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-4 4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            }
          ].map((service, index) => (
            <FadeInWhenVisible key={index}>
              <motion.div 
                className="bg-black bg-opacity-20 rounded-3xl p-6 flex flex-col items-center transition-all duration-300 h-full"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-full h-64 bg-gradient-to-br from-[#00C892] to-[#012929] rounded-3xl mb-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#00C892] mb-2 text-center">{service.title}</h3>
                <p className="text-lg text-center text-gray-300">{service.description}</p>
              </motion.div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section3;
