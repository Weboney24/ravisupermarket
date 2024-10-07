import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

// Import your section components
import Home from "./components/Home";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

const App = () => {
  return (
    <Router>
      <div>
        {/* Navbar with HashLinks for smooth scrolling */}
        <nav style={{ background: "#343a40", padding: "10px", color: "white" }}>
          <ul style={{ display: "flex", justifyContent: "space-around" }}>
            <li>
              <HashLink smooth to="#home" style={{ color: "white" }}>
                Home
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#about" style={{ color: "white" }}>
                About
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#gallery" style={{ color: "white" }}>
                Gallery
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#testimonials" style={{ color: "white" }}>
                Testimonials
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#contact" style={{ color: "white" }}>
                Contact
              </HashLink>
            </li>
          </ul>
        </nav>

        {/* Sections */}
        <Routes>
          <Route path="/" element={<Sections />} />
        </Routes>
      </div>
    </Router>
  );
};

// Wrapper for all the sections
const Sections = () => {
  return (
    <div>
      <section id="#home">
        <Home />
      </section>
      <section id="#about">
        <About />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
