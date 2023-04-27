import Link from "next/link";
import React from "react";

function Services() {
  return (
    <section className="bg-[#04099212]">
      <div className="text-gray-950 xl:w-[90%] lg:w-[100%] md:w-[90%] w-[95%] mx-auto">
        <h1 className="font-extrabold text-3xl text-center pt-6 max-sm:text-2xl text-[#389583]">
          How does the leading website design agency in USA work?
        </h1>
        <p className="text-sm mt-4 mb-16 text-center text-black max-sm:text-xs max-w-[72%] mx-auto">
          Web Developers INC focuses on delivering highly competitive web
          designing services for different businesses around the country.
          Whether it's an emerging fashion brand or a construction company, our
          approach generates impressive results. Want to know the best part? We
          offer other services as well
        </p>
        <div className="flex flex-wrap md:flex-wrap justify-center md:ml-8 ml-8">
          {/*First card  */}
          <div
            className="p-2 py-4 bg2 pt-16 max-sm:pt-6 lg:w-[27%] xl:max-w-[22%] mr-6 border-4 border-color-primary hover-class hover:border-gray-300
           w-full sm:w-[40%] md:w-[46%]  mb-6 shadow-xl rounded-[50px]"
          >
            <div className="w-20 h-16 mb-16 inline-flex items-center ">
              <img className="ml-6" src="eighth.png" alt="" />
            </div>
            <div className="flex-grow text-hover pl-6">
              <h2 className="text-[#05396B] text-lg title-font font-bold mb-2 pt-4">
                Book Publishing
              </h2>
              <p className="leading-loose text-[#202020c4] ">
                All our content marketing services packages include a custom
                content strategy
              </p>
            </div>
            <Link
              href="#"
              className=" ml-32 text-[#05396B] font-bold text-[14px] read_more_link
           inline-flex items-center "
            >
              See More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
          {/* Second card */}
          <div
            className="p-2 py-4 bg2 pt-16 max-sm:pt-6 lg:w-[27%] xl:max-w-[22%] mr-6 border-4 border-color-primary hover-class hover:border-gray-300
           w-full sm:w-[40%] md:w-[46%]  mb-6 shadow-xl rounded-[50px]"
          >
            <div className="w-20 h-16 mb-16 inline-flex items-center ">
              <img className="ml-6" src="second.png" alt="" />
            </div>
            <div className="flex-grow text-hover pl-6">
              <h2 className="text-[#05396B] text-lg title-font font-bold mb-2 pt-4">
                Ghost Writing
              </h2>
              <p className="leading-loose text-base">
                All our content marketing services packages include a custom
                content strategy
              </p>
            </div>
            <Link
              href="#"
              className="ml-32 text-[#05396B] font-bold text-[14px] read_more_link
              inline-flex items-center "
            >
              See More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
          {/* Third card */}
          <div
            className="p-2 py-4 bg2 pt-16 max-sm:pt-6 lg:w-[27%] xl:max-w-[22%] mr-6 border-4 border-color-primary hover-class hover:border-gray-300
           w-full sm:w-[40%] md:w-[46%]  mb-6 shadow-xl rounded-[50px]"
          >
            <div className="w-20 h-16 mb-16 inline-flex items-center ">
              <img className="ml-6" src="third.png" alt="" />
            </div>
            <div className="flex-grow text-hover pl-6">
              <h2 className="text-[#05396B] text-lg title-font font-bold mb-2 pt-4">
                Book Editing
              </h2>
              <p className="leading-loose text-base">
                All our content marketing services packages include a custom
                content strategy
              </p>
            </div>
            <Link
              href="#"
              className=" ml-32 text-[#05396B] font-bold text-[14px] read_more_link
              inline-flex items-center"
            >
              See More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
          {/* 4th card */}
          <div
            className="p-2 py-4 bg2 pt-16 max-sm:pt-6 lg:w-[27%] xl:max-w-[22%] mr-6 border-4 border-color-primary hover-class hover:border-gray-300
           w-full sm:w-[40%] md:w-[46%]  mb-6 shadow-xl rounded-[50px]"
          >
            <div className="w-20 h-16 mb-16 inline-flex items-center ">
              <img className="ml-6" src="fourth.png" alt="" />
            </div>
            <div className="flex-grow text-hover pl-6">
              <h2 className="text-[#05396B] text-lg title-font font-bold mb-2 pt-4">
                Proof Reading
              </h2>
              <p className="leading-loose text-base">
                All our content marketing services packages include a custom
                content strategy
              </p>
            </div>
            <Link
              href="#"
              className="ml-32 text-[#05396B] font-bold text-[14px] read_more_link
              inline-flex items-center"
            >
              See More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
          {/* 5th card */}
          <div
            className="p-2 py-4 bg2 pt-16 max-sm:pt-6 lg:w-[27%] xl:max-w-[22%] mr-6 border-4 border-color-primary hover-class hover:border-gray-300
          w-full sm:w-[40%] md:w-[46%]  mb-6 shadow-xl rounded-[50px]"
          >
            <div className="w-20 h-16 mb-16 inline-flex items-center ">
              <img className="ml-4" src="fifth.png" alt="" />
            </div>
            <div className="flex-grow text-hover pl-6">
              <h2 className="text-[#05396B] text-lg title-font font-bold mb-2 pt-4">
                Illustration Designs
              </h2>
              <p className="leading-loose text-base">
                All our content marketing services packages include a custom
                content strategy
              </p>
            </div>
            <Link
              href="#"
              className="ml-32 text-[#05396B] font-bold text-[14px] read_more_link
              inline-flex items-center"
            >
              See More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
          {/* 6th card */}
          <div
            className="p-2 py-4 bg2 pt-16 max-sm:pt-6 lg:w-[27%] xl:max-w-[22%] mr-6 border-4 border-color-primary hover-class hover:border-gray-300
           w-full sm:w-[40%] md:w-[46%]  mb-6 shadow-xl rounded-[50px] "
          >
            <div className="w-20 h-16 mb-16 inline-flex items-center ">
              <img className="ml-6" src="sixth.png" alt="" />
            </div>
            <div className="flex-grow text-hover pl-6 ">
              <h2 className="text-[#05396B] text-lg title-font font-bold mb-2 pt-4">
                Script Writing
              </h2>
              <p className="leading-loose text-base ">
                All our content marketing services packages include a custom
                content strategy
              </p>
            </div>
            <Link
              href="#"
              className="ml-32 text-[#05396B] font-bold text-[14px] read_more_link
              inline-flex items-center"
            >
              See More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
          {/* 7th card */}
          <div
            className="p-2 py-4 bg2 pt-16 max-sm:pt-6 lg:w-[27%] xl:max-w-[22%] mr-6 border-4 border-color-primary hover-class  hover:border-gray-300
          w-full sm:w-[40%] md:w-[46%]  mb-6 shadow-xl rounded-[50px]"
          >
            <div className="w-20 h-16 mb-16 inline-flex items-center ">
              <img className="ml-4" src="seventh.png" alt="" />
            </div>
            <div className="flex-grow text-hover pl-6">
              <h2 className="text-[#05396B] text-lg title-font font-bold mb-2 pt-4">
                Book Marketing
              </h2>
              <p className="leading-loose text-base">
                All our content marketing services packages include a custom
                content strategy
              </p>
            </div>
            <Link
              href="#"
              className=" ml-32 text-[#05396B] font-bold text-[14px] read_more_link
              inline-flex items-center"
            >
              See More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
          {/* 8th card */}
          <div
            className="p-2 py-4 bg2 pt-16 max-sm:pt-6 lg:w-[27%] xl:max-w-[22%] mr-6 border-4 border-color-primary hover-class hover:border-gray-300
          w-full sm:w-[40%] md:w-[46%]  mb-6 shadow-xl rounded-[50px]"
          >
            <div className="w-20 h-16 mb-16 inline-flex items-center ">
              <img className="ml-4" src="first.png" alt="" />
            </div>
            <div className="flex-grow text-hover pl-6">
              <h2 className="text-[#05396B] text-lg title-font font-bold mb-2 pt-4">
                Book Cover Design
              </h2>
              <p className="leading-loose text-base">
                All our content marketing services packages include a custom
                content strategy
              </p>
            </div>
            <Link
              href="#"
              className="ml-32 text-[#05396B] font-bold text-[14px] read_more_link
              inline-flex items-center"
            >
              See More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
