"use client";

import Image from "next/image";
import { FadeInWhenVisible } from "./fade-in-when-visible";

const Section6 = () => (
  <section className="bg-gradient-to-b from-[#011818] to-[#010606] py-16 relative min-h-screen flex items-center justify-center">
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
          About Us
        </h2>
      </FadeInWhenVisible>
      <div className="flex flex-wrap justify-between items-center">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <FadeInWhenVisible>
            <div
              className="bg-[#012929] p-8 rounded-lg relative"
              style={{ aspectRatio: "1/1" }}
            >
              <Image
                src="/images/page6.jpeg"
                alt="About Us Illustration"
                fill
                className="object-contain"
              />
            </div>
          </FadeInWhenVisible>
        </div>
        <div className="w-full lg:w-1/2 lg:pl-16">
          {[
            {
              title: "Company Vision:",
              content:
                "Striving to empower governments and businesses in reaching sustainable development goals by leveraging advanced technological solutions.",
            },
            {
              title: "Mission Statement:",
              content:
                "Delivering comprehensive solutions across various sectors through specialized ERP platforms and intelligent applications.",
            },
            {
              title: "Company Values:",
              content:
                "Emphasizing 'innovation', 'efficiency', 'sustainability', and collaboration with both local and international partners.",
            },
          ].map((item, index) => (
            <FadeInWhenVisible key={index}>
              <div className="mb-12">
                <h3 className="text-3xl font-bold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-xl text-[#00C892]">{item.content}</p>
              </div>
            </FadeInWhenVisible>
          ))}
          <FadeInWhenVisible>
            <div>
              <p className="text-2xl italic text-white mb-4">
                &ldquo;Smart Solutions for a Sustainable Tomorrow&rdquo;
              </p>
              <div className="flex items-center">
                <div>
                  <p className="text-xl font-bold text-white">Mohamed Saudi</p>
                  <p className="text-lg text-white">CEO of Mesk LLC</p>
                </div>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </div>
  </section>
);

export default Section6;
