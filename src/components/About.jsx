import React from "react";
import aboutimg from "../assets/images/0690e3a5-dcbf-43b6-85ca-797bff11cbfd.png";
import { motion } from "motion/react";
export const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl " src={aboutimg} alt="about" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start mx-10 my-10">
            <p className="my-2 max-w-xl py-6 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eum,
              temporibus laudantium sunt ducimus et earum blanditiis debitis
              veniam hic, facilis ad! Soluta expedita sequi iste ex numquam
              aliquid dolorem a enim repellat voluptas, sit quis, adipisci odit
              molestiae. Odit enim debitis quas unde tenetur, in animi vero
              mollitia molestiae eum eligendi dolorum dignissimos minus delectus
              ullam voluptate pariatur reprehenderit inventore iure harum quam.
              Ea consequatur minus quibusdam magnam amet possimus. Obcaecati
              vero quasi quibusdam, consectetur veniam inventore earum. Rem?
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
