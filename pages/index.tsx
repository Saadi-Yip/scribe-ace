import Header from "@/components/global/header";
import Blogs from "@/components/global/writing-blogs";
 
import Hero from "@/components/global/hero";  

 

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
       <Hero heading={heading} description={description} listing={listing}/>
       <Blogs/>
    </main>
  )
}
