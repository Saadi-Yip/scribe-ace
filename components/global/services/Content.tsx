import Picture from "./Picture";
import { Prop } from '.'
const Content = (props: Prop) => {
  return (
    <section className="bg-color-eight body-font ">
      <div className="mx-auto w-full flex items-center lg:items-start  lg:flex-row flex-col lg:px-20 mt-8 ">
        <div className="lg:w-2/3 w-4/5 lg:pr-8   lg:text-left ">
          <h1 className="title-font xl:text-3xl md:text-xl sm:font-bold text-xl mb-2 font-semibold min-w-full text-color-third max-w-2xl">
            {props.data.heading}
          </h1>
          <p className="mb-8 leading-7 text-left text-color-fifth opacity-70 xl:text-xl sm:font-normal text-sm font-semibold">
            {props.data.authors}
          </p>
        </div>

        <div className="lg:w-1/3  w-4/5   lg:items-start  text-center lg:text-left ">
          <h1 className="title-font xl:text-2xl tracking-wider text-left
           md:text-xl  text-xl mb-2 font-bold text-color-third ">
            {props.data.protect}
          </h1>
          <p className="mb-8 leading-7 text-left text-color-fifth opacity-70 xl:text-xl sm:font-normal text-sm font-semibold">
            {props.data.handpick}
          </p>
        </div>
      </div>
      <div className="mx-auto w-full flex items-center lg:items-start  lg:flex-row flex-col lg:pl-20 ">
         <div className="left flex flex-col lg:w-2/6 w-4/5 lg:pr-8 text-center lg:text-left ">
          
         <div className="">
            <h1 className="title-font w-[70%] text-left  xl:text-3xl md:text-xl sm:font-bold text-xl mb-2 font-semibold text-color-third max-w-2xl">
              {props.data.riding}
            </h1>
            <p className="mb-8 leading-7 text-left text-color-fifth opacity-70 xl:text-xl sm:font-normal text-sm font-semibold">
              {props.data.understand}
            </p>
          </div>

          <div className="">
            <h1 className="title-font xl:text-3xl text-left  md:text-xl  text-xl mb-2 font-bold text-color-third">
              {props.data.variety}
            </h1>
            <p className="mb-8 leading-7 text-left text-color-fifth opacity-70 xl:text-xl sm:font-normal text-sm font-semibold">
              {props.data.stream}
            </p>
          </div>
         </div>
        <Picture url={props.data.url}/>
      </div>
    </section>
  );
};

export default Content;
