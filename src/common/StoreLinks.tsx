/* eslint-disable react-refresh/only-export-components */
import AppleLogo from '../assets/logos/app_store.svg';
import GoogleLogo from '../assets/logos/google_play.svg';
import StoreLink from '../common/StoreLink';
import GooglePlayBright from '../assets/logos/google_play_bright.svg';

interface StoreLinksProps {
  type: BtnTypes;
}

export enum BtnTypes {
  Standard,
  Variant,
}

function StoreLinks({ type }: StoreLinksProps) {
  if (type === BtnTypes.Standard) {
    return (
      <div className='hidden mt-10 justify-center space-x-2 sm:flex md:justify-normal'>
        <StoreLink
          href="https://www.apple.com/app-store"
          upperText='Download on the'
          lowerText='App Store'
          logo={AppleLogo}
          className='flex gap-3 bg-zinc-900 px-4 py-3 rounded-lg
            text-white hover:bg-zinc-950 active:bg-zinc-800'
          target='_blank'
        />
        <StoreLink
          href="https://play.google.com/"
          upperText='Get it on'
          lowerText='Google Play'
          logo={GoogleLogo}
          className='flex gap-3 bg-zinc-900 px-4 py-3 rounded-lg
            text-white hover:bg-zinc-950 active:bg-zinc-800'
          target='_blank'
        />
      </div>
    )
  }
  if (type === BtnTypes.Variant) {
    return (
      <>
        <StoreLink
          href="https://www.apple.com/app-store"
          upperText='Download on the'
          lowerText='App Store'
          logo={AppleLogo}
          className='my-4 border flex gap-3 bg-transparent px-2 py-1 rounded-lg
            text-white hover:bg-zinc-950 active:bg-zinc-800'
          target='_blank'
        />
        <StoreLink
          href="https://play.google.com/"
          upperText='Get it on'
          lowerText='Google Play'
          logo={GooglePlayBright}
          className='my-4 border flex gap-3 bg-transparent px-2 py-1 rounded-lg
            text-white hover:bg-zinc-950 active:bg-zinc-800'
          target='_blank'
        />
      </>
    )
  }

}

export default StoreLinks;
