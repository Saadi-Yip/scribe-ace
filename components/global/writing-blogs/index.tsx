import { Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";

//-- Import Swiper styles

import "swiper/css";
import "swiper/css/navigation";
import useDimensions from "@/hooks/use-dimensions";

type Prop = {
  data: { title: string; details: string; url: string }[];
};

const Blogs = (props: Prop) => {
  return (
    <section className="container xl:max-w-[70%] lg:max-w-[90%] max-w-[80%] mx-auto mt-2 py-10 relative">
      <h5 className="md:text-3xl text-color-third text-2xl font-bold mb-2 text-center">
        Our Elite Book Writing Service Expertise
      </h5>
      <Slides data = {props.data}/>
    </section>
  );
};

export default Blogs;

const Slides = (props: Prop) => {
  const { width } = useDimensions();
  const swiperRef = useRef<any>(null);
  return (
    <>
      <Swiper
        slidesPerView={width < 640 ? 1 : 3 && width < 1023 ? 2 : 3}
        spaceBetween={30}
        loop={true}
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="mySwiper"
      >

        {
          props.data.map((item:any, i:number) => {
            return <SwiperSlide key = {i.toString()}>
            <div className="carousel-item mx-auto rounded">
              <div className="flex flex-wrap justify-center bg-transparent pb-4">
                <div className="shadow-xl swiper-head testimonials-bg rounded-3xl mt-12 ">
                  <div className="header">
                    <Image
                      alt=""
                      src={item.url}
                      className="p-0 w-full rounded-2xl"
                      width={473}
                      height={414}
                    />
                  </div>
                  <div className="content pb-4">
                    <h5 className="text-[#05396B] leading-5 text-lg lg:text-md xl:text-lg pt-10 pl-6 lg:pl-4 xl:pl-6 font-bold">
                      {item.title}
                    </h5>
                    <p className="text-[#000000b3] md:text-sm lg:text-base xl:text-lg text-left p-6 lg:p-4 xl:p-6 text-lg sm:text-sm leading-6 sm:leading-5 md:leading-6 tracking-tight shadow-uyjh67\1741xl font-medium">
                      {item.details}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          })
        }
      </Swiper>
      <div>
        <button
          className="prev-btn absolute z-10 m-auto shadow-lg"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <Image
            src="/chevronprev.png"
            alt="solidery"
            width={100}
            height={100}
          />
        </button>
        <button
          className="next-btn absolute z-10 m-auto"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <Image
            src="/chevronnext.png"
            alt="solidery"
            width={100}
            height={100}
          />
        </button>
      </div>
    </>
  );
};
