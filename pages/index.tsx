 
import Hero from "@/components/global/hero";  
import Testimonials from "@/components/global/testimonials";

 

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
      <Hero heading={heading} description={description} listing={listing}/>
      <Testimonials/>
    </main>
  )
}
