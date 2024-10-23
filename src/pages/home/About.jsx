import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import DefaultHeader from "../../component/DefaultHeader";
import { Image } from "antd";

const About = () => {
  return (
    <div id="about" className="default_header">
      <DefaultHeader
        title={"About Us"}
        subTitle={"Your All-in-One Marketplace"}
      />

      <div className="lg:flex items-start justify-center gap-x-10 w-full">
        <Image
          src="https://content.jdmagicbox.com/comp/karur/e4/9999p4324.4324.150121100022.z5e4/catalogue/ravis-smart-shoppe-jawahar-bazaar-karur-supermarkets-1ctvsxwmiq.jpg"
          alt=""
          className="!w-[600px] !h-[400px] sticky top-2 border-4 !object-cover !rounded-lg"
        />
        <div className="text-center lg:text-left">
          <h1 className=" lg:text-5xl md:text-4xl text-2xl  text-primary uppercase font-bold">
            {" "}
            Ravi&apos;s Super <span className="font-semibold">Market</span>
          </h1>
          <p className="py-6 px-5 lg:px-0 lg:w-[560px] text-justify font-sec_para">
            Welcome to Ravi&apos;s Super Market, your one-stop destination for
            all your needs! We offer a diverse range of fresh groceries,
            essential home products, and a fun-filled play area for kids,
            ensuring a convenient shopping experience for the whole family.
            Plus, our mini meeting hall provides a comfortable space for
            gatherings or small events, making it easy to connect with others
            while enjoying the best that your neighborhood supermarket has to
            offer.
          </p>

          <div className="flex space-x-4 pt-4 px-5 lg:px-0">
            <Link
              to="https://www.facebook.com/RavisSmartShoppe/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-4xl border lg:p-2 p-1  rounded-full text-white bg-primary" />
            </Link>
            <Link
              to="https://www.instagram.com/ravis_supermarket_krr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-4xl border lg:p-2 p-1 rounded-full text-white bg-primary" />
            </Link>
            <Link to="https://wa.me/9655597039" rel="noopener noreferrer">
              <FaWhatsapp className="text-4xl border lg:p-2 p-1 rounded-full text-white bg-primary" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
