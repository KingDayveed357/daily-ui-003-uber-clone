import React, { useState } from "react";
import { RiBasketballLine } from "react-icons/ri";
import { HiMenuAlt4 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";

interface NavbarProps {
  onMenuToggle: (isOpen: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    const newMenuState = !isMenuOpen;
    setIsMenuOpen(newMenuState);
    onMenuToggle(newMenuState);
  };

  return (
    <>
      <div className="navbar max-w-[1300px] mx-auto md:border-b-0 border-b-[0.1px] p-5 text-white">
        <div className="flex-1 gap-2">
          <a className="text-2xl lg:mr-5">Uber</a>
          <div className="hidden md:flex">
            <button className="btn btn-sm border-none m-1 hover:bg-[#282828] text-white rounded-none bg-transparent hover:rounded-full">
              Ride
            </button>
            <button className="btn btn-sm border-none  m-1 hover:bg-[#282828] text-white rounded-none bg-transparent hover:rounded-full">
              Drive
            </button>
            <button className="btn btn-sm border-none  m-1 hover:bg-[#282828] text-white rounded-none bg-transparent hover:rounded-full">
              Uber Eats
            </button>
            <details className="dropdown">
              <summary className="m-1 btn btn-sm border-none hover:bg-[#282828] text-white rounded-none bg-transparent hover:rounded-full">
                About
              </summary>
              <ul className="menu dropdown-content mt-3 bg-base-100 rounded-t-sm text-[#757575] rounded-b-lg z-[1] w-52 p-2 shadow">
                <li className="">
                  <a className="hover:text-black">About us</a>
                </li>
                <li>
                  <a className="hover:text-black">Our Offerings</a>
                </li>
                <li>
                  <a className="hover:text-black">How Uber works</a>
                </li>
                <li>
                  <a className="hover:text-black">Impact</a>
                </li>
                <li>
                  <a className="hover:text-black">Diversity, equity and inclusion</a>
                </li>
                <li>
                  <a className="hover:text-black">Sustainability</a>
                </li>
                <li>
                  <a className="hover:text-black">Newsroom</a>
                </li>
                <li>
                  <a className="hover:text-black">Investor relations</a>
                </li>
                <li>
                  <a className="hover:text-black">Blog</a>
                </li>
                <li>
                  <a className="hover:text-black">Careers</a>
                </li>
              </ul>
            </details>
          </div>
        </div>
        <div className="flex-none gap-2 md:gap-3">
          <button className="btn btn-sm border-none hidden md:flex hover:bg-[#282828] text-white rounded-none bg-transparent hover:rounded-full">
            <RiBasketballLine className="text-lg" /> EN
          </button>
          <button className="btn btn-sm border-none hover:bg-[#282828] hidden md:flex text-white rounded-none bg-transparent hover:rounded-full">
            Help
          </button>
          <button className="btn btn-sm border-none hover:bg-[#282828] text-white rounded-none bg-transparent hover:rounded-full">
            Log in
          </button>
          <button className="btn btn-sm border-none bg-[#ffffff] text-black rounded-full">
            Sign up
          </button>
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? (
              <MdOutlineClose className="text-xl" />
            ) : (
              <HiMenuAlt4 className="text-xl" />
            )}
          </button>
        </div>
      </div>

      {/* Fullscreen Overlay Menu */}
      {isMenuOpen && (
        <div className="h-screen overflow-y-auto bg-white p-5 z-50 flex flex-col md:hidden">
          <nav className="flex flex-col space-y-8 text-white text-lg">
            <p className="text-3xl text-black font-bold">Ride</p>
            <p className="text-3xl text-black font-bold">Drive</p>
            <p className="text-3xl text-black font-bold">Uber Eats</p>
            <details className="dropdown  relative dropdow">
              <summary className="text-3xl text-black font-bold">
                About
              </summary>
              <ul className="menu dropdown-content space-y-4 my-3 text-[#757575]">
                <li className="">
                  <a className="hover:bg-white">About us</a>
                </li>
                <li>
                  <a className="">Our Offerings</a>
                </li>
                <li>
                  <a className="">How Uber works</a>
                </li>
                <li>
                  <a className="">Impact</a>
                </li>
                <li>
                  <a className="">Diversity, equity and inclusion</a>
                </li>
                <li>
                  <a className="">Sustainability</a>
                </li>
                <li>
                  <a className="">Newsroom</a>
                </li>
                <li>
                  <a className="">Investor relations</a>
                </li>
                <li>
                  <a className="">Blog</a>
                </li>
                <li>
                  <a className="">Careers</a>
                </li>
              </ul>
            </details>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
