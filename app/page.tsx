import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsMarquee from "@/components/StatsMarquee";
import Origin from "@/components/Origin";
import Services from "@/components/Services";
import StillStanding from "@/components/StillStanding";
import Values from "@/components/Values";
import Commercial from "@/components/Commercial";
import StartProject from "@/components/StartProject";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsMarquee />
        <Origin />
        <Services />
        <StillStanding />
        <Values />
        <Commercial />
        <StartProject />
      </main>
      <Footer />
    </>
  );
}
