import StoreLinks from "../common/StoreLinks";
import Phone from "../assets/app_frame.png";
import HeroImage from "../assets/hero.png";

function Hero() {
  return (
    <section className="relative mt-4 flex h-fit max-w-7xl flex-col
    items-center gap-10 px-8 sm:gap-16 md:my-0 md:flex-row md:h-[85vh]
    md:gap-0 lg:px-12 xl:m-auto xl:gap-0 xl:overflow-hidden">
      <div className="sm:w-full md:w-3/6">
        {/* LEFT SIDE */}
        <h1
          className="text-center mx-auto mb-8 w-[12ch] text-4xl font-semibold text-gray-800 sm:text-5xl md:mx-0 md:text-left">Start spending the smart way</h1>
        <p className="m-auto w-[34ch] text-center text-gray-500 md:m-0 md:text-left">Take Control of your Finances Anytime, Anywhere with Kobodrop.
          Discover the Smart Way to Use Your Money!
        </p>
        <StoreLinks />
      </div>
      <div className="">
        {/* RIGHT SIDE */}
        <img src={Phone} alt="Kobodrop App Frame" />
        <img src={HeroImage} alt="A woman happily using Kobodrop" />
      </div>
    </section>
  )
}

export default Hero
