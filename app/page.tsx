import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsMarquee from "@/components/StatsMarquee";
import Services from "@/components/Services";
import StillStanding from "@/components/StillStanding";
import Origin from "@/components/Origin";
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
        <Services />
        <StillStanding />
        <Origin />
        <Commercial />
        <StartProject />
      </main>
      <Footer />
    </>
  );
}
