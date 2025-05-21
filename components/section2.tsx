"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FadeInWhenVisible } from './fade-in-when-visible';

const Section2 = () => (
  <section className="min-h-screen w-full relative overflow-hidden bg-gradient-to-b from-[#011818] to-[#010E0E] py-16 flex items-center justify-center">
    <div className="absolute inset-0 bg-opacity-30 z-10">
      <svg className="w-full h-full" viewBox="0 0 1565 880" xmlns="http://www.w3.org/2000/svg">
        <path d="M865.7 478.6c0 0-389.8 389.7-389.8 389.7c-19.6 19.7-51.5 19.7-71.2 0c0 0-389.8-389.7-389.8-389.7c-19.5-19.7-19.5-51.6 0-71.3c0 0 389.8-389.7 389.8-389.7C424.4-2 456.3-2 475.9 17.6c0 0 389.8 389.7 389.8 389.7c19.7 19.7 19.7 51.6 0 71.3Z" fill="#FE696E" fillOpacity="0.1"/>
        <path d="M2075 477.9c0 0-389.8 389.8-389.8 389.8c-19.6 19.7-51.6 19.7-71.2 0c0 0-389.8-389.8-389.8-389.8c-19.7-19.6-19.7-51.5 0-71.2c0 0 389.8-389.8 389.8-389.8c19.6-19.5 51.6-19.5 71.2 0c0 0 389.8 389.8 389.8 389.8c19.7 19.7 19.7 51.6 0 71.2Z" fill="#5382FF" fillOpacity="0.1"/>
        <path d="M1194.5 479.6c0 0-114.2 114.2-114.2 114.2c-19.6 19.7-51.5 19.7-71.2 0c0 0-114.2-113.8-114.2-113.8c-19.7-19.7-19.7-51.6 0-71.2c0 0 113.8-115.1 113.8-115.1c19.7-19.6 51.6-19.6 71.2 0c0 0 114.6 114.7 114.6 114.7c19.7 19.6 19.7 51.5 0 71.2Z" fill="#00C892" fillOpacity="0.1"/>
      </svg>
    </div>
    <div className="relative z-20 max-w-7xl mx-auto px-4">
      <FadeInWhenVisible>
        <h2 className="text-6xl font-bold mb-12 text-[#00C892] text-center">Solutions</h2>
      </FadeInWhenVisible>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "The New Home For Sports Enthusiasts",
            description: "Mobile solutions that allow individuals to easily access health, sports, and education services.",
            icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          },
          {
            title: "Comprehensive ERP System",
            description: "Featuring advanced solutions for managing government and business operations, including financials, logistics, education, and sports.",
            icon: "M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
          },
          {
            title: "Data Management & Analytics",
            description: "Leveraging AI and Big Data analytics to improve decision-making for governments and businesses.",
            icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2m0 10V9m0 10a2 2 0 002 2h2a2 2 0 002-2V9a2 2 0 00-2-2h-2a2 2 0 00-2 2"
          }
        ].map((solution, index) => (
          <FadeInWhenVisible key={index}>
            <motion.div 
              className="bg-white bg-opacity-10 rounded-lg p-6 transition-all duration-300 hover:bg-opacity-20 hover:shadow-xl flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
              style={{ height: '100%' }}
            >
              <div className="w-16 h-16 bg-[#00C892] rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={solution.icon} />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#00C892] mb-4 text-center">{solution.title}</h3>
              <p className="text-base text-gray-300 text-center">{solution.description}</p>
            </motion.div>
          </FadeInWhenVisible>
        ))}
      </div>
    </div>
  </section>
);

export default Section2;
