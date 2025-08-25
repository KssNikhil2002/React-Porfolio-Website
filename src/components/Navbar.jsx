import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full py-6 px-8 flex justify-center bg-gray-50/95 fixed top-0 z-50 backdrop-blur-sm">
      <nav className="w-full max-w-screen-lg flex justify-between items-center">
        {/* Left Section (Name or Logo) */}
        <div className="text-2xl font-semibold text-gray-800">
          KN
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none text-black"
          >
            {/* Hamburger icon */}
            <svg
              className="h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Right Section (Navigation Links for large screens) */}
        <div className="hidden lg:flex space-x-8 text-base">
          <a
            href="#about"
            className="font-medium text-gray-700 hover:text-gray-900 transition duration-200"
          >
            About
          </a>
          <a
            href="#experience"
            className="font-medium text-gray-700 hover:text-gray-900 transition duration-200"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="font-medium text-gray-700 hover:text-gray-900 transition duration-200"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="font-medium text-gray-700 hover:text-gray-900 transition duration-200"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-20 right-0 w-full bg-gray-50/95 backdrop-blur-sm flex flex-col space-y-4 p-6 z-50">
            <a
              href="#about"
              className="hover:text-slate-600 hover:underline transition duration-200"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="#experience"
              className="hover:text-slate-600 hover:underline transition duration-200"
              onClick={toggleMenu}
            >
              Experience
            </a>
            <a
              href="#projects"
              className="hover:text-slate-600 hover:underline transition duration-200"
              onClick={toggleMenu}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-slate-600 hover:underline transition duration-200"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
