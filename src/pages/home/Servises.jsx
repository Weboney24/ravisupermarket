import React from "react";
import DefaultHeader from "../../component/DefaultHeader";

const services = [
  {
    title: "Home Delivery",
    description: "Get your groceries delivered to your doorstep with our quick and reliable delivery service.",
    imge: "https://img.freepik.com/free-vector/way-concept-illustration_114360-1191.jpg?uid=R173295335&ga=GA1.1.1977785892.1725449750&semt=ais_hybrid&w=740",
  },
  {
    title: "Functions Orders",
    description: "Order with ease through our online platform or mobile app. We make it simple!",
    imge: "https://img.freepik.com/free-vector/coronavirus-supermarket-theme_23-2148504206.jpg?uid=R173295335&ga=GA1.1.1977785892.1725449750&semt=ais_hybrid&w=740",
  },
  {
    title: "Corporate Industry",
    description: "We cater to businesses with bulk orders and exclusive corporate deals.",
    imge: "https://img.freepik.com/free-vector/factory-concept-illustration_114360-5260.jpg?uid=R173295335&ga=GA1.1.1977785892.1725449750&semt=ais_hybrid&w=740",
  },
];

const Services = () => {
  return (
    <section id="services" className="">
      <div className="pb-10">
        {/* <DefaultHeader title={"Our Services"} subTitle={"Convenience at Your Doorstep"} /> */}
        <div className="items-center flex-col flex justify-center mt-5">
          <h1 className="text-lg font-bold font-pri_head text-primary uppercase lg:px-20 text-center">Our Services</h1>
          <h2 className="text-xl font-bold font-pri_head uppercase pt-6 text-center">Convenience at Your Doorstep</h2>
          <div className="w-20 h-1 bg-primary mt-4 mb-10 "></div>
        </div>

        <div>
          <ul className="md:flex flex-wrap gap-8 items-center justify-around md:mt-[150px] px-4">
            {services.map(({ title, description, imge }) => (
              <li key={title} className="relative w-72 pt-24 pb-4 px-4 text-center bg-transparent">
                <div className="absolute md:-top-[100px] top-[10px] left-1/2 transform -translate-x-1/2  md:w-[200px] md:h-[200px] w-[100px] h-[100px] border-[10px] border-secondary rounded-full flex items-center justify-center shadow-md">
                  <img src={imge} alt="Services" className="object-cover rounded-full md:w-[180px] md:h-[180px] w-[90px] h-[90px] " />
                </div>

                <h3 className="mt-6 text-xl  font-bold text-gray-800">{title}</h3>
                <p className="mt-3 text-lg text-gray-600">{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
