import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import testimonial from "../../../public/testimonial.png";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useDimensions from "@/hooks/use-dimensions";
import { useState } from "react";

const Testimonials = () => {
  const { width } = useDimensions();

  return (
    <section className="container w-[90%] mx-auto mt-2 py-10">
      <h5 className="md:text-3xl text-color-third text-2xl font-bold mb-2 text-center">
        See What Our Clients Say About Us
      </h5>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        centeredSlides={true}
        loop={true}
        slidesPerView={width < 600 ? 1 : 1}
        navigation={width < 600 ? false : true}
        scrollbar={{ draggable: true }}
      >
        
        
        <SwiperSlide>
          <div className="carousel-item relative float-left w-full pt-8">
            <div className="flex flex-wrap justify-center">
              <div className=" w-full lg:w-8/12 px-0">
                <div className="shadow-xl p-2 swiper-head testimonials-bg text-center rounded-3xl py-4 mt-12 relative">
                  <img src = '/testimonial.png' className = "mx-auto testimonial-img -mt-[70px]"/>
                  <h3 className="text-[#05396B] leading-6 text-xl py-6 font-bold">Hannah Schmitt</h3>
                  <h5 className="text-[#3D3D3D] leading-5 text-lg">Lead Designer</h5>
                  <p className="text-[#1d1a1a] md:text-xl md:p-4 mt-4 w-[85%]  text-md leading-6  tracking-tight md:tracking-normal text-center italic mx-auto shadow-uyjh67\1741xl font-medium md:leading-7 mb-16">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cursus nibh mauris, nec turpis orci lectus maecenas.
                    Suspendisse sed magna eget nibh in turpis. Consequat duis
                    diam lacus arcu. Faucibus venenatis felis id augue sit
                    cursus pellentesque enim Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Cursus nibh mauris, nec turpis
                    orci lectus maecenas. Suspendisse sed magna eget nibh in
                    turpis. Consequat duis diam lacus arcu. Faucibus venenatis
                    felis id augue sit cursus pellentesque enim
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-item relative float-left w-full pt-8">
            <div className="flex flex-wrap justify-center">
              <div className=" w-full lg:w-8/12 px-0">
                <div className="shadow-xl p-2 swiper-head testimonials-bg text-center rounded-3xl py-4 mt-12 relative">
                  <img src = '/testimonial.png' className = "mx-auto testimonial-img -mt-[70px]"/>
                  <h3 className="text-[#05396B] leading-6 text-xl py-6 font-bold">Hannah Schmitt</h3>
                  <h5 className="text-[#3D3D3D] leading-5 text-lg">Lead Designer</h5>
                  <p className="text-[#1d1a1a] md:text-xl md:p-4 mt-4 w-[85%]  text-md leading-6  tracking-tight md:tracking-normal text-center italic mx-auto shadow-uyjh67\1741xl font-medium md:leading-7 mb-16">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cursus nibh mauris, nec turpis orci lectus maecenas.
                    Suspendisse sed magna eget nibh in turpis. Consequat duis
                    diam lacus arcu. Faucibus venenatis felis id augue sit
                    cursus pellentesque enim Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Cursus nibh mauris, nec turpis
                    orci lectus maecenas. Suspendisse sed magna eget nibh in
                    turpis. Consequat duis diam lacus arcu. Faucibus venenatis
                    felis id augue sit cursus pellentesque enim
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-item relative float-left w-full pt-8">
            <div className="flex flex-wrap justify-center">
              <div className=" w-full lg:w-8/12 px-0">
                <div className="shadow-xl p-2 swiper-head testimonials-bg text-center rounded-3xl py-4 mt-12 relative">
                  <img src = '/testimonial.png' className = "mx-auto testimonial-img -mt-[70px]"/>
                  <h3 className="text-[#05396B] leading-6 text-xl py-6 font-bold">Hannah Schmitt</h3>
                  <h5 className="text-[#3D3D3D] leading-5 text-lg">Lead Designer</h5>
                  <p className="text-[#1d1a1a] md:text-xl md:p-4 mt-4 w-[85%]  text-md leading-6  tracking-tight md:tracking-normal text-center italic mx-auto shadow-uyjh67\1741xl font-medium md:leading-7 mb-16">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cursus nibh mauris, nec turpis orci lectus maecenas.
                    Suspendisse sed magna eget nibh in turpis. Consequat duis
                    diam lacus arcu. Faucibus venenatis felis id augue sit
                    cursus pellentesque enim Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Cursus nibh mauris, nec turpis
                    orci lectus maecenas. Suspendisse sed magna eget nibh in
                    turpis. Consequat duis diam lacus arcu. Faucibus venenatis
                    felis id augue sit cursus pellentesque enim
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-item relative float-left w-full pt-8">
            <div className="flex flex-wrap justify-center">
              <div className=" w-full lg:w-8/12 px-0">
                <div className="shadow-xl p-2 swiper-head testimonials-bg text-center rounded-3xl py-4 mt-12 relative">
                  <img src = '/testimonial.png' className = "mx-auto testimonial-img -mt-[70px]"/>
                  <h3 className="text-[#05396B] leading-6 text-xl py-6 font-bold">Hannah Schmitt</h3>
                  <h5 className="text-[#3D3D3D] leading-5 text-lg">Lead Designer</h5>
                  <p className="text-[#1d1a1a] md:text-xl md:p-4 mt-4 w-[85%]  text-md leading-6  tracking-tight md:tracking-normal text-center italic mx-auto shadow-uyjh67\1741xl font-medium md:leading-7 mb-16">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cursus nibh mauris, nec turpis orci lectus maecenas.
                    Suspendisse sed magna eget nibh in turpis. Consequat duis
                    diam lacus arcu. Faucibus venenatis felis id augue sit
                    cursus pellentesque enim Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Cursus nibh mauris, nec turpis
                    orci lectus maecenas. Suspendisse sed magna eget nibh in
                    turpis. Consequat duis diam lacus arcu. Faucibus venenatis
                    felis id augue sit cursus pellentesque enim
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
         
        
         
         
         
      </Swiper>
    </section>
  );
};

export default Testimonials;

const icon = (
  <svg
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="star"
    className="lg:w-6 w-4 ml-2 text-yellow-500"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 576 512"
  >
    <path
      fill="currentColor"
      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
    ></path>
  </svg>
);
