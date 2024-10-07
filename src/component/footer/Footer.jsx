import { Link } from "react-router-dom";
import { IMAGE_HELPER } from "../../helper/ImageHelper";

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
        <nav className="grid grid-flow-col gap-4">
          <Link to="/" className="link link-hover">
            Home
          </Link>
          <Link to="/about" className="link link-hover">
            About
          </Link>
          <Link to="/gallery" className="link link-hover">
            Gallery
          </Link>
          <Link to="/contact" className="link link-hover">
            Contact
          </Link>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </Link>
            <Link
              to="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.331 3.608 1.306.975.975 1.244 2.242 1.306 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.331 2.633-1.306 3.608-.975.975-2.242 1.244-3.608 1.306-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.331-3.608-1.306-.975-.975-1.244-2.242-1.306-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.331-2.633 1.306-3.608C4.514 2.494 5.781 2.225 7.147 2.163 8.413 2.105 8.793 2.163 12 2.163zm0-2.163C8.756 0 8.333 0 7.052.067 5.716.134 4.537.376 3.473 1.44 2.409 2.504 2.167 3.683 2.1 5.018 2.033 6.3 2 6.756 2 12s.033 5.7.1 6.982c.067 1.335.309 2.514 1.373 3.578 1.064 1.064 2.243 1.306 3.578 1.373 1.282.067 1.738.1 6.982.1s5.7-.033 6.982-.1c1.335-.067 2.514-.309 3.578-1.373 1.064-1.064 1.306-2.243 1.373-3.578.067-1.282.1-1.738.1-6.982s-.033-5.7-.1-6.982c-.067-1.335-.309-2.514-1.373-3.578C19.486.376 18.307.134 16.973.067 15.691 0 15.244 0 12 0zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162S8.597 18.162 12 18.162 18.162 15.403 18.162 12 15.403 5.838 12 5.838zm0 10.324c-2.296 0-4.162-1.866-4.162-4.162S9.704 7.838 12 7.838s4.162 1.866 4.162 4.162-1.866 4.162-4.162 4.162zm6.406-11.845c-.796 0-1.442.646-1.442 1.442s.646 1.442 1.442 1.442 1.442-.646 1.442-1.442-.646-1.442-1.442-1.442z"></path>
              </svg>
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
