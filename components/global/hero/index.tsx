import Form from "@/components/global/hero/Form";
import Content from "@/components/global/hero/Content"; 
import Statistics from "../statistics";

export type Prop = {
  heading: string;
  description: string;
  listing: string[]; 
  url?: string;
};
export type Stat = {
  stats:{ 
    count: number;
    title: string;
  }[]
}
 
const Hero = (props: Prop, data: Stat) => {
  return (
    <section className="relative hero-bg bg-center bg-cover">
        <div className="flex flex-wrap">
          <div className="container w-4/5 mx-auto">
            <div className="flex flex-wrap items-center">
              <Content heading = {props.heading} description= {props.description} listing={props.listing}/>
              <Form />
            </div>
          </div>
        </div>
        <Statistics stats={data.stats} />
    </section>
  );
};

export default Hero;