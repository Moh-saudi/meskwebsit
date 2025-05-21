"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FadeInWhenVisible } from './fade-in-when-visible';

const Section4 = () => {
  return (
    <section className="min-h-screen w-full relative overflow-hidden bg-gradient-to-b from-[#011818] to-[#010A0A] text-white p-8 flex items-center justify-center">
      <div className="absolute inset-0 bg-opacity-30 z-10">
        <svg className="w-full h-full" viewBox="0 0 1565 880" xmlns="http://www.w3.org/2000/svg">
          <path d="M865.7 478.6c0 0-389.8 389.7-389.8 389.7c-19.6 19.7-51.5 19.7-71.2 0c0 0-389.8-389.7-389.8-389.7c-19.5-19.7-19.5-51.6 0-71.3c0 0 389.8-389.7 389.8-389.7C424.4-2 456.3-2 475.9 17.6c0 0 389.8 389.7 389.8 389.7c19.7 19.7 19.7 51.6 0 71.3Z" fill="#FE696E" fillOpacity="0.1"/>
          <path d="M2075 477.9c0 0-389.8 389.8-389.8 389.8c-19.6 19.7-51.6 19.7-71.2 0c0 0-389.8-389.8-389.8-389.8c-19.7-19.6-19.7-51.5 0-71.2c0 0 389.8-389.8 389.8-389.8c19.6-19.5 51.6-19.5 71.2 0c0 0 389.8 389.8 389.8 389.8c19.7 19.7 19.7 51.6 0 71.2Z" fill="#5382FF" fillOpacity="0.1"/>
          <path d="M1194.5 479.6c0 0-114.2 114.2-114.2 114.2c-19.6 19.7-51.5 19.7-71.2 0c0 0-114.2-113.8-114.2-113.8c-19.7-19.7-19.7-51.6 0-71.2c0 0 113.8-115.1 113.8-115.1c19.7-19.6 51.6-19.6 71.2 0c0 0 114.6 114.7 114.6 114.7c19.7 19.6 19.7 51.5 0 71.2Z" fill="#00C892" fillOpacity="0.1"/>
        </svg>
      </div>
      <div className="relative z-20 max-w-7xl mx-auto">
        <FadeInWhenVisible>
          <h2 className="text-6xl font-bold mb-12 text-center">
            Supporting <span className="text-[#00C892]">Sustainable Development Goals</span> (SDGs)
          </h2>
        </FadeInWhenVisible>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Sports & Health",
              description: "Our solutions support SDGs related to health and well-being by promoting physical activity and community sports programs.",
              icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            },
            {
              title: "Quality Education",
              description: "We provide digital education solutions to support access to quality education for all, enhancing the infrastructure for e-learning.",
              icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            },
            {
              title: "Infrastructure & Innovation",
              description: "We support the optimization of supply chains and infrastructure with cutting-edge technology that drives innovation and helps governments achieve sustainability.",
              icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            },
            {
              title: "Sustainable Cities",
              description: "Our smart city solutions contribute to creating sustainable urban environments, improving resource management and quality of life.",
              icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 016.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 016.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
            },
            {
              title: "Data Security",
              description: "We ensure the highest standards of data protection and cybersecurity, contributing to safe and resilient digital infrastructures.",
              icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            },
            {
              title: "Global Partnerships",
              description: "We foster international cooperation and partnerships to accelerate sustainable development and technological innovation worldwide.",
              icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
            }
          ].map((sdg, index) => (
            <FadeInWhenVisible key={index}>
              <motion.div 
                className="bg-white bg-opacity-10 rounded-lg p-6 transition-all duration-300 hover:bg-opacity-20 hover:shadow-xl flex flex-col items-center"
                whileHover={{ scale: 1.05 }}
                style={{ height: '100%' }}
              >
                <div className="w-16 h-16 bg-[#00C892] rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={sdg.icon} />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#00C892] mb-4 text-center">{sdg.title}</h3>
                <p className="text-base text-gray-300 text-center">{sdg.description}</p>
              </motion.div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section4;
