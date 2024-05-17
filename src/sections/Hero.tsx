import StoreLinks, { BtnTypes } from "../common/StoreLinks";
import Phone from "../assets/mockup.svg";
import HeroImage from "../assets/hero.png";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";

function Hero() {
  const heroRef = useRef(null);
  const isHeroRefInView = useInView(heroRef);
  return (
    <section className="relative mt-4 flex h-fit max-w-7xl flex-col
    items-center gap-10 px-8 sm:gap-16 md:my-0 md:flex-row md:h-[85vh]
    md:gap-0 lg:px-12 xl:m-auto xl:gap-0 xl:overflow-hidden">
      <AnimatePresence>
        <div className="sm:w-full md:w-3/6">
          {/* LEFT SIDE */}
          <motion.h1
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-center mx-auto mb-8 w-[12ch] text-4xl font-semibold text-gray-800 sm:text-5xl md:mx-0 md:text-left">Start spending the smart way</motion.h1>
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="m-auto w-[34ch] text-center text-gray-500 md:m-0 md:text-left">Take Control of Your Finances Anytime, Anywhere with Kobodrop.
            Discover the Smart Way to Use Your Money!
          </motion.p>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <StoreLinks type={BtnTypes.Standard} />
          </motion.div>
        </div>
        <div className="md:w-3/6 xl:mb-12 xl:overflow-hidden">
          {/* RIGHT SIDE */}
          <img
            className="right-0 m-auto w-72 xl:absolute xl:left-6 xl:mt-32 xl:right-0 xl:w-80"
            src={Phone} alt="Kobodrop App Frame" />
          <img
            className="hidden rounded-2xl xl:flex"
            src={HeroImage} alt="A woman happily using Kobodrop" />
        </div>
      </AnimatePresence>
    </section>
  )
}

export default Hero
