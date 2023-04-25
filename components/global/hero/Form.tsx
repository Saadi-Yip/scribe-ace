import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Svg from "./svg";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const submitHandle = async (e: any) => {
    e.preventDefault();
    
    try {
      if (formRef.current) {
        const fname = formRef.current.fname.value;
        const lname = formRef.current.lname.value;
        const email = formRef.current.email.value;
        const message = formRef.current.message.value;
        const phone = formRef.current.phone.value;

        const response = await fetch(
          "https://solitary-dev.cyclic.app/contact",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              fname,
              lname,
              email,
              message,
              phone
            }),
          }
        );
        if(response.ok){
          toast('submitted');
          e.target.reset();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="lg:w-1/2 mt-8 mx-auto md:w-full">
      <form
        name="contactForm"
        ref={formRef}
        onSubmit={submitHandle}
        className="md:w-3/4 sm:w-full mx-auto items-right bg-color-primary rounded-lg pb-12 "
      >
        {/* Header Start */}
        <div className="icons lg:px-2 md:px-0 flex py-6">
          <div className="text-right w-1/2 pl-4 pt-4 lg:pl-4 md:pl-6 sm:pl-12  flex justify-center">
            <Svg />
          </div>
          <div className="lg:text-right w-1/2 mr-2 text-left text-color-secondary font-semibold md:pr-0 md:pl-0 lg:pr-2 xl:pr-4">
            <h3 className="lg:text-3xl md:text-xl sm:text-sm text-lg tracking-wide  leading-10">
              Chat
            </h3>
            <h6 className="lg:text-lg text-xs md:text-xs md:tracking-tight md:leading-2 sm:leading-6">
              with us to Avail
            </h6>
            <h3 className="lg:text-2xl md:text-xs sm:text-sm tracking-tight leading-10">
              50% OFF
            </h3>
          </div>
        </div>
        {/* Header End */}

        {/*Fields  */}

        <div className="lg:flex sm:px-8 lg:flex-row gap-2 px-4 sm:mt-6">
          <input
            type="text"
            name="fname"
            placeholder="First Name"
            required
            className=" bg-color-primary border-2 px-4 border-white outline-none text-white rounded-md w-full h-10 lg:w-4/5 placeholder:px-2 placeholder:text-[12px]"
          />
          <input
            type="text"
            name="lname"
            required
            placeholder="Last Name"
            className=" bg-color-primary border-2 lg:mt-0 px-4 border-white outline-none text-white rounded-md mt-2 md:mt-2 h-10 w-full lg:w-4/5 placeholder:px-4 md:placeholder:px-1 placeholder:text-[12px]"
          />
        </div>
        <div className="mt-2 sm:px-8 px-4 md:mt-2 lg:mt-6">
          <input
            type="text"
            name="email"
            required
            placeholder="Enter Email here"
            className="w-full border-2 px-4 border-white outline-none text-white bg-color-primary rounded-md h-10 placeholder:px-4 placeholder:text-[12px]"
          />
        </div>

        <div className="px-4 sm:px-8 mt-2 md:mt-2 lg:mt-6 lg:mb-6 mb-2 md:mb-2">
          
              <ReactPhoneInput
              inputProps={{
                name: 'phone',
                required:'true'
              }}
                specialLabel={""}
                country={"th"}
                inputStyle={{
                  borderColor: "white",
                  marginTop: "20px",
                  backgroundColor: "transparent",
                  color: "white",
                  fontSize: "14px",
                  border: "2px solid white",
                  height: "40px",
                  width: "100%",
                }}
              />
           
    
        </div>

        <div className="md:mt-2 sm:px-8 lg:mt-6 px-4 mt-2">
          <textarea
            name="message"
            rows={3}
            required
            className="block p-4 w-full text-white outline-none bg-color-primary border-2 rounded-lg border-white focus:ring-blue-500 focus:border-blue-500 placeholder:text-[12px]"
            placeholder="Talk About Your Project "
          ></textarea>
        </div>

        <div className="w-full sm:px-8 md:mt-2 lg:mt-6 px-4 mt-2">
          <button
            type="submit"
            className="md:p-2 p-2 lg:p-3 w-full bg-color-secondary rounded-lg text-sm text-color-primary tracking-wide font-bold focus:ring-blue-500 focus:border-blue-500"
          >
            Let&apos;s Discuss
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;