import Form from "@/components/global/hero/Form";
import Content from "@/components/global/hero/Content"; 

export type Prop = {
  heading: string;
  description: string;
  listing: string[]; 
  url?: string;
};

const Hero = ({ heading, description, listing, url }: Prop) => {
  return (
    <section className="relative bg-[url('/hero-bg.png')] bg-center bg-cover bg-gradient-to-r from-[#2E35FF]  to-[#5CDB94]" >
        <div className="flex flex-wrap">
          <div className="container w-4/5 mx-auto">
            <div className="flex flex-wrap items-center">
              <Content heading = {heading} description= {description} listing={listing}/>
              <Form />
            </div>
          </div>
        </div>
    </section>
  );
};

export default Hero;