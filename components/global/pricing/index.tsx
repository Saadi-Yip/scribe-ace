import PriceBox from "@/components/global/pricing/PriceBox";

const Pricing = () => {
  const prices = [
    {
      name: "Basic",
      save: "Save 33% ",
      price: "$10",
      monthly: "$ 33 /Month",
      packageList: [
        {
          list: "Creating/updating the outline.",
        },
        {
          list: "Completing your book as per the requirements/outline.",
        },
        {
          list: "Adjusting layout presentation for the publishing standards",
        },
        {
          list: "Add Up to 10-15 Pictures",
        },
        {
          list: "Unlimited revisions.",
        },
        {
          list: "Dedicated team of expert writers.",
        },
        {
          list: "Complete Ownership Rights.",
        },
        {
          list: "Editing, Proofreading, and formatting",
        },
      ],
      number: "+1(347)-795-0173",
      start: "Let’s Chat",
    },
    {
      name: "Startup",
      save: "Save 33% ",
      price: "$10",
      monthly: "$ 33 /Month",
      packageList: [
        {
          list: "Creating/updating the outline.",
        },
        {
          list: "Completing your book as per the requirements/outline.",
        },
        {
          list: "Adjusting layout presentation for the publishing standards",
        },
        {
          list: "Add Up to 10-15 Pictures",
        },
        {
          list: "Unlimited revisions.",
        },
        {
          list: "Dedicated team of expert writers.",
        },
        {
          list: "Complete Ownership Rights.",
        },
        {
          list: "Editing, Proofreading, and formatting",
        },
      ],
      number: "+1(347)-795-0173",
      start: "Let’s Chat",
    },
    {
      name: "Ultimate",
      save: "Save 33% ",
      price: "$10",
      monthly: "$ 33 /Month",
      packageList: [
        {
          list: "Creating/updating the outline.",
        },
        {
          list: "Completing your book as per the requirements/outline.",
        },
        {
          list: "Adjusting layout presentation for the publishing standards",
        },
        {
          list: "Add Up to 10-15 Pictures",
        },
        {
          list: "Unlimited revisions.",
        },
        {
          list: "Dedicated team of expert writers.",
        },
        {
          list: "Complete Ownership Rights.",
        },
        {
          list: "Editing, Proofreading, and formatting",
        },
      ],
      number: "+1(347)-795-0173",
      start: "Let’s Chat",
    },
  ];
  return (
    <section>
      <div className="container m-auto px-3">
        <div className="section_title">
          <h2 className="text-color-primary text-center text-4xl">How much does the leading Writing company in USA cost?</h2>
        </div>

        <div className="flex justify-between flex-col sm:flex-row my-6">
          {prices.map((data: any, i: number) => (
            <PriceBox
              key={i.toString()}
              name={data.name}
              save={data.save}
              price={data.price}
              monthly={data.monthly}
              packageList ={data.packageList}
              number = {data.number}
              start = {data.start}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
