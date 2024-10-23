import { Link } from "react-router-dom";
import { IMAGE_HELPER } from "../../helper/ImageHelper";
import { Link as ScrollLink } from "react-scroll";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center w-full !font-sec_para bg-gradient-to-tr !text-white from-primary to-secondary rounded p-10">
        <div>
          <Link to="/">
            <img
              src={IMAGE_HELPER.RavisLogo}
              alt="Ravi's Logo"
              className="w-60 bg-white"
            />
          </Link>
        </div>
        <div className=" w-full h-auto">
          <ul className="menu text-lg font-semibold flex lg:flex-row flex-col">
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

        <nav>
          <div className="grid grid-flow-col gap-4">
            <Link
              to="https://www.facebook.com/RavisSmartShoppe/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size="25px" />
            </Link>
            <Link
              to="https://www.instagram.com/ravis_supermarket_krr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size="25px" />
            </Link>
            <Link to="https://wa.me/9655597039" target="_blank">
              <FaWhatsapp size="25px" />
            </Link>
          </div>
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            &nbsp;
            <Link
              target="_blank"
              to="https://weboney.in/"
              className="!font-medium"
            >
              Weboney Designs
            </Link>
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
