import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import IMAGE_HELPER from "../helper/imagehelper";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
  const closeDropdown = () => setDropdownOpen(false);

  return (
    <div className="navbar px-5 lg:px-20 fixed top-0 z-50 shadow-md w-full bg-white">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown lg:hidden">
          <button tabIndex={0} className="btn btn-ghost" onClick={toggleDropdown}>
            {isDropdownOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18m-6 6h6" />
              </svg>
            )}
          </button>
          {isDropdownOpen && (
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <ScrollLink to="home" smooth={true} duration={500} onClick={closeDropdown}>
                  Home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="about" smooth={true} duration={500} onClick={closeDropdown}>
                  About
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="gallery" smooth={true} duration={500} onClick={closeDropdown}>
                  Gallery
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="testimonial" smooth={true} duration={500} onClick={closeDropdown}>
                  Testimonial
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="contact" smooth={true} duration={500} onClick={closeDropdown}>
                  Contact
                </ScrollLink>
              </li>
            </ul>
          )}
        </div>

        {/* Logo on the left side */}
        <ScrollLink to="home" smooth={true} duration={500} onClick={closeDropdown}>
          <img src={IMAGE_HELPER.LOGO} alt="logo" className="w-[200px] h-[80px] ml-2 sm:ml-4 lg:ml-6 md:block hidden" />
        </ScrollLink>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu text-lg font-pri_head font-semibold menu-horizontal px-6">
          <li>
            <ScrollLink to="home" smooth={true} duration={500}>
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="about" smooth={true} duration={500}>
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="gallery" smooth={true} duration={500}>
              Gallery
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="testimonial" smooth={true} duration={500}>
              Testimonial
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="services" smooth={true} duration={500}>
              Services
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="contact" smooth={true} duration={500}>
              Contact
            </ScrollLink>
          </li>
        </ul>
      </div>

      {/* WhatsApp Order Button */}
      <div className="navbar-end">
        <Link to="https://wa.me/9655597039" className="btn btn-sm bg-red-500 hover:bg-[#6F94B7] text-white lg:btn-md">
          Whatsapp Order
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
