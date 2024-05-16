import Klarna from '../assets/logo-wall/klarna.png';
import Stripe from '../assets/logo-wall/stripe.png';
import Paypal from '../assets/logo-wall/paypal.png';

function Partners() {
  return (
    <section id="partners" className="mt-20 flex flex-col bg-gray-50 py-20">
      <article className="mb-10 w-full px-8 text-center lg:px-12">
        <h2 className="mb-4 text-4xl font-semibold text-gray-800">Transact seamless with...</h2>
        <p className="">Connect your other accounts to Kobodrop seamlessly. Kobodrop supports 200+ <br />
          integrations with other payment platforms like stripe, paypal, payoneer and others</p>
      </article>
      <div className='xl:flex xl:justify-center'>
        <article className='flex mb-8 justify-center gap-8 text-center'>
          <img src={Klarna} alt="Klarna logo" className='w-20 md:w-36' />
          <img src={Stripe} alt="Stripe logo" className='w-20 md:w-36' />
          <img src={Paypal} alt="Paypal logo" className='w-20 md:w-36' />
        </article>
      </div>
    </section>
  )
}

export default Partners;
