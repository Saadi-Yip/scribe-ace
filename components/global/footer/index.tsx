import Link from "next/link";
const Footer = () => {
    return (
      <footer className="w-full bg-color-[#5CDB94]">
      <div className=" flex lg:m-auto m-auto flex-col lg:flex-row ml-5 mr-8 footer_sec">
        <div className="  sm:justify-center">
          <h2 className="text-color-secondary font-bold text-lg">Logo</h2>
          <p className="text-color-secondary lg:font-medium font-normal lg:text-sm lg:max-w-sm mt-4 leading-7">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia
          </p>
        </div>
        <div>
          <h3 className="text-color-secondary font-bold text-md lg:ml-20 sm:ml-7 mt-6 sm:mt-0">Services</h3>
          <div className="flex flex-col sm:flex-row md:flex-row  lg:flex-row">
            <div className=" sm:flex-col md:flex-row lg:ml-20 sm:ml-7 mt-1 sm:mt-0">
              <ul className="">
                <li className="font-medium lg:text-sm text-color-secondary opacity-40 my-3 ">
                  <Link href="#">Website Development</Link>
                </li>
                <li className="font-medium lg:text-sm text-color-secondary opacity-40 my-3">
                  <Link href="#">SEO</Link>
                </li>
                <li className="font-medium lg:text-sm text-color-secondary opacity-40 mt-3 mb-0 sm:my-3">
                  <Link href="#">Logo </Link>
                </li>
              </ul>
            </div>
            <div className=" sm:flex-col md:flex-row lg:ml-20 sm:ml-7">
              <ul className="">
                <li className="font-medium lg:text-sm text-color-secondary opacity-40 my-3 ">
                  <Link href="#">Mobile App Development</Link>
                </li>
                <li className="font-medium lg:text-sm text-color-secondary opacity-40 my-3">
                  <Link href="#">Portfolio</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pr-10 mt-3 sm:mt-0">
<select
            id="countries"
            className="bg-color-primary text-color-secondary text-md block mb-8 bg-transparent focus:bg-transparent focus:border-0 focus:outline-none font-bold "
          >
            <option selected className="text-color-fourth">
              Languages
            </option>
            <option value="US" className="text-color-fourth">
              United States
            </option>
            <option value="CA" className="text-color-fourth">
              Canada
            </option>
            <option value="FR" className="text-color-fourth">
              France
            </option>
            <option value="DE" className="text-color-fourth">
              Germany
            </option>
          </select>
        </div>
      </div>
      <div className="max-w-[1252px] mx-auto py-4">
        <div className=" flex lg:justify-end justify-center sm:flex sm:justify-center sm:text-center  md:justify-center ">
          <span className="text-color-secondary mx-4 text-md font-bold">
            FB
          </span>
          <span className="text-color-secondary mx-4 pl-3 text-md font-bold">
            TW
          </span>
          <span className="text-color-secondary mx-4 text-md pl-3 font-bold">
            IG
          </span>
        </div>
        <div className=" flex lg:justify-end justify-center sm:flex sm:justify-center  md:justify-center">
          <img className="w-3/4 lg:w-2/6" src="payment-icon 1.png" alt="" />
        </div>
      </div>
    </footer>
    )
  };
  
  export default Footer;