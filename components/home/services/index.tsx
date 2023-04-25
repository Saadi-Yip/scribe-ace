import Link from "next/link";
import React from "react";

function Services() {
  return (
    <section className="bg-[#04099212]">
      <div className="text-gray-950 xl:w-3/4 lg:w-10/12 md:w-[83%] w-[85%] mx-auto">
        <h1 className="font-extrabold text-3xl text-center pt-6 max-sm:text-2xl text-[#389583]">
          How does the leading website design agency in USA work?
        </h1>
        <p className="text-sm mt-4 mb-16 text-center max-sm:text-xs max-w-[72%] mx-auto">
          Web Developers INC focuses on delivering highly competitive web
          designing services for different businesses around the country.
          Whether it's an emerging fashion brand or a construction company, our
          approach generates impressive results. Want to know the best part? We
          offer other services as well
        </p>
       <div className="flex flex-wrap md:flex-wrap justify-center md:ml-8 ml-8">
         {/*First card  */}
         <div className="p-2 py-4 bg2 pt-16 max-sm:pt-6 lg:w-[27%] xl:w-[22%] mr-6 border-4 border-color-primary hover:border-purple-700
            w-full h-full sm:w-[40%] md:w-[46%]  mb-6 shadow-xl rounded-[50px]">
          <div className="w-20 h-16 mb-20 inline-flex items-center  ">
            <img className="ml-8 " src="eighth.png" alt="" />
          </div>
          <div className="flex-grow pl-6 text-hover">
            <h2 className="text-[#05396B] text-lg title-font font-bold mb-2 pt-4">
              Book Publishing
            </h2>
            <p className="leading-loose text-base">
             All our content marketing service packages includes 
             a custom content strategy
            </p>
            <Link href = "/" className="read_more">Read More</Link>
          </div>
        </div>
        {/* Second card */}
        <div className="p-2 py-4 bg2 pt-16 max-sm:pt-6 lg:w-[27%] xl:w-[22%] mr-6 border-4 border-color-primary hover:border-purple-700
           w-full sm:w-[40%] md:w-[46%]  mb-6 shadow-xl rounded-[50px]">
          <div className="w-20 h-16 mb-20 inline-flex items-center  ">
            <img className="ml-6 " src="second.png" alt="" />
          </div>
          <div className="flex-grow text-hover pl-6">
            <h2 className="text-[#05396B] text-lg title-font font-bold mb-2 pt-4">
              Ghost Writing
            </h2>
            <p className="leading-loose text-base">
           All our content marketing services packages include 
           a custom content strategy
            </p>
            <Link href = "/" className="read_more">Read More</Link>
          </div>
        </div>
        {/* Third card */}
        <div className="p-2 py-4 bg2 pt-16 max-sm:pt-6 lg:w-[27%] xl:w-[22%] mr-6 border-4 border-color-primary hover:border-purple-700
           w-full sm:w-[40%] md:w-[46%]  mb-6 shadow-xl rounded-[50px]">
          <div className="w-20 h-16 mb-20 inline-flex items-center ">
            <img className="ml-6" src="third.png" alt="" />
          </div>
          <div className="flex-grow text-hover pl-6">
            <h2 className="text-[#05396B] text-lg title-font font-bold mb-2 pt-4">
              Book Editing 
            </h2>
            <p className="leading-loose text-base">
            All our content marketing services packages include 
           a custom content strategy
            </p>
            <Link href = "/" className="read_more">Read More</Link>
          </div>
        </div>
        {/* 4th card */}
        <div className="p-2 py-4 bg2 pt-16 max-sm:pt-6 lg:w-[27%] xl:w-[22%] mr-6 border-4 border-color-primary hover:border-purple-700
           w-full sm:w-[40%] md:w-[46%]  mb-6 shadow-xl rounded-[50px]">
          <div className="w-20 h-16 mb-20 inline-flex items-center ">
            <img className="ml-6" src="fourth.png" alt="" />
          </div>
          <div className="flex-grow text-hover pl-6">
            <h2 className="text-[#05396B] text-lg title-font font-bold mb-2 pt-4">
              Proof Reading
            </h2>
            <p className="leading-loose text-base">
            All our content marketing services packages include 
           a custom content strategy
            </p>
            <Link href = "/" className="read_more">Read More</Link>
          </div>
        </div>
        {/* 5th card */} 
        <div className="p-2 py-4 bg2 pt-16 max-sm:pt-6 lg:w-[27%] xl:w-[22%] mr-6 border-4 border-color-primary  hover:border-purple-700
          w-full sm:w-[40%] md:w-[46%]  mb-6 shadow-xl rounded-[50px]">
          <div className="w-20 h-16 mb-20 inline-flex items-center ">
            <img className="ml-4" src="fifth.png" alt="" />
          </div>
          <div className="flex-grow text-hover pl-6">
            <h2 className="text-[#05396B] text-lg title-font font-bold mb-2 pt-4">
              Illustration Designs
            </h2>
            <p className="leading-loose text-base">
            All our content marketing services packages include 
           a custom content strategy
            </p>
            <Link href = "/" className="read_more">Read More</Link>
          </div>
        </div>
        {/* 6th card */}
        <div className="p-2 py-4 bg2 pt-16 max-sm:pt-6 lg:w-[27%] xl:w-[22%] mr-6 border-4 border-color-primary hover:border-purple-700
           w-full sm:w-[40%] md:w-[46%]  mb-6 shadow-xl rounded-[50px] ">
          <div className="w-20 h-16 mb-20 inline-flex items-center ">
            <img className="ml-6" src="sixth.png" alt="" />
          </div>
          <div className="flex-grow text-hover pl-6 ">
            <h2 className="text-[#05396B] text-lg title-font font-bold mb-2 pt-4">
              Script Writing
            </h2>
            <p className="leading-loose text-base ">
            All our content marketing services packages include 
           a custom content strategy
            </p>
            <Link href = "/" className="read_more">Read More</Link>
          </div>
        </div>
        {/* 7th card */}
        <div className="p-2 py-4 bg2 pt-16 max-sm:pt-6 lg:w-[27%] xl:w-[22%] mr-6 border-4 border-color-primary  hover:border-purple-700
          w-full sm:w-[40%] md:w-[46%]  mb-6 shadow-xl rounded-[50px]">
          <div className="w-20 h-16 mb-20 inline-flex items-center ">
            <img className="ml-4" src="seventh.png" alt="" />
          </div>
          <div className="flex-grow text-hover pl-6">
            <h2 className="text-[#05396B] text-lg title-font font-bold mb-2 pt-4">
              Book Marketing
            </h2>
            <p className="leading-loose text-base">
            All our content marketing services packages include 
           a custom content strategy
            </p>
            <Link href = "/" className="read_more">Read More</Link>
          </div>
        </div>{" "}
        {/* 8th card */}
        <div className="p-2 py-4 bg2 pt-16 max-sm:pt-6 lg:w-[27%] xl:w-[22%] mr-6 border-4 border-color-primary hover:border-purple-700
          w-full sm:w-[40%] md:w-[46%]  mb-6 shadow-xl rounded-[50px]">
          <div className="w-20 h-16 mb-20 inline-flex items-center ">
            <img className="ml-4" src="first.png" alt="" />
          </div>
          <div className="flex-grow text-hover pl-6">
            <h2 className="text-[#05396B] text-lg title-font font-bold mb-2 pt-4">
              Book Cover Design
            </h2>
            <p className="leading-loose text-base">
            All our content marketing services packages include 
           a custom content strategy
            </p>
            <Link href = "/" className="read_more">Read More</Link>
          </div>
        </div>
       </div>
      </div>
    </section>
  );
}

export default Services;
