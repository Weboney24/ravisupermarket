import { FaFacebook } from "react-icons/fa";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";
import DefaultHeader from "../component/DefaultHeader";
import { Image } from "antd";

const About = () => {
  return (
    <div className="default_header">
      <DefaultHeader
        title={"About Us"}
        subTitle={"Your  All-in-One  Marketplace"}
      />

      <div className="flex items-start justify-between gap-x-10 w-full">
        <Image
          src="https://content.jdmagicbox.com/comp/karur/e4/9999p4324.4324.150121100022.z5e4/catalogue/ravis-smart-shoppe-jawahar-bazaar-karur-supermarkets-1ctvsxwmiq.jpg"
          alt=""
          className="!w-[600px] !h-[400px] sticky top-2 border-4 !object-cover !rounded-lg"
        />
        <div className="text-center lg:text-left">
          <h1 className="text-5xl  text-primary uppercase font-semibold">
            {" "}
            Ravi&apos;s Super Market
          </h1>
          <p className="py-6 w-[560px] font-sec_para">
            Welcome to Ravi&apos;s Super Market, your one-stop destination for
            all your needs! We offer a diverse range of fresh groceries,
            essential home products, and a fun-filled play area for kids,
            ensuring a convenient shopping experience for the whole family.
            Plus, our mini meeting hall provides a comfortable space for
            gatherings or small events, making it easy to connect with others
            while enjoying the best that your neighborhood supermarket has to
            offer.
          </p>

          <div className="flex space-x-4 pt-4">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="lg:text-4xl border p-2  rounded-full text-white bg-blue-500" />
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter className="lg:text-4xl border p-2 rounded-full text-white bg-blue-500" />
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="text-4xl border p-2 rounded-full text-white bg-blue-500" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
