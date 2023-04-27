import StepsBox from "./StepsBox";


export type Prop = {
  steps:{
    heading: string;
    text: string;
    num: string;
  }[]
};

const Steps = (props:Prop) => {
   
  return (
    <section className="my-16">
      <div className="text-center">
        <h2 className="text-color-third text-4xl max-sm:text-2xl font-medium">
          Our Process Explained: How it Works
        </h2>
        <p className="text-lg mt-4 text-center text-black max-sm:text-xs">Steps To Success</p>
      </div>
      <div className="steps_sec m-auto max-w-7xl px-5 py-11 relative my-8">
        {props.steps.map(({heading,text,num}:any, i:number) => {
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
