"use client";

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

const Section1: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSection1Visible, setIsSection1Visible] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleClick = () => {
    if (videoRef.current) {
      if (!isPlaying) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    setIsSection1Visible(inView);
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <section ref={ref} className="h-screen w-full relative overflow-hidden bg-gradient-to-b from-[#012929] to-[#011414]">
      <motion.div 
        className="absolute inset-0 bg-[url('/images/page1-background-nosvg.jpeg')] bg-cover bg-center z-10"
        initial={{ opacity: 1 }}
        animate={{ opacity: isSection1Visible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      ></motion.div>
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white">
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between w-full p-8">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -50 }
            }}
            transition={{ duration: 0.3 }}
            className="flex items-center"
          >
            <Image src="/images/logo.png" alt="Mesk hagzz logo" width={294} height={49} />
          </motion.div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 }
          }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="w-11/12 max-w-7xl mb-8 rounded-3xl overflow-hidden shadow-2xl relative"
        >
          <div className="relative w-full h-0 pb-[49.7%]"> {/* Adjusted aspect ratio for more cropping */}
            <video 
              ref={videoRef}
              id="mainVideo" 
              loop 
              muted 
              playsInline
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover"
            >
              <source src="/videos/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <motion.button
            initial={{ opacity: 0, x: 30 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 30 }
            }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="absolute bottom-8 right-8 bg-[#00C892] text-white border-none w-44 h-16 text-lg font-bold rounded-md cursor-pointer transition-colors hover:bg-[#00A57A]"
            onClick={handleClick}
          >
            {isPlaying ? 'PAUSE' : 'WATCH HERE'}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Section1;