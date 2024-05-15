import StoreLinks from "../common/StoreLinks";
import Phone from "../assets/app_frame.png";
import HeroImage from "../assets/hero.png";

function Hero() {
  return (
    <section className="relative mt-4 flex h-fit max-w-7xl flex-col
    items-center gap-10 px-8 sm:gap-16 md:my-0 md:flex-row md:h-[85vh]
    md:gap-0 lg:px-12 xl:m-auto xl:gap-0 xl:overflow-hidden">
      <div>
        {/* LEFT SIDE */}
        <h1>Start spending the smart way</h1>
        <p>Take Control of your Finances Anytime, Anywhere with Kobodrop.
          Discover the Smart Way to Use Your Money!
        </p>
        <StoreLinks />
      </div>
      <div>
        {/* RIGHT SIDE */}
        <img src={Phone} alt="Kobodrop App Frame"/>
        <img src={HeroImage} alt="A woman happily using Kobodrop"/>
      </div>
    </section>
  )
}

export default Hero
