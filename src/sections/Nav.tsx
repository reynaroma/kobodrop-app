import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Kobodrop from "../assets/logos/kobodrop_logo.svg";

function Nav() {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="flex h-[15vh] items-center max-w-7xl px-8
          justify-between">
            <div className="flex">
              <a href="#">
                <img src={Kobodrop} alt="Kobodrop" />
              </a>
              <div className="hidden sm:flex space-x-4 items-center ml-4">
                <a className="text-gray-500 hover:text-gray-900 active:text-gray-400" href="#features">Features</a>
                <a className="text-gray-500 hover:text-gray-900 active:text-gray-400" href="#partners">Partners</a>
                <a className="text-gray-500 hover:text-gray-900 active:text-gray-400" href="#reviews">Reviews</a>
              </div>
            </div>
            <a
              href="https://play.google.com"
              target="_blank"
              className="hidden sm:flex bg-gray-800 text-white rounded-xl px-5 py-3
            hover:bg-gray-900 active:bg-gray-600">Install Kobodrop</a>
            <DisclosureButton className=" sm:hidden rounded-md p-2 text-gray-500 hover:bg-gray-700 hover:text-white">
              {open ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}

            </DisclosureButton>
            <DisclosurePanel className="space-y-1">
              <DisclosureButton
                className="block" as="a" href="#features">Features
              </DisclosureButton>
              <DisclosureButton
                className="block" as="a" href="#partners">Partners
              </DisclosureButton>
              <DisclosureButton
                className="block" as="a" href="#reviews">Reviews
              </DisclosureButton>
            </DisclosurePanel>
          </div>
        </>
      )
      }
    </Disclosure >
  )
}

export default Nav
