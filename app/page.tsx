import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IntegrityBand from "@/components/IntegrityBand";
import StillStanding from "@/components/StillStanding";
import Origin from "@/components/Origin";
import WaterCta from "@/components/WaterCta";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Values from "@/components/Values";
import Commercial from "@/components/Commercial";
import Faq from "@/components/Faq";
import StartProject from "@/components/StartProject";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <IntegrityBand />
        <StillStanding />
        <Origin />
        <WaterCta />
        <Services />
        <Testimonials />
        <Values />
        <Commercial />
        <Faq />
        <StartProject />
      </main>
      <Footer />
    </>
  );
}
