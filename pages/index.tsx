import Header from "@/components/global/header";
import Hero from "@/components/global/hero";
import Steps from "@/components/global/steps";
import Testimonials from "@/components/global/testimonials";
import Cta from "@/components/global/cta";
import Services from "@/components/home/services";
import Benifits from "@/components/home/benefits";
import Blogs from "@/components/global/writing-blogs";
import Portfolio from "@/components/global/portfolio";
import Pricing from "@/components/global/pricing";
import Footer from "@/components/global/footer";
import props from "./props.json" 
import Head from "next/head";

const service_data=[
  {
    title: "Fiction",
    details:
      "Our elite book writers for hire have the experience required to write informative content; therefore, you can rely on us to write an accurate and factual book for you.",
    url: "/portfolio-1.png",
  },
  {
    title: "Fiction",
    details:
      "Our elite book writers for hire have the experience required to write informative content; therefore, you can rely on us to write an accurate and factual book for you.",
    url: "/portfolio-2.png",
  },
  {
    title: "Fiction",
    details:
      "Our elite book writers for hire have the experience required to write informative content; therefore, you can rely on us to write an accurate and factual book for you.",
    url: "/portfolio-3.png",
  },
  {
    title: "Fiction",
    details:
      "Our elite book writers for hire have the experience required to write informative content; therefore, you can rely on us to write an accurate and factual book for you.",
    url: "/portfolio-1.png",
  },
  {
    title: "Fiction",
    details:
      "Our elite book writers for hire have the experience required to write informative content; therefore, you can rely on us to write an accurate and factual book for you.",
    url: "/portfolio-2.png",
  },
];

// Hero Component Props
const heading = "Industry-Leading Professional Elite Book Writers For Hire";
const description =
  "Making a mark in today’s online world is a crucial element of marketing. Since the world has started enjoying the better results of digital marketing, traditional marketing methods are quickly losing popularity";
const listing = [
  "Sleek Design",
  "Fastest Turnaround Time",
  "Seo Optimized",
  "Fully Customized",
];

//Statistics Props
const data = [
  { title: "Satisfied Clients", count: 1874 },
  { title: "Years of Experience", count: 7 },
  { title: "Projects", count: 1874 },
  { title: "Increased ROI", count: 187 },
];

//cta props
const cta_title = "Industry-Leading Professional Elite Book Writers For Hire";
const cta_details =
  "To determine which content writing service will suit your needs, explore what we offer at our content writing services company.";

// Benefits Props
const benefits1 = [
  {
    url: "heads.png",
    title: "Professional In-house Team",
    details:
      "Behind all of our content is a team of 4 word masters. Our copy editors work closely with our team of writers to produce the custom content with all the specifications you want, whether a short and sweet brief or a detailed, in-depth one is provided. As a content writing services company we have helped more than 200 hundred different clients with their content writing in the last two years alone, and we want this number to grow.",
  },
  {
    url: "time.png",
    title: "Fast Delivery",
    details:
      "Behind all of our content is a team of 4 word masters. Our copy editors work closely with our team of writers to produce the custom content with all the specifications you want, whether a short and sweet brief or a detailed, in-depth one is provided. As a content writing services company we have helped more than 200 hundred different clients with their content writing in the last two years alone, and we want this number to grow.",
  },
  {
    url: "heads.png",
    title: "Unique and High-Quality Content",
    details:
      "Behind all of our content is a team of 4 word masters. Our copy editors work closely with our team of writers to produce the custom content with all the specifications you want, whether a short and sweet brief or a detailed, in-depth one is provided. As a content writing services company we have helped more than 200 hundred different clients with their content writing in the last two years alone, and we want this number to grow.",
  },
];
const benefits2 = [
  {
    url: "setting.png",
    title: "Professional In-house Team",
    details:
      "Behind all of our content is a team of 4 word masters. Our copy editors work closely with our team of writers to produce the custom content with all the specifications you want, whether a short and sweet brief or a detailed, in-depth one is provided. As a content writing services company we have helped more than 200 hundred different clients with their content writing in the last two years alone, and we want this number to grow.",
  },
  {
    url: "World.png",
    title: "An extensive Team of UK and US writers",
    details:
      "Behind all of our content is a team of 4 word masters. Our copy editors work closely with our team of writers to produce the custom content with all the specifications you want, whether a short and sweet brief or a detailed, in-depth one is provided. As a content writing services company we have helped more than 200 hundred different clients with their content writing in the last two years alone, and we want this number to grow.",
  },
  {
    url: "graph.png",
    title: "Boost Your SEO and Your Sales and Leads",
    details:
      "Behind all of our content is a team of 4 word masters. Our copy editors work closely with our team of writers to produce the custom content with all the specifications you want, whether a short and sweet brief or a detailed, in-depth one is provided. As a content writing services company we have helped more than 200 hundred different clients with their content writing in the last two years alone, and we want this number to grow.",
  },
];

// Steps Props
const steps = [
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

// Pricing Props
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

// Testimonials
const testimonials = [
  {
    url: "person-1.avif",
    name: "David Weasley",
    role: "Website Developer",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim ",
  },
  {
    url: "person-2.jfif",
    name: "Emma Watson",
    role: "Seo Expert",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim ",
  },
  {
    url: "person-3.avif",
    name: "Serious Black",
    role: "User Interface",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim ",
  },
  {
    url: "person-4.avif",
    name: "Dominic Torreto",
    role: "Graphic Designer",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim ",
  },
  {
    url: "person-5.jpg",
    name: "Albert",
    role: "Call Center Agent",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim ",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main>
        <Header />
        <Hero
          heading={heading}
          description={description}
          listing={listing}
          data={data}
        />
        <Services />
        <Cta title={cta_title} details={cta_details} />
        <Steps steps={steps} />
        <Benifits benefits1={benefits1} benefits2={benefits2} />
        <Blogs data={props.blogs_home} />
        <Portfolio />
        <Pricing prices={prices} />
        <Testimonials testimonials={testimonials} />
        <Footer />
      </main>
    </>
  );
}
