import AppleLogo from '../assets/logos/app_store.svg';
import GoogleLogo from '../assets/logos/google_play.svg';
import StoreLink from '../common/StoreLink';

function StoreLinks() {
  return (
    <div className='hidden mt-10 justify-center space-x-2 sm:flex md:justify-normal'>
      <StoreLink
        href="https://www.apple.com/app-store"
        upperText='Download on the'
        lowerText='Apple Store'
        logo={AppleLogo}
        className='flex gap-3 bg-zinc-900 px-4 py-3 rounded
          text-white hover:bg-zinc-950 active:bg-zinc-800'
        target='_blank'
      />
      <StoreLink
        href="https://play.google.com/"
        upperText='Get it on'
        lowerText='Google Play'
        logo={GoogleLogo}
        className='flex gap-3 bg-zinc-900 px-4 py-3 rounded
          text-white hover:bg-zinc-950 active:bg-zinc-800'
        target='_blank'
      />
    </div>
  )
}

export default StoreLinks;
