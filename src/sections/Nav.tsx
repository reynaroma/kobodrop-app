import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Kobodrop from "../assets/logos/kobodrop_logo.svg";
import ButtonLink from "../common/ButtonLink";

function Nav() {
  const textLinkClasses = "text-gray-500 hover:text-gray-900 active:text-gray-400";
  const navLinks = [
    { href: "#features", children: "Features" },
    { href: "#partners", children: "Partners" },
    { href: "#reviews", children: "Reviews" }
  ];

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="flex h-[15vh] items-center max-w-7xl px-8
          justify-between lg:px-12 xl:m-auto">
            <div className="flex">
              <ButtonLink href="#" children={<img src={Kobodrop} alt="Kobodrop logo" />} />
              <div className="hidden sm:flex space-x-4 items-center ml-4
              lg:ml-8 lg:space-x-8">
                {navLinks.map((link, index) => (
                  <ButtonLink
                    key={index}
                    href={link.href}
                    children={link.children}
                    className={textLinkClasses}
                  />
                ))}
              </div>
            </div>
            <ButtonLink
              href="https://play.google.com"
              target="_blank"
              children="Install Kobodrop"
              className="hidden sm:flex bg-gray-800 text-white rounded-xl px-5 py-3 hover:bg-gray-900 active:bg-gray-600" />
            <DisclosureButton className=" sm:hidden rounded-md p-2 text-gray-500 hover:bg-gray-700 hover:text-white">
              {open ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}

            </DisclosureButton>
          </div>
          <DisclosurePanel className="space-y-1 px-4 sm:hidden">
            {navLinks.map((link, index) => (
              <DisclosureButton
                className="block"
                key={index}
                as="a"
                href={link.href}
                >
                {link.children}
              </DisclosureButton>
            ))}
          </DisclosurePanel>
        </>
      )}
    </Disclosure >
  )
}

export default Nav
