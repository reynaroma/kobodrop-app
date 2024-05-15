import AppleLogo from '../assets/logos/app_store.svg'
function Hero() {
  return (
    <section>
      <div>
        {/* LEFT */}
        <h1>Start spending the smart way</h1>
        <p>Take Control of your Finances Anytime, Anywhere with Kobodrop.
          Discover the Smart Way to Use Your Money!
        </p>
      </div>
      <div className='mt-10 justify-center space-x-2 sm:flex md:justify-normal'>
        <a
          href="https://www.apple.com/app-store"
          className="flex gap-3 bg-zinc-900 px-4 py-3 rounded
      text-white hover:bg-zinc-950 active:bg-zinc-800">
          <img src={AppleLogo} alt="Apple logo" className='w-5' />
        </a>
      </div>

    </section>
  )
}

export default Hero
