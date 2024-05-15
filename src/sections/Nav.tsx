import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Kobodrop from "../assets/logos/kobodrop_logo.svg";

function Nav() {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="flex">
            <a href="#"><img src={Kobodrop} alt="" /></a>
            <div className="flex">
              <div>ButtonLink</div>
              <div>ButtonLink</div>
              <div>ButtonLink</div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  )
}

export default Nav
