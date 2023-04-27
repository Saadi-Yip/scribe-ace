
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

//&& Blogs Props &&//
const blogs_data = [
  {
    title: "Fiction",
    details: "Our elite book writers for hire have the experience required to write informative content; therefore, you can rely on us to write an accurate and factual book for you.",
    url: '/portfolio-1.png'
  },
  {
    title: "Fiction",
    details: "Our elite book writers for hire have the experience required to write informative content; therefore, you can rely on us to write an accurate and factual book for you.",
    url: '/portfolio-2.png'
  },
  {
    title: "Fiction",
    details: "Our elite book writers for hire have the experience required to write informative content; therefore, you can rely on us to write an accurate and factual book for you.",
    url: '/portfolio-3.png'
  },
  {
    title: "Fiction",
    details: "Our elite book writers for hire have the experience required to write informative content; therefore, you can rely on us to write an accurate and factual book for you.",
    url: '/portfolio-1.png'
  },
  {
    title: "Fiction",
    details: "Our elite book writers for hire have the experience required to write informative content; therefore, you can rely on us to write an accurate and factual book for you.",
    url: '/portfolio-2.png'
  },
];
  
 

 

export default function Home() {
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

  return (
    <main>
      <Header /> 
      <Hero heading={heading} description={description} listing={listing} />
      <Services />
      <Cta />
      <Steps />
      <Benifits/>
      <Blogs data={blogs_data} />
      <Portfolio/>
      <Pricing />
      <Testimonials /> 
      <Footer/> 
    </main>
  );
}
