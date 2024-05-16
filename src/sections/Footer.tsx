import KobodropLight from '../assets/logos/kobodrop_logo_bright.png';

function Footer() {
  return (
    <section className='bg-gray-800'>
      <div className='flex max-w-7xl flex-col px-8 py-12 text-gray-300 lg:px-12 xl:m-auto'>
        <div className='flex flex-col justify-between gap-12 md:flex-row md:gap-0'>
          <div>
            <img
              className="mb-4 w-36"
              src={KobodropLight}
              alt="Light version of Kobodrop logo" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer;
