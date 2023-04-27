import StepsBox from "./StepsBox";


export type props = {
  heading: string;
  text: string;
  num: string;
};

const Steps = () => {
  const data = [
    {
      heading: "Order Details",
      text: "In order for us at daCode to know that we are a good fit for your project we always start with screening questions in order to make sure that we are a suitable match for your company.",
      num: "1",
    },
    {
      heading: "Order Details",
      text: "In order for us at daCode to know that we are a good fit for your project we always start with screening questions in order to make sure that we are a suitable match for your company.",
      num: "2",
    },
    {
      heading: "Order Details",
      text: "In order for us at daCode to know that we are a good fit for your project we always start with screening questions in order to make sure that we are a suitable match for your company.",
      num: "3",
    },
    {
      heading: "Order Details",
      text: "In order for us at daCode to know that we are a good fit for your project we always start with screening questions in order to make sure that we are a suitable match for your company.",
      num: "4",
    },
    {
      heading: "Order Details",
      text: "In order for us at daCode to know that we are a good fit for your project we always start with screening questions in order to make sure that we are a suitable match for your company.",
      num: "5",
    },
    {
      heading: "Order Details",
      text: "In order for us at daCode to know that we are a good fit for your project we always start with screening questions in order to make sure that we are a suitable match for your company.",
      num: "6",
    },
  ];
  return (
    <section className="my-16">
      <div className="text-center">
        <h2 className="text-color-third text-4xl max-sm:text-2xl font-medium">
          Our Process Explained: How it Works
        </h2>
        <p className="text-lg mt-4 text-center text-black max-sm:text-xs">Steps To Success</p>
      </div>
      <div className="steps_sec m-auto max-w-7xl px-5 py-11 relative my-8">
        {data.map(({heading,text,num}:props, i:number) => {
          return (
            <div key={i.toString()} className="flex steps_row relative">
              <StepsBox
                heading={heading}
                text={text}
                num={num}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Steps;
