import Picture from "./Picture";

const Content = () => {
    return(
      <section className="bg-color-eight body-font">
    <div className=" mx-auto flex pr-5 py-4 md:flex-row flex-col items-center">
      <Picture/>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font xl:text-4xl md:text-xl sm:font-bold text-xl mb-4 font-semibold text-color-third md:max-w-3xl max-w-xs leading-7 ">Ensuring Perfection And Error-Free Manuscripts
        </h1>
        <p className="mb-8 leading-7 text-color-sixth opacity-70 xl:text-xl sm:font-normal text-sm px-4">Authors Writing Club provides proofreading services to authors around the world to ensure their book is free of errors. Through our proofreading service, we catch the typographical and grammatical errors and ensure consistency throughout the manuscript.</p>
    
      </div>
    </div>
    <div className="lg:flex lg:flex-row flex-col sm:justify-around mb-9 justify-center  px-3 xl:mt-6">
    <div className="lg:flex-grow lg:pl-20 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font  xl:text-2xl md:text-2xl mb-4 sm:font-bold text-color-third text-xl font-semibold lg:h-24">Protect Your Credibility As An Author

        </h1>
        <p className="mb-8 leading-5 text-color-sixth opacity-70 xl:text-xl md:text-md  text-sm font-normal md:leading-7 px-3">We've hand-picked a team of professional proofreaders after a rigorous selection process. We also leverage advanced technology to ensure quality further.</p>
    
      </div>
      <div className="lg:flex-grow lg:pl-10 md:pl-16 flex  flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font  xl:text-2xl mb-4 sm:font-bold md:text-2xl text-color-third text-xl font-semibold lg:h-24" >We're Riding Shotgun
        </h1>
        <p className="mb-8 leading-5 text-color-sixth opacity-70 xl:text-xl md:text-md  font-normal text-sm md:leading-7 px-3">We understand that your manuscript's security is important; that's why we use bank-grade security standards to protect your work.</p>
    
      </div>
      <div className="lg:flex-grow lg:pr-20 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font xl:text-2xl mb-4 xl:font-bold md:text-xl text-color-third tracking-tight   text-xl font-semibold lg:h-24 ">A Variety of Manuscript Editing Services
        </h1>
        <p className="mb-8 leading-5 md:leading-7 text-color-sixth opacity-70 xl:text-xl md:text-md text-sm font-normal px-3">Our streamlined process and exceptional proofreading team deliver lightning-fast turnarounds, as little as 4 hours.</p>
    
      </div>
    </div>
  </section>
    );
  };
  
  export default Content;
  