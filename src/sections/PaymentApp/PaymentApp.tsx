import React from "react";
import { PaymentAppItesm } from "../../contants";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";

const imgLeft: Variants = {
  hidden: { opacity: 0, x: 200 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      delay: 0.4,
    },
  },
};

const imgRight: Variants = {
  hidden: { opacity: 0, x: -200 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      delay: 0.4,
    },
  },
};


const textLeft = (delay = 0.6) => ({
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay },
  },
});

const textRight = (delay = 0.6) => ({
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay },
  },
});

const PaymentApp = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-5 padding-t padding-x padding-y padding-b w-full max-container bg-background-main overflow-x-hidden">
      <div className="flex flex-col gap-20 lg:p-10">
        {PaymentAppItesm.map((item, index) => {
          const isReversed = index % 2 !== 0;
          return (
            <div
              key={item.label}
              className={`flex items-center gap-10 ${
                isReversed ? "md:flex-row-reverse flex-col" : "md:flex-row flex-col"
              } w-full`}
            >
              {/* Text Content */}
              <motion.div
                variants={isReversed ? textRight(0.4) : textLeft(0.4)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col flex-1 gap-5 lg:w-1/2"
              >
                <h2 className="xl:text-[66px] lg:text-[50px] leading-text text-[34px] text-pale-brown tracking-text font-calsans max-sm:text-center">
                  {item.label}
                </h2>
                <p className="sm:text-[16px] text-[13px] md:max-w-lg font-figtree text-[#742b17] max-sm:text-center">
                  {item.text}
                </p>
              </motion.div>

              {/* Image */}
              <motion.img
                variants={isReversed ? imgRight : imgLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                src={item.icon}
                alt={item.label}
                className="lg:w-1/2 md:w-[500px] w-full object-contain object-center"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PaymentApp;
