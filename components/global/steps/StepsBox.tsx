import Image from "next/image";
import icon from "../../../public/assets/images/icon.png";
import { props } from ".";


const StepsBox = ({ heading, text, num }: props) => {
  return (
    <>
      <div className="step_box bg2 relative">
        <h6 className="text-xl text-color-fourth font-medium">{heading}</h6>
        <p className="text-lg">{text}</p>
      </div>
      <div className="flex items-center number_row absolute right-0 left-0 m-auto w-fit z-10 top-6">
        <Image src={icon} alt="" />
        <h6 className="text-color-primary text-4xl font-semibold">{num}</h6>
      </div>
    </>
  );
};

export default StepsBox;
