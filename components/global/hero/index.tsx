import Form from "@/components/global/hero/Form";
import Content from "@/components/global/hero/Content"; 
import Statistics from "../statistics";

export type Prop = {
  heading: string;
  description: string;
  listing: string[]; 
  url?: string;
};
const stats = [
  { title: "Satisfied Clients", count: 1874 },
  { title: "Years of Experience", count: 7 },
  { title: "Projects", count: 1874 },
  { title: "Increased ROI", count: 187 },
];
const Hero = ({ heading, description, listing, url }: Prop) => {
  return (
    <section className="relative hero-bg bg-center bg-cover">
        <div className="flex flex-wrap">
          <div className="container w-4/5 mx-auto">
            <div className="flex flex-wrap items-center">
              <Content heading = {heading} description= {description} listing={listing}/>
              <Form />
            </div>
          </div>
        </div>
        <Statistics stats={stats} />
    </section>
  );
};

export default Hero;