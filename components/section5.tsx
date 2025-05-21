"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FadeInWhenVisible } from "./fade-in-when-visible";

const founderMessage = {
  name: "Mohamed Saudi",
  role: "Founder & CEO",
  image: "/images/page5/img/3.jpg",
  message: `I am proud to lead Mesk, a company that has grown from a vision into a reality, supported by prestigious institutions including Qatar Financial Centre, Qatar's Digital Business Incubator, and PachsCor.

Our journey is marked by innovation and excellence in digital transformation. We are committed to delivering cutting-edge solutions that empower businesses and drive technological advancement in Qatar and beyond.`,
  achievements: [
    "Supported by Qatar Financial Centre",
    "Partnered with Qatar's Digital Business Incubator",
    "Backed by PachsCor Business Incubator",
    "Leading Digital Transformation Solutions",
  ],
  partners: [
    {
      name: "Qatar Financial Centre",
      logo: "/images/partners/qfc.png",
    },
    {
      name: "Digital Business Incubator",
      logo: "/images/partners/dbi.png",
    },
    {
      name: "PachsCor",
      logo: "/images/partners/pachscor.png",
    },
  ],
};

const Section5 = () => (
  <section className="bg-gradient-to-b from-[#011818] to-[#010808] py-16 relative flex items-center justify-center min-h-screen">
    <div className="absolute inset-0 bg-opacity-30 z-10">
      <svg
        className="w-full h-full"
        viewBox="0 0 1565 880"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M865.7 478.6c0 0-389.8 389.7-389.8 389.7c-19.6 19.7-51.5 19.7-71.2 0c0 0-389.8-389.7-389.8-389.7c-19.5-19.7-19.5-51.6 0-71.3c0 0 389.8-389.7 389.8-389.7C424.4-2 456.3-2 475.9 17.6c0 0 389.8 389.7 389.8 389.7c19.7 19.7 19.7 51.6 0 71.3Z"
          fill="#FE696E"
          fillOpacity="0.1"
        />
        <path
          d="M2075 477.9c0 0-389.8 389.8-389.8 389.8c-19.6 19.7-51.6 19.7-71.2 0c0 0-389.8-389.8-389.8-389.8c-19.7-19.6-19.7-51.5 0-71.2c0 0 389.8-389.8 389.8-389.8c19.6-19.5 51.6-19.5 71.2 0c0 0 389.8 389.8 389.8 389.8c19.7 19.7 19.7 51.6 0 71.2Z"
          fill="#5382FF"
          fillOpacity="0.1"
        />
        <path
          d="M1194.5 479.6c0 0-114.2 114.2-114.2 114.2c-19.6 19.7-51.5 19.7-71.2 0c0 0-114.2-113.8-114.2-113.8c-19.7-19.7-19.7-51.6 0-71.2c0 0 113.8-115.1 113.8-115.1c19.7-19.6 51.6-19.6 71.2 0c0 0 114.6 114.7 114.6 114.7c19.7 19.6 19.7 51.5 0 71.2Z"
          fill="#00C892"
          fillOpacity="0.1"
        />
      </svg>
    </div>
    <div className="container mx-auto px-4 relative z-20">
      <FadeInWhenVisible>
        <h2 className="text-6xl font-bold text-[#00C892] mb-16 text-center">
          Founder Message
        </h2>
      </FadeInWhenVisible>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          className="relative overflow-hidden rounded-lg"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          style={{ aspectRatio: "3/4" }}
        >
          <Image
            src={founderMessage.image}
            alt={founderMessage.name}
            fill
            className="object-cover transition-transform duration-300"
          />
        </motion.div>

        <div className="space-y-8">
          <div>
            <h3 className="text-4xl font-bold text-[#00C892] mb-2">
              {founderMessage.name}
            </h3>
            <p className="text-xl text-white mb-6">{founderMessage.role}</p>
          </div>

          <div className="prose prose-lg text-gray-200">
            <p className="whitespace-pre-line leading-relaxed">
              {founderMessage.message}
            </p>
          </div>

          <div className="mt-8">
            <h4 className="text-2xl font-bold text-[#00C892] mb-4">
              Our Achievements
            </h4>
            <ul className="space-y-3">
              {founderMessage.achievements.map((achievement, index) => (
                <motion.li
                  key={index}
                  className="flex items-center text-gray-200"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="text-[#00C892] mr-2">•</span>
                  {achievement}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="mt-20">
        <h4 className="text-3xl font-bold text-[#00C892] mb-12 text-center">
          Our Supporters
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
          {founderMessage.partners.map((partner, index) => (
            <motion.div
              key={index}
              className="relative w-48 h-24"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Section5;
