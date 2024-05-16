
function Features() {
  return (
    <section id="features"
      className="flex max-w-7xl flex-col gap-10 px-10 pt-10 lg:px-12 xl:pt-20">
      <article className="m-auto w-[30ch] text-center text-gray-500 md:m-0 md:w-full">
        <h2 className="mb-4 text-4xl font-semibold text-gray-800">Make every penny count</h2>
        <p>
          Spend smarter, lower your bills, get cashback on everything you buy, <br />
          and unlock credit to grow your business.
        </p>

      </article>

      <article className="flex w-full flex-col gap-8 overflow-hidden xl:h-96 xl:flex-row">
        <div className="flex flex-col rounded-2xl bg-sky-100 px-4 sm:px-0 md:flex-row md:gap-8 xl:w-2/3">
          <div className="mt-10 flex flex-col justify-center gap-4 text-center sm:mx-10 md:mx-0 md:ml-10 md:w-1/2 md:text-left">
            <h2 className="m-auto text-center text-3xl font-semibold text-gray-800 sm:w-[18ch] md:m-0 md:text-left">Pay with Kobodrop, quick, simple and easy</h2>
            <p>
              Paying your bills on Kobodrop has never been easier. Whether you are paying for electricity or internet, Kobodrop gets it done within seconds.
            </p>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Features;
