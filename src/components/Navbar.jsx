import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ServicesDropdown from "./ServicesDropdown";
import AdvertisementLine from "./AdvertisementLine";
import { MdKeyboardArrowDown } from "react-icons/md";
import logo from "@/assets/Legafin-logo.png";

const EMAIL = "contact@legafin.org";
const EMAIL_HREF = "mailto:contact@legafin.org";

const smoothNavigate = (navigate, path) => {
  navigate(path);
  window.scrollTo({ top: 0, behavior: "smooth" });
};

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownTimer = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);
  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const handleHover = (open) => {
    clearTimeout(dropdownTimer.current);
    if (open) setDropdownOpen(true);
    else dropdownTimer.current = setTimeout(() => setDropdownOpen(false), 200);
  };

  const handleNavClick = (path) => {
    smoothNavigate(navigate, path);
    setDropdownOpen(false);
  };

  const handleMobileNavClick = (path) => {
    closeMenu();
    smoothNavigate(navigate, path);
    setDropdownOpen(false);
  };

  const linkClass =
    "relative group text-blue-800 transition-all duration-300 font-serif cursor-pointer transform hover:scale-105";

  return (
    // <nav className="fixed top-0 w-full bg-white backdrop-blur-md shadow-md z-50">
    //   <div className="w-full mx-auto px-5">
    //     {/* <div className="h-16 flex items-center justify-between"> */}
    //       <div
    //         onClick={() => handleNavClick("/")}
    //         className="text-2xl font-extrabold text-[#6659B8] cursor-pointer hover:text-blue-700 transition-colors duration-300 transform hover:scale-105"
    //       >

    //         LEGAFIN
    //       </div>

    //  
    <nav className="fixed top-0 w-full bg-white backdrop-blur-md shadow-md z-50">
      <div className="w-full mx-auto px-5">


        <div className="flex items-center justify-between py-4">
          {/* Brand */}
          <button
            onClick={() => handleNavClick("/")}
            className="group inline-flex items-center gap-2 cursor-pointer select-none"
            aria-label="Go to home"
            type="button"
          >
            <img
              src={logo}
              alt="Legafin logo"
              className="h-8 w-8 object-contain rounded-sm shrink-0"
            />
            <span className="text-xl md:text-2xl font-extrabold tracking-wide text-[#6659B8] transition-colors group-hover:text-blue-700">
              LEGAFIN
            </span>
          </button>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-blue-700 focus:outline-none focus:ring-0"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center space-x-8 font-medium">
            <li>
              <div onClick={() => handleNavClick("/")} className={`${linkClass} group`}>
                Home
                <span className="block h-[2px] w-0 bg-blue-700 group-hover:w-full transition-all duration-300"></span>
              </div>
            </li>

            <li>
              <div onClick={() => handleNavClick("/about")} className={`${linkClass} group`}>
                About
                <span className="block h-[2px] w-0 bg-blue-700 group-hover:w-full transition-all duration-300"></span>
              </div>
            </li>

            <li
              onMouseEnter={() => handleHover(true)}
              onMouseLeave={() => handleHover(false)}
              className="relative group font-serif cursor-pointer"
            >
              <div
                onClick={toggleDropdown}
                className={`${linkClass} flex items-center gap-1`}
              >
                All Services
                <MdKeyboardArrowDown
                  className={`mt-[2px] transform transition-transform duration-300 ${dropdownOpen ? "rotate-180" : "rotate-0"
                    }`}
                />
                <span className="block h-[2px] w-0 bg-blue-700 group-hover:w-full absolute bottom-0 left-0 transition-all duration-300"></span>
              </div>

              {dropdownOpen && (
                <div className="absolute left-1/2 top-full -translate-x-1/2 mt-4 w-[950px] bg-white border border-blue-200 rounded-2xl shadow-2xl z-50 animate-fadeIn">
                  <ServicesDropdown setDropdownOpen={setDropdownOpen} />
                </div>
              )}
            </li>

            <li>
              <div onClick={() => handleNavClick("/career")} className={`${linkClass} group`}>
                Careers
                <span className="block h-[2px] w-0 bg-blue-700 group-hover:w-full transition-all duration-300"></span>
              </div>
            </li>

            <li>
              <div onClick={() => handleNavClick("/contact")} className={`${linkClass} group`}>
                Contact
                <span className="block h-[2px] w-0 bg-blue-700 group-hover:w-full transition-all duration-300"></span>
              </div>
            </li>

            <li>
              <a
                href={EMAIL_HREF}
                onClick={closeMenu}
                className="bg-[#6659B8] px-4 py-2 rounded-full flex items-center gap-2 font-sans shadow-md text-white"
              >
                📧 {EMAIL}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="flex flex-col justify-between min-h-screen py-8 px-4 backdrop-blur-sm">
          <ul className="flex flex-col space-y-4 font-serif">
            <li>
              <div
                onClick={() => handleMobileNavClick("/")}
                className="text-blue-800 cursor-pointer"
              >
                Home
              </div>
            </li>
            <li>
              <div
                onClick={() => handleMobileNavClick("/about")}
                className="text-blue-800  cursor-pointer"
              >
                About
              </div>
            </li>
            <li>
              <div
                onClick={toggleDropdown}
                className="text-blue-800 cursor-pointer flex items-center gap-1"
              >
                All Services
                <MdKeyboardArrowDown
                  className={`mt-[2px] transform transition-transform duration-300 ${dropdownOpen ? "rotate-180" : "rotate-0"
                    }`}
                />
              </div>
              {dropdownOpen && (
                <div className="mt-2 bg-white border border-blue-200 rounded-xl shadow-lg max-h-[320px] overflow-y-auto animate-fadeIn">
                  <ServicesDropdown
                    setDropdownOpen={setDropdownOpen}
                    closeMenu={closeMenu}
                  />
                </div>
              )}
            </li>
            <li>
              <div
                onClick={() => handleMobileNavClick("/career")}
                className="text-blue-800  cursor-pointer"
              >
                Careers
              </div>
            </li>
            <li>
              <div
                onClick={() => handleMobileNavClick("/contact")}
                className="text-blue-800  cursor-pointer"
              >
                Contact
              </div>
            </li>
            <li>
              <a
                href={EMAIL_HREF}
                onClick={closeMenu}
                className="flex justify-center items-center gap-2 bg-blue-700 text-white px-5 py-2 rounded-full font-semibold"
              >
                📧 {EMAIL}
              </a>
            </li>
          </ul>
        </div>
      )}
      <AdvertisementLine />
    </nav>
  );
}

export default Navbar;
