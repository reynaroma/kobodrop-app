import Klarna from '../assets/logo-wall/klarna.png';
import Stripe from '../assets/logo-wall/stripe.png';
import Paypal from '../assets/logo-wall/paypal.png';
import LogoWall from "../common/LogoWall";

function Partners() {
  return (
    <section id="partners" className="mt-20 flex flex-col bg-gray-50 py-20">
      <article className="mb-10 w-full px-8 text-center lg:px-12">
        <h2 className="mb-4 text-4xl font-semibold text-gray-800">Transact seamless with...</h2>
        <p className="">Connect your other accounts to Kobodrop seamlessly. Kobodrop supports 200+ <br />
          integrations with other payment platforms like stripe, paypal, payoneer and others</p>
      </article>
      <div className='xl:flex xl:justify-center'>
        <LogoWall src1={Klarna} src2={Stripe} src3={Paypal} alt1="Klarna logo" alt2="Stripe logo" alt3="Paypal logo" />
      </div>
    </section>
  )
}

export default Partners;
