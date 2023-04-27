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
    <section>
      <div className="text-center">
        <h2 className="text-color-primary text-4xl">
          Our Process Explained: How it Works
        </h2>
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
