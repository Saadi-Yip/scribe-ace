 
import PriceBox from "@/components/global/pricing/PriceBox";

const Pricing = () => {
  const prices = [1, 2, 3];
  return (
    <section>
      <div className="container">
        <div className="section_title"></div>
        
        <div>
          {prices.map((p: number, i: number) => (
            <PriceBox key={i.toString()} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
 