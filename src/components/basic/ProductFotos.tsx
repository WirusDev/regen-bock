import React, { useRef } from "react";
import { Product1, Product2 } from "../../assets/photos/index_photos";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SoundComponentProps {
  children: React.ReactNode;
}
const SoundComponent: React.FC<SoundComponentProps> = ({ children }) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleMouseEnter = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.1;
      audioRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Сбрасываем время воспроизведения
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      // className='hover:bg-blue-100 p-4 rounded-lg transition duration-300'
    >
      {children}
      <audio ref={audioRef} src='/src/assets/rain-sound.mp3' preload='auto' />
    </div>
  );
};

export default function ProductFotos() {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.1, // Уменьшенное значение для лучшего срабатывания
    rootMargin: "0px 0px -10% 0px", // Уменьшенное значение для rootMargin
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.1, // Уменьшенное значение для лучшего срабатывания
    rootMargin: "0px 0px -10% 0px", // Уменьшенное значение для rootMargin
  });

  React.useEffect(() => {
    console.log("Image 1 in view:", inView1);
    if (inView1) {
      controls1.start({ x: 0, scale: 1 });
    }
  }, [controls1, inView1]);

  React.useEffect(() => {
    console.log("Image 2 in view:", inView2);
    if (inView2) {
      controls2.start({ x: 0, scale: 1 });
    }
  }, [controls2, inView2]);

  return (
    <div
      ref={ref1}
      className='relative w-full  flex md:flex-row flex-col items-center md:justify-between justify-center md:pb-[500px]'
    >
      <SoundComponent>
        <motion.div
          ref={ref2}
          className='relative z-10 text-black md:left-[6rem]'
          initial={{ x: -1000, scale: 0 }}
          animate={controls1}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 0.5,
          }}
        >
          <motion.img
            whileHover={{ scale: 1.1, rotate: -15 }}
            whileTap={{ scale: 0.7 }}
            transition={{ duration: 0.3 }}
            src={Product1}
            alt='bock auf regen?'
            className='w-[550px]'
          />
        </motion.div>
      </SoundComponent>
      <SoundComponent>
        <motion.div
          className='relative text-black md:right-[6rem] md:top-[400px]'
          initial={{ x: 1000, scale: 0 }}
          animate={controls2}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <motion.img
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.7 }}
            src={Product2}
            alt='bock auf regen?'
            className='w-[550px]'
          />
        </motion.div>
      </SoundComponent>
    </div>
  );
}
