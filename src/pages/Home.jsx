import Footer from "../component/footer/Footer";
import Navbar from "../component/navbar/Navbar";
import About from "./About";
import Gallery from "./Gallery";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <Navbar />

      <div className="hero brightness-150 pt-20 min-h-screen bg-fixed bg-[linear-gradient(to_right,#00000080,#00000080),url('https://img.freepik.com/premium-photo/grocery-aisle-with-shelf-full-cereals_1146701-16845.jpg?w=740')] bg-cover bg-center object-cover ">
        <div className=""></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-screen-lg flex items-center flex-col justify-center bg-[#173e6ba4] p-6">
            <h1 className="mb-5 text-7xl tracking-tight font-semibold font-pri_head">
              Ravi&apos;s <span className="text-yellow-400">Super Market</span>
            </h1>
            <p className="mb-8 text-4xl font-sec_para">
              <span className="text-yellow-400">20,000</span> Products All In
              One Roof
            </p>
          </div>
        </div>
      </div>
      <div className="px-20 w-screen">
        <About />
      </div>
      <Gallery />
      <div className="px-20 w-screen">
        <Testimonial />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
