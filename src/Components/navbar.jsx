import React, { useEffect, useMemo, useState } from "react";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import
{
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import myLogo from "./../../src/assets//flogo.png"; // Adjust the path as needed



const BookingModal = ( { isOpen, onClose } ) =>
{
  return (


    <Dialog open={ isOpen } onClose={ onClose } className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="relative bg-[#f5f5f5] p-8 rounded-lg max-w-md w-full">
          <button
            onClick={ onClose }
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
          <div className="flex items-center justify-center">
            <img src="/media/shape/set-left.png" alt="Left decoration" />
            <h2 className="text-3xl font-bold text-[#2A2522] mx-4 my-8">
              BOOK TABLE
            </h2>
            <img src="/media/shape/set-right.png" alt="Right decoration" />
          </div>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-[#C29D59]"
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-2 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-[#C29D59]"
              />
            </div>
            <div>
              <input
                type="time"
                placeholder="Time"
                className="w-full p-2 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-[#C29D59]"
              />
            </div>
            <div>
              <select className="w-full p-2 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-[#C29D59]">
                <option value="" disabled selected>
                  Select Deal
                </option>
                <option value="deal1">Breakfast Deal</option>
                <option value="deal2">Lunch Deal</option>
                <option value="deal3">Dinner Deal</option>
              </select>
            </div>
            <div>
              <input
                type="date"
                placeholder="DD/MM/YYYY"
                className="w-full p-2 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-[#C29D59]"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#C29D59] text-white py-2 px-4 rounded hover:bg-[#A27B37] transition-colors duration-300 mt-6"
            >
              RESERVE NOW
            </button>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

const NavbarComponent = () =>
{
  const [ isModalOpen, setIsModalOpen ] = useState( false );
  const location = useLocation();
  const [ activeTab, setActiveTab ] = useState( location.pathname );

  useEffect( () =>
  {
    console.log( location.pathname )
    setActiveTab( location.pathname );
  }, [ location ] );

  const navigation = [
    { name: "Home", href: "/home", current: location.pathname === "/home" },
    { name: "Menu", href: "/menu", current: location.pathname === "/menu" },
    {
      name: "Contact",
      href: "/contact",
      current: location.pathname === "/contact",
    },
    { name: "About", href: "/about", current: location.pathname === "/about" },
  ];

  return (
    <>
      <Disclosure as="nav" className="bg-transparent static w-full top-5 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex items-center">
              <img
                src={ myLogo }
                alt="Logo"
                className="h-16 w-auto"
              />
            </div>
            <div className="hidden md:flex space-x-6">
              <div className="space-x-6 flex items-center px-10">
                { navigation.map( ( item ) => (
                  <Link
                    to={ item.href }
                    key={ item.name }
                    className={ `text-base font-medium uppercase ${ item.href === activeTab
                      ? "text-[#E1BC8A]"
                      : "text-white hover:text-[#ada69b]"
                      }` }
                  >
                    { item.name }
                  </Link>
                ) ) }
              </div>
              <button
                onClick={ () => setIsModalOpen( true ) }
                className="text-base font-medium uppercase text-white border border-[#E1BC8A] px-4 py-2 rounded-md hover:bg-[#E1BC8A] hover:text-black transition"
              >
                HAVE A COFFEE
              </button>
            </div>
            <div className="md:hidden">
              <DisclosureButton className="text-white">
                <Bars3Icon className="h-6 w-6" />
              </DisclosureButton>
            </div>
          </div>
        </div>
        <DisclosurePanel className="md:hidden bg-[#2A2A2A]">
          <div className="space-y-4 px-4 py-6">
            { navigation.map( ( item ) => (
              <a
                key={ item.name }
                href={ item.href }
                className="block text-sm font-medium uppercase text-white hover:text-[#E1BC8A]"
              >
                { item.name }
              </a>
            ) ) }
          </div>
          <button
            onClick={ () => setIsModalOpen( true ) }
            className="w-full text-sm font-medium uppercase text-white border border-[#E1BC8A] py-2 rounded-md hover:bg-[#E1BC8A] hover:text-black transition"
          >
            HAVE A COFFEE
          </button>
        </DisclosurePanel>
      </Disclosure>
      <BookingModal
        isOpen={ isModalOpen }
        onClose={ () => setIsModalOpen( false ) }
      />
    </>
  );
};

export default NavbarComponent;
