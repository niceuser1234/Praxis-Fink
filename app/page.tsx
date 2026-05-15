import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import QuickInfo from "@/components/QuickInfo";
import Services from "@/components/Services";
import Feature from "@/components/Feature";
import About from "@/components/About";
import HoursNews from "@/components/HoursNews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="min-h-screen" style={{ background: "#FAFAF7" }}>
      <Nav />
      <main>
        <Hero />
        <QuickInfo />
        <Services mode="tabs" />
        <Feature />
        <About />
        <HoursNews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
