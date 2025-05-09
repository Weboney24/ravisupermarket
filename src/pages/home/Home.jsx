// eslint-disable-next-line no-unused-vars
import React from "react";
import { Button } from "antd";
import { WhatsAppOutlined } from "@ant-design/icons";
import Footer from "../../component/footer/Footer";
import Navbar from "../../component/navbar/Navbar";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Testimonial from "./Testimonial";
import About from "./About";
import Servises from "./Servises";

const Home = () => {
  return (
    <div>
      <Navbar />
      <section id="home" className="hero brightness-150 pt-20 min-h-screen bg-fixed bg-[linear-gradient(to_right,#00000080,#00000080),url('https://img.freepik.com/premium-photo/grocery-aisle-with-variety-products-shelves_1146701-16735.jpg?w=740')] bg-cover bg-center object-cover">
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-screen-lg flex items-center flex-col justify-center bg-[#173e6ba4] p-6">
            <h1 className="mb-2 lg:text-7xl md:text-5xl text-2xl tracking-tight font-semibold font-pri_head mt-5">
              Ravi&apos;s <span className="text-yellow-400">Super Market</span>
            </h1>
            <p className="mb-8 lg:text-4xl md:text-xl font-sec_para">
              <span className="text-yellow-400">25,000</span> Plus Products All In One Roof
            </p>
          </div>
        </div>
      </section>
      <div className="lg:px-20 w-full">
        <About />
      </div>
      <Gallery />
      <div className="lg:px-20 w-full">
        <Testimonial />
      </div>
      <div className="lg:px-20 w-full">
        <Servises />
      </div>
      <div className="lg:px-20 w-full">
        <Contact />
      </div>

      <Footer />
      {/* WhatsApp Icon */}
      <div className="fixed bottom-4 right-4">
        <div className="flex items-center">
          <div>
            <button className="px-3 py-3 flex items-center bg-red-500 rounded-lg">
              {/* WhatsApp Order Text */}
              <span className="font-sec_para text-white text-sm">WhatsApp Order</span>
            </button>
          </div>
          {/* WhatsApp Icon */}
          <div>
            <a href="https://wa.me/9655597039" target="_blank" rel="noopener noreferrer">
              <Button
                shape="circle"
                size="large"
                style={{
                  backgroundColor: "#25D366",
                  color: "white",
                  border: "none",
                  width: "64px", // Equivalent to p-4 (16px padding) + default size
                  height: "64px", // Keeping it circular with same width and height
                  display: "flex", // Ensure alignment
                  alignItems: "center",
                  justifyContent: "center",
                }}
                icon={<WhatsAppOutlined style={{ fontSize: "32px" }} />} // Adjust icon size as needed
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
