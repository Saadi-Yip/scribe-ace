import Form from "@/components/global/hero/Form";
import Content from "@/components/global/hero/Content";

type Prop = {
  heading: string;
  description: string;
  listing: string[];
};

const Hero = ({ heading, description, listing }: Prop) => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <Content />
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Hero;
