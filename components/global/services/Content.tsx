import Picture from "./Picture";
import { Prop } from '.'
const Content = (props: Prop) => {
  return (
    <section className="bg-color-eight body-font">
      <div className=" mx-auto flex pr-5 py-4 md:flex-row flex-col items-center">
        <Picture url={props.data.url} />
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font xl:text-4xl md:text-xl sm:font-bold text-xl mb-4 font-semibold text-color-third md:max-w-3xl max-w-xs leading-7 ">{props.data.heading}
          </h1>
          <p className="mb-8 leading-7 text-color-sixth opacity-70 xl:text-xl sm:font-normal text-sm px-4">
            {props.data.authors}
          </p>
        </div>
      </div>
      <div className="lg:flex lg:flex-row flex-col sm:justify-around mb-9 justify-center  px-3 xl:mt-6">
        <div className="lg:flex-grow lg:pl-20 md:pl-16 flex flex-col md:items-start 
              md:text-left  items-center text-center">
          <h1 className="title-font  xl:text-2xl md:text-2xl mb-4 sm:font-bold text-color-third text-xl font-semibold lg:h-24">{props.data.protect}

          </h1>
          <p className="mb-8 leading-5 text-color-sixth opacity-70 xl:text-xl md:text-md  text-sm font-normal md:leading-7 px-3">{props.data.handpick}</p>

        </div>
        <div className="lg:flex-grow lg:pl-10 md:pl-16 flex  flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font  xl:text-2xl mb-4 sm:font-bold md:text-2xl text-color-third text-xl font-semibold lg:h-24" >{props.data.riding}
          </h1>
          <p className="mb-8 leading-5 text-color-sixth opacity-70 xl:text-xl md:text-md  
              font-normal text-sm md:leading-7 px-3">
              {props.data.understand}
          </p>
        </div>
        <div className="lg:flex-grow lg:pr-20 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font xl:text-2xl mb-4 xl:font-bold md:text-xl text-color-third tracking-tight   text-xl font-semibold lg:h-24 ">{props.data.variety}
          </h1>
          <p className="mb-8 leading-5 md:leading-7 text-color-sixth opacity-70 
              xl:text-xl md:text-md text-sm font-normal px-3">
            {props.data.stream}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Content;
