import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import DefaultHeader from "../../component/DefaultHeader";

const testimonials = [
  {
    name: "Mark Antony",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuUfHOObCMLKoXllPHh-neVeHGtYnkkiZWfg&s",
    feedback:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae modi soluta officia, ullam odit, voluptates nam iusto libero veritatis animi dolores est adipisci distinctio consequuntur porro quo. Dolore, magnam non.",
  },
  {
    name: "Manikandan",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuUfHOObCMLKoXllPHh-neVeHGtYnkkiZWfg&s",
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora magni deleniti repellendus quis labore omnis laborum corrupti? Tempore dolore molestiae necessitatibus ratione, reprehenderit omnis, ipsum sint sapiente quibusdam fugit neque!",
  },
  {
    name: "Madhan Raj",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuUfHOObCMLKoXllPHh-neVeHGtYnkkiZWfg&s",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem eligendi dolorem tempore est, temporibus laudantium quos distinctio repellendus ab voluptate quasi totam reiciendis obcaecati, sunt aperiam explicabo consectetur laborum?",
  },
  {
    name: "Vijay Sanjay",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuUfHOObCMLKoXllPHh-neVeHGtYnkkiZWfg&s",
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ad placeat enim incidunt reprehenderit laudantium maxime nihil aliquid nesciunt cupiditate, beatae dolorum, ut, repudiandae totam sed earum quam possimus laborum.",
  },
];

const Testimonial = () => {
  return (
    <section id="tesimonial" className="default_header">
      <DefaultHeader title={"Testimonial"} subTitle={" What Customers Say"} />
      <div className="w-full pt-4 px-4">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="p-8 sm:px-4 h-[420px] bg-white !shadow-2xl border-primary hover:bg-primary hover:text-white group border-2 rounded-lg text-center">
                <div className="avatar mb-4">
                  <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                </div>
                <h2 className="text-center font-pri_head font-bold mb-2">
                  {testimonial.name}
                </h2>
                <p className="text-gray-700 font-sec_para group-hover:text-white italic">
                  {testimonial.feedback}
                </p>
              </div>
            </SwiperSlide>
          ))}
          <div className="pt-16"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
