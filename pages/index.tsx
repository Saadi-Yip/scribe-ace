import Header from "@/components/global/header";
import Services from "@/components/global/services";

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
       <Services data = {service_data}/>
    </main>
  )
}
