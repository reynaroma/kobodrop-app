import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Kobodrop from "../assets/logos/kobodrop_logo.svg";
import ButtonLink from "../common/ButtonLink";
import { AnimatePresence, easeOut, motion } from 'framer-motion';

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
            <div
              className="flex">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.85 }}
              >
                <ButtonLink href="#" children={<img src={Kobodrop} alt="Kobodrop logo" />} />
              </motion.div>
              <div className="hidden sm:flex space-x-4 items-center ml-4
              lg:ml-8 lg:space-x-8">
                {navLinks.map((link, index) => (
                  <motion.div
                    whileTap={{ scale: 0.85 }}
                    whileHover={{ scale: 1.1 }}>
                    <ButtonLink
                      key={index}
                      href={link.href}
                      children={link.children}
                      className={textLinkClasses}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.85 }}
            >
              <ButtonLink
                href="https://play.google.com"
                target="_blank"
                children="Install Kobodrop"
                className="hidden sm:flex bg-gray-800 text-white rounded-xl px-5 py-3 hover:bg-gray-900 active:bg-gray-600" />
            </motion.div>
            <DisclosureButton className=" sm:hidden rounded-md p-2 text-gray-500 hover:bg-gray-700 hover:text-white">
              {open ? (
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 90 }}
                  whileTap={{ scale: 0.8, rotate: -180, borderRadius: "100%" }}
                >
                  <XMarkIcon className="block h-6 w-6" />
                </motion.div>

              ) : (
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 180 }}
                  whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
                >
                  <Bars3Icon className="block h-6 w-6" />
                </motion.div>
              )}

            </DisclosureButton>
          </div>
          <AnimatePresence>
            {open && (
              <DisclosurePanel
                static
                as={motion.div}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: easeOut }}
                className="flex flex-col items-center justify-center text-3xl gap-12 sm:hidden h-[calc(100vh-15vh)] text-white bg-gray-800">
                {navLinks.map((link, index) => (
                  <motion.a
                    className="block"
                    key={index}
                    href={link.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, delay: index * 0.2, ease: "easeInOut" }}
                  >
                    {link.children}
                  </motion.a>
                ))}
              </DisclosurePanel>
            )}
          </AnimatePresence>

        </>
      )}
    </Disclosure >
  )
}

export default Nav
