import React from "react";
import profile from "../assets/images/WhatsApp Image 2025-11-12 at 18.30.59_c0548f62.jpg";
import { motion } from "motion/react";
const conteiner = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});
export const Hero = () => {
  return (
    <div className="border-neutral-900 pb-4 lg:mb-36">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={conteiner(0.5)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Abtahi Chowdhury
            </motion.h1>
            <motion.span
              variants={conteiner(1)}
              initial="hidden"
              animate="visible"
              className="bg-linear-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={conteiner(0)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter italic"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Obcaecati eveniet possimus sunt architecto omnis accusantium
              ducimus numquam quo saepe quod praesentium error mollitia rerum
              amet distinctio maxime, vero ex, voluptatum iste necessitatibus
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{x:100,opacity:0}}
              animate={{x:0,opacity:1}}
              transition={{duration:1,delay:1.2}}
              src={profile}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
