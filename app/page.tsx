import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Procedimentos from "@/components/Procedimentos";
import Sobre from "@/components/Sobre";
import FAQ from "@/components/FAQ";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Procedimentos />
        <Sobre />
        <FAQ />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
