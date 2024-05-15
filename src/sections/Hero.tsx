import StoreLinks from "../common/StoreLinks";
import Phone from "../assets/app_frame.png";
import HeroImage from "../assets/hero.png";

function Hero() {
  return (
    <section>
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
        <img src={Phone} alt="Phone Image"/>
        <img src={HeroImage} alt="Hero Image"/>
      </div>
    </section>
  )
}

export default Hero
