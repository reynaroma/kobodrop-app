import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Kobodrop from "../assets/logos/kobodrop_logo.svg";

function Nav() {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="flex h-[15vh] items-center max-w-7xl px-8">
            <a href="#">
              <img src={Kobodrop} alt="Kobodrop" />
            </a>
            <div className="flex space-x-4 items-center ml-4">
              <a className="text-gray-500 hover:text-gray-900 active:text-gray-400" href="#features">Features</a>
              <a className="text-gray-500 hover:text-gray-900 active:text-gray-400" href="#partners">Partners</a>
              <a className="text-gray-500 hover:text-gray-900 active:text-gray-400" href="#reviews">Reviews</a>
            </div>
          </div>
        </>
      )
      }
    </Disclosure >
  )
}

export default Nav
