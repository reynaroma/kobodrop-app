import StoreLinks, { BtnTypes } from "../common/StoreLinks";
import Phone from "../assets/mockup.svg";
import HeroImage from "../assets/hero.png";
import { motion, AnimatePresence } from "framer-motion";

function Hero() {
  return (
    <section className="relative mt-4 flex h-fit max-w-7xl flex-col
    items-center gap-10 px-8 sm:gap-16 md:my-0 md:flex-row md:h-[85vh]
    md:gap-0 lg:px-12 xl:m-auto xl:gap-0 xl:overflow-hidden">
      <AnimatePresence>
        <div className="sm:w-full md:w-3/6">
          {/* LEFT SIDE */}
          <motion.h1
            className="text-center mx-auto mb-8 w-[12ch] text-4xl font-semibold text-gray-800 sm:text-5xl md:mx-0 md:text-left">Start spending the smart way</motion.h1>
          <p className="m-auto w-[34ch] text-center text-gray-500 md:m-0 md:text-left">Take Control of Your Finances Anytime, Anywhere with Kobodrop.
            Discover the Smart Way to Use Your Money!
          </p>
          <StoreLinks type={BtnTypes.Standard} />
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
