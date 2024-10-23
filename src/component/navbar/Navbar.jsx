import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { IMAGE_HELPER } from "../../helper/ImageHelper";
import { Link } from "react-router-dom";

const Navbar = () => {
  // State to handle dropdown visibility
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  // Close dropdown when a link is clicked
  const closeDropdown = () => setDropdownOpen(false);

  return (
    <div className="navbar bg-base-100 px-5 lg:px-20 fixed top-0 z-50 shadow-md lg:w-full">
      {/* Start of Navbar */}
      <div className="navbar-start">
        {/* Dropdown for mobile screens */}
        <div className="dropdown lg:hidden">
          <button
            tabIndex={0}
            className="btn btn-ghost"
            onClick={toggleDropdown}
          >
            {/* Toggle between Hamburger and Close icons based on dropdown state */}
            {isDropdownOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 6h18M3 12h18m-6 6h6"
                />
              </svg>
            )}
          </button>
          {isDropdownOpen && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <ScrollLink
                  to="home"
                  smooth={true}
                  duration={500}
                  onClick={closeDropdown}
                >
                  Home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={500}
                  onClick={closeDropdown}
                >
                  About
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="gallery"
                  smooth={true}
                  duration={500}
                  onClick={closeDropdown}
                >
                  Gallery
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="testimonial"
                  smooth={true}
                  duration={500}
                  onClick={closeDropdown}
                >
                  Testimonial
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  onClick={closeDropdown}
                >
                  Contact
                </ScrollLink>
              </li>
            </ul>
          )}
        </div>

        {/* Logo */}
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          onClick={closeDropdown}
        >
          <img
            className="w-36 lg:w-52"
            src={IMAGE_HELPER.RavisLogo}
            alt="Ravi's Logo"
          />
        </ScrollLink>
      </div>

      {/* Center of Navbar */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu text-lg font-pri_head font-semibold menu-horizontal px-1">
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
            <ScrollLink to="contact" smooth={true} duration={500}>
              Contact
            </ScrollLink>
          </li>
        </ul>
      </div>

      {/* Call Now Button */}
      <div className="navbar-end">
        <Link
          to="https://wa.me/9655597039"
          className="btn btn-sm bg-red-500 hover:bg-[#6F94B7] text-white lg:btn-md"
        >
          Whatsapp Order
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
