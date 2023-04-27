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

const service_data=
  {
    heading:"Ensuring Perfection And Error-Free Manuscripts",
    authors:"Authors Writing Club provides proofreading services to authors around the world to ensure their book is free of errors. Through our proofreading service, we catch the typographical and grammatical errors and ensure consistency throughout the manuscript.",
    protect:"Protect Your Credibility As An Author",
    handpick:"We've hand-picked a team of professional proofreaders after a rigorous selection process. We also leverage advanced technology to ensure quality further.",
    riding:"We're Riding Shotgun",
    understand:"We understand that your manuscript's security is important; that's why we use bank-grade security standards to protect your work.",
    variety:"A Variety of Manuscript Editing Services",
    stream:"Our streamlined process and exceptional proofreading team deliver lightning-fast turnarounds, as little as 4 hours.",
    url:'/pexel.png'
  }


export default function Home() {
  return (
    <main>
      <Header />
      <Hero
        heading={props.hero_home.heading}
        description={props.hero_home.description}
        listing={props.hero_home.listing}
        data = {props.statistics_home}
      />
      <Services />
      <Cta title = {props.cta_title} details = {props.cta_details}/>
      <Steps steps = {props.steps_home}/>
      <Benifits benefits1 = {props.benefits1} benefits2 = {props.benefits2}/>
      <Blogs data={props.blogs_home} />
      <Portfolio />
      <Pricing prices = {props.pricing_home}/>
      <Testimonials testimonials = {props.testimonials_home}/>
      <Footer />
    </main>
  );
}
