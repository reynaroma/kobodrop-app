import Carousel from "../common/Carousel";
import StoreLinks, { BtnTypes } from "../common/StoreLinks";
import { motion } from "framer-motion";
import { useRef } from "react";

function Reviews() {
  const slides = [
    {
      src: "https://images.unsplash.com/photo-1595986630530-969786b19b4d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: '"Kobodrop has helped me send and receive money with little to no complications. It´s what everyone who wants to be on top of their money needs!"',
      name: "Haruka Sato",
      country: "Japan",
    },
    {
      src: "https://images.unsplash.com/photo-1554196038-950a8ab51827?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: '"Using Kobodrop has streamlined my financial transactions like never before. Highly recommended for anyone looking to simplify their finances!"',
      name: "Elena Rodriguez",
      country: "Spain",
    },
    {
      src: "https://images.unsplash.com/photo-1622556498246-755f44ca76f3?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: '"Kobodrop has been a game changer for my daily financial dealings. It allows for quick and secure money transfers, which saves me a lot of time and effort."',
      name: "Thomas Morgan",
      country: "USA",
    }
  ];

  const reviewsRef = useRef(null);

  return (
    <section id="reviews" className="flex max-w-7xl flex-col items-center justify-between px-8 py-20 lg:m-auto lg:flex-row lg:px-12">
      <article ref={reviewsRef} className="mb-10 flex flex-col items-center justify-center lg:w-1/2 lg:items-start">
        <motion.h2
          initial={{ opacity: 0, x: 50 }}
          whileInView={
            {
              opacity: 1,
              x: 0,
              transition: { duration: 1 }
            }}
          viewport={{ once: true }}
          className="mb-4 max-w-[14ch] text-center text-4xl font-semibold text-gray-800 lg:w-full lg:text-left leading-snug">
          Join other thousands of people growing with Kobodrop
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={
            {
              opacity: 1,
              x: 0,
              transition: { duration: 1 }
            }}
          viewport={{ once: true }}
        >
          <StoreLinks type={BtnTypes.Standard} />
        </motion.div>
      </article>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={
          {
            opacity: 1,
            x: 0,
            transition: { duration: 1 }
          }}
        viewport={{ once: true }}
      >
        <Carousel slides={slides} />
      </motion.div>
    </section>
  )
}

export default Reviews;
