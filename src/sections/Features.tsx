import AppFrame from '../assets/app_frame.png';
import ShieldCheck from '../assets/icons/check.png';
import Coins from '../assets/icons/coins.png';
import Frames from '../assets/frames.png';
import { motion, useInView, useScroll } from 'framer-motion';
import { useRef } from 'react';

function Features() {

  const featureRef = useRef(null);
  const isFeatureRefInView = useInView(featureRef, { margin: "-100px" });

  return (
    <section id="features" ref={featureRef}
      className="flex max-w-7xl flex-col gap-10 px-10 pt-10 lg:px-12 xl:pt-20 m-auto">
      <article className="m-auto w-[30ch] text-center text-gray-500 md:m-0 md:w-full">
        <motion.h2
          initial={{ y: -100, opacity: 0 }}
          animate={isFeatureRefInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-4 text-4xl font-semibold text-gray-800">Make every penny count</motion.h2>
        <motion.p
          initial={{ x: 100, opacity: 0 }}
          animate={isFeatureRefInView ? { x: 0, opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Spend smarter, lower your bills, get cashback on everything you buy, <br />
          and unlock credit to grow your business.
        </motion.p>

      </article>

      <motion.article
        initial={{ x: 100, opacity: 0 }}
        animate={isFeatureRefInView ? { x: 0, opacity: 1 } : {}}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="flex w-full flex-col gap-8 overflow-hidden xl:h-96 xl:flex-row">
        <div className="flex flex-col rounded-2xl bg-sky-100 px-4 sm:px-0 md:flex-row md:gap-8 xl:w-2/3">
          <div className="mt-10 flex flex-col justify-center gap-4 text-center sm:mx-10 md:mx-0 md:ml-10 md:w-1/2 md:text-left">
            <h2 className="m-auto text-center text-3xl font-semibold text-gray-800 sm:w-[18ch] md:m-0 md:text-left">Pay with Kobodrop, quick, simple and easy</h2>
            <p className="m-auto text-center text-gray-500 sm:w-[34ch] md:m-0 md:text-left">
              Paying your bills on Kobodrop has never been easier. Whether you are paying for electricity or internet, Kobodrop gets it done within seconds.
            </p>
          </div>
          <div className='m-auto mt-10 max-w-72 md:mx-10 md:w-1/2 lg:mx-0'>
            <img src={AppFrame} alt='Kobodrop app frame' />
          </div>
        </div>
        <div className='flex flex-col justify-center gap-4 rounded-2xl bg-indigo-100 p-10 xl:w-1/3'>
          <div className='w-fit rounded-full bg-indigo-200 p-4'>
            <img src={ShieldCheck} alt='' />
          </div>
          <h2 className='text-3xl font-semibold text-gray-800'>Bank level security</h2>
          <p className='text-gray-500'>
            Your money is 100% safe and secure on Kobodrop. No hassles, no glitches, get access to your money anytime.
          </p>
        </div>
      </motion.article>
      <article className="flex w-full flex-col gap-8 xl:h-96 xl:flex-row">
        <div className='flex flex-col justify-center gap-4 rounded-2xl bg-orange-100 p-10 xl:w-1/3'>
          <div className='w-fit rounded-full bg-orange-200 p-4'>
            <img src={Coins} alt='' />
          </div>
          <h2 className='text-3xl font-semibold text-gray-800'>Cost reduction</h2>
          <p className='text-gray-500'>
            Kobodrop reduced payments maintenance and processing fees. No hidden fees.
          </p>
        </div>
        <div className="flex flex-col  gap-8 overflow-hidden rounded-2xl bg-sky-100 px-4 sm:px-0 md:flex-row md:gap-8 xl:w-2/3">
          <div className="mt-10 flex flex-col justify-center gap-4 text-center sm:mx-10 md:mx-0 md:ml-10 md:w-1/2 md:text-left md:mt-0">
            <h2 className="m-auto text-center text-3xl font-semibold text-gray-800 sm:w-[18ch] md:m-0 md:text-left">Send, receive and Exchange money</h2>
            <p className="m-auto text-center text-gray-500 sm:w-[34ch] md:m-0 md:text-left">
              Transfers, payments all work on Kobodrop. Get your alert message immediately after a completed transaction.
            </p>
          </div>
          <div className='m-auto max-w-96 md:mx-10 md:w-1/2 lg:mx-0 md:mt-36'>
            <img src={Frames} alt='Frame displaying logos of various payment solutions' />
          </div>
        </div>

      </article>
    </section>
  )
}

export default Features;
