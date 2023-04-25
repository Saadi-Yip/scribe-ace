import Image from "next/image";
import icon from "../../../public/assets/images/icon.png";


const Steps = () => {
  return (
    <section>
      <div className="text-center">
        <h2 className="text-color-primary text-4xl">
          Our Process Explained: How it Works
        </h2>
        <p className="text-color-fifth text-lg">Steps To Success</p>
      </div>
      <div className="steps_sec m-auto max-w-7xl px-5">
        <div className="flex steps_row ">
          <div className="step_box bg2 relative">
            <h6 className="text-xl text-color-fourth font-medium">Order Details</h6>
            <p className="text-lg">In order for us at daCode to know that we are a good fit for your project we always start with screening questions in order to make sure that we are a suitable match for your company.</p>
          </div>
          <div className="flex items-center">
            <Image src={icon} alt="" />
            <h6 className="text-color-primary text-4xl font-semibold">1</h6>
          </div>
        </div>
        <div className="flex steps_row justify-end">
          <div className="flex items-center">
            <Image src={icon} alt="" />
            <h6 className="text-color-primary text-4xl font-semibold">2</h6>
          </div>
          <div className="step_box bg2 relative">
            <h6 className="text-xl text-color-fourth font-medium">Order Details</h6>
            <p className="text-lg">In order for us at daCode to know that we are a good fit for your project we always start with screening questions in order to make sure that we are a suitable match for your company.</p>
          </div>
        </div>
        <div className="flex steps_row">
          <div className="step_box bg2 relative">
            <h6 className="text-xl text-color-fourth font-medium">Order Details</h6>
            <p className="text-lg">In order for us at daCode to know that we are a good fit for your project we always start with screening questions in order to make sure that we are a suitable match for your company.</p>
          </div>
          <div className="flex items-center">
            <Image src={icon} alt="" />
            <h6 className="text-color-primary text-4xl font-semibold">3</h6>
          </div>
        </div>
        <div className="flex steps_row justify-end">
          <div className="flex items-center">
            <Image src={icon} alt="" />
            <h6 className="text-color-primary text-4xl font-semibold">4</h6>
          </div>
          <div className="step_box bg2 relative">
            <h6 className="text-xl text-color-fourth font-medium">Order Details</h6>
            <p className="text-lg">In order for us at daCode to know that we are a good fit for your project we always start with screening questions in order to make sure that we are a suitable match for your company.</p>
          </div>
        </div>
        <div className="flex steps_row">
          <div className="step_box bg2 relative">
            <h6 className="text-xl text-color-fourth font-medium">Order Details</h6>
            <p className="text-lg">In order for us at daCode to know that we are a good fit for your project we always start with screening questions in order to make sure that we are a suitable match for your company.</p>
          </div>
          <div className="flex items-center">
            <Image src={icon} alt="" />
            <h6 className="text-color-primary text-4xl font-semibold">5</h6>
          </div>
        </div>
        <div className="flex steps_row justify-end">
          <div className="flex items-center">
            <Image src={icon} alt="" />
            <h6 className="text-color-primary text-4xl font-semibold">6</h6>
          </div>
          <div className="step_box bg2 relative">
            <h6 className="text-xl text-color-fourth font-medium">Order Details</h6>
            <p className="text-lg">In order for us at daCode to know that we are a good fit for your project we always start with screening questions in order to make sure that we are a suitable match for your company.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
