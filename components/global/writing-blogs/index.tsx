import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react"; 
import "swiper/css";
import "swiper/css/navigation"; 
import { Navigation } from "swiper";
import Image from "next/image";
import prev from "../../../public/chevronprev.png";
import next from "../../../public/chevronnext.png"; 
import { useRef } from "react";
import Link from "next/link"; 

const Blogs = () => { 
  const [portfolios, setPortfolios] = useState([]);
  // fetch categories
   
   
  return (
    <>
      
          <div className="body mt-8">
            <Slides portfolios={portfolios} />
          </div>
          <div className="body mt-8">
            <Slides portfolios={portfolios} />
          </div>
          <div className="body mt-8">
           <Slides portfolios={portfolios} />
          </div>
          <div className="body mt-8">
            <Slides portfolios={portfolios} />
          </div>
        
    </>
  );
};

export default Blogs;

const Slides = (props: any) => {
  const [portfolio, setPortfolio] = useState<any>([]);
   
  const { width } = useDimensions();
  const swiperRef = useRef<any>(null);

  if (props.portfolios && props.portfolios.length > 0) {
    console.log("entered");
    return (
      <>
        <Swiper
          slidesPerView={width < 600 ? 1 : 3}
          spaceBetween={30}
          loop={true}
          modules={[Navigation]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="mySwiper"
        >
          <div className="demo">
            {props.portfolios.map((data: any, i: number) => {
              return (
                <SwiperSlide key={i.toString()}>
                  <div className="img-h">
                    <img src={data.image} alt="Solidety dev" />
                    <Link
                      href={data.url}
                      className="absolute left-0 right-0 text-color-secondary text-center bottom-[28px] text-xl"
                    >
                      {data.name}
                    </Link>
                  </div>
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
        <div>
          <button
            className="prev-btn absolute z-10 m-auto"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <Image src={prev} alt="solidery" />
          </button>
          <button
            className="next-btn absolute z-10 m-auto"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <Image src={next} alt="solidery" />
          </button>
        </div>
      </>
    );
  }
  return <></>;
};