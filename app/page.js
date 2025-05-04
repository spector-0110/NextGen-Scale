// app/(component)/page.js
import Hero from "@/components/Hero/page";
import QuickStats from "@/components/QuickStats/page";
import ServiceCards from "@/components/ServiceCards/page";
import ProcessTimeLine from "@/components/ProcessTimeLine/page";
import PartnerMarquee from "@/components/PartnerMarquee/page";
import FormPage from "@/components/form/page";

export default function HomePage() {
    return (
      <>
        <section id="hero">
          <Hero />
        </section>
  
        <section id="stats">
          <QuickStats />
        </section>
  
        <section id="partners">
          <PartnerMarquee />
        </section>
  
       <section id="services">
          <ServiceCards />
        </section>
  
        <section id="process">
          <ProcessTimeLine />
        </section>
        <section id="form">
          <FormPage /> 
        </section>         
        
      </>

    );
  }