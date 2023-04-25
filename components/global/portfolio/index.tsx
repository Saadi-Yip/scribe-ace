import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Portfolio = () => {
  return (
    <div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <section className="text-gray-600 body-font  w-full">
  <div className=" mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="lg:text-4xl lg:font-bold text-2xl font-medium title-font mb-4 text-color-secondary mt-16">Books We've Published
</h1>
      <p className=" mx-auto leading-6 text-base md:text-xl text-md px-3 font-normal text-color-secondary">To determine which content writing service will suit your needs, explore what we offer at our content writing services company.</p>
    </div>
    <div className="flex flex-wrap  md:justify-center justify-center">
    <div className="w-60 h-96 ">
        <div className="flex w-full md:py-5 ">
          <img alt="gallery" className="  object-cover " src="poster.png"/>
        </div>
      </div>
      <div className="w-60 h-96">
        <div className="flex w-full md:py-5 ">
          <img alt="gallery" className="  object-cover object-center" src="poster (1).png"/>
        </div>
      </div>
      <div className="w-60 h-96 ">
        <div className="flex w-full   md:py-5 ">
          <img alt="gallery" className="  object-cover object-center" src="poster (2).png"/>
        </div>
      </div>
      <div className="w-60 h-96">
        <div className="flex w-full   md:py-5 ">
          <img alt="gallery" className="  object-cover object-center" src="poster (3).png"/>
        </div>
      </div>
      <div className="w-60 h-96">
        <div className="flex w-full   md:py-5 ">
          <img alt="gallery" className="  object-cover object-center" src="poster (4).png"/>
        </div>
      </div>
      <div className="w-60 h-96">
        <div className="flex w-full   md:py-5 ">
          <img alt="gallery" className="  object-cover object-center" src="poster (5).png"/>
        </div>
      </div>
      <div className="w-60 h-96">
        <div className="flex w-full   py-5 ">
          <img alt="gallery" className="  object-cover object-center" src="poster (6).png"/>
        </div>
      </div>
      <div className="md:w-60 md:h-96 w-60 ">
        <div className="flex w-full md:py-1 py-5">
          <img alt="gallery" className="  object-cover object-center" src="poster (7).png"/>
        </div>
      </div>
     
     
    
    </div>
  </div>
</section>
      </Swiper>
    </div>
  );
};

export default Portfolio;
