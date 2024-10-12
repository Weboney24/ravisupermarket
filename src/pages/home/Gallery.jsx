import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import DefaultHeader from "../../component/DefaultHeader";

const Gallery = () => {
  const items = [
    {
      img: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202106/grocery_9.jpg?size=948:533",
      title: "Groceries",
      description:
        " Discover a wide selection of fresh produce, pantry staples, and everyday essentials at Ravi's Super Market, ensuring you have everything you need for delicious meals and snacks.",
    },
    {
      img: "https://t3.ftcdn.net/jpg/05/11/01/02/360_F_511010254_pVaBHjs5DooDMPkCPrC4Pw2C39cfhyOa.jpg",
      title: "Stationary",
      description:
        "Stock up on high-quality stationery items, including notebooks, pens, and office supplies, perfect for students and professionals alike at Ravi's Super Market.",
    },
    {
      img: "https://img.freepik.com/premium-photo/wellorganized-utility-closet-fully-stocked-with-assortment-cleaning-supplies-household-products-reflecting-order-preparedness_95891-126368.jpg?w=826",
      title: "Household Items",
      description:
        "Explore a variety of essential household items, from cleaning supplies to kitchenware, making your home a comfortable and functional space.",
    },
    {
      img: "https://img.freepik.com/premium-photo/festive-display-red-silver-christmas-decorations-shelf-modern-hypermarket_1429-27541.jpg?w=740",
      title: "Gift Items",
      description:
        "Find the perfect gift for any occasion with our curated collection of unique and thoughtful gift items that are sure to delight your loved ones.",
    },
    {
      img: "https://img.freepik.com/premium-photo/stylish-black-people-shopping-illustration-retail-themes_1199394-242529.jpg?w=740",
      title: "Toys and Games",
      description:
        "Keep the little ones entertained with our selection of fun and educational toys and games, fostering creativity and playtime at Ravi's Super Market.",
    },
    {
      img: "https://img.freepik.com/premium-photo/drivethru-fast-food-restaurant-with-customers-ordering_1079150-292312.jpg?w=740",
      title: "Delicious Food Court",
      description:
        "Enjoy a variety of quick and tasty fast food options at Ravi's Super Market, perfect for when you're on the go or craving a quick snack. From savory snacks to satisfying meals, we've got something for everyone!",
    },
  ];

  return (
    <section
      id="gallery"
      className="relative default_header px-4 sm:px-6 lg:px-20 flex flex-col items-center justify-center bg-fixed  bg-cover bg-no-repeat bg-center"
    >
      <div className="absolute inset-0 bg-[url('https://img.freepik.com/free-vector/people-supermarket-interior-cartoon-vector_1441-3096.jpg')] opacity-20 bg-cover bg-no-repeat"></div>
      <DefaultHeader title={"Our Gallery"} subTitle={"Explore Our Gallery"} />
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
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
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation, Autoplay]}
        className="text-center w-full"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="card bg-base-100 w-full h-[500px] sm:w-80 lg:w-96 shadow-xl rounded-none">
              <figure>
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-56 object-cover"
                />
              </figure>
              <div className="card-body text-left rounded-none p-4 sm:p-6">
                <h2 className="card-title text-lg sm:text-xl">{item.title}</h2>
                <p className="text-sm sm:text-base">{item.description}</p>
                <div className="card-actions mt-4">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="pt-16"></div>
      </Swiper>
    </section>
  );
};

export default Gallery;
