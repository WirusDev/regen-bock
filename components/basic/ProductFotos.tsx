import React from "react";
import { Product1, Product2 } from "../../public/photos/index_photos";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
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
      <motion.div
        ref={ref2}
        className='relative z-10 text-black md:left-[6rem]'
        initial={{ x: -1000, scale: 0 }}
        animate={controls1}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.5 }}
      >
        <motion.div
          whileHover={{ scale: 1.1, rotate: -15 }}
          whileTap={{ scale: 0.7 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={Product1}
            alt='bock auf regen?'
            className='  w-[550px] '
          />
        </motion.div>
      </motion.div>

      <motion.div
        className='relative text-black md:right-[6rem] md:top-[400px]'
        initial={{ x: 1000, scale: 0 }}
        animate={controls2}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <motion.div
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1, rotate: 15 }}
          whileTap={{ scale: 0.7 }}
        >
          <Image
            src={Product2}
            alt='bock auf regen?'
            className='  w-[550px] '
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
