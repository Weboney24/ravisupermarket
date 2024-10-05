import { useState } from "react";
import { Link } from "react-router-dom";
import { IMAGE_HELPER } from "../../helper/ImageHelper";

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
                <Link to="/" onClick={closeDropdown}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={closeDropdown}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/gallery" onClick={closeDropdown}>
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/testimonial" onClick={closeDropdown}>
                  Testimonial
                </Link>
              </li>
            </ul>
          )}
        </div>

        {/* Logo */}
        <Link to="/" onClick={closeDropdown}>
          <img
            className="w-36 lg:w-52"
            src={IMAGE_HELPER.RavisLogo}
            alt="Ravi's Logo"
          />
        </Link>
      </div>

      {/* Center of Navbar */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu text-lg font-semibold menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/testimonial">Testimonial</Link>
          </li>
        </ul>
      </div>

      {/* Call Now Button */}
      <div className="navbar-end">
        <Link
          to="tel:09655597039"
          className="btn btn-sm bg-red-500 text-white lg:btn-md"
        >
          Call Now
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
