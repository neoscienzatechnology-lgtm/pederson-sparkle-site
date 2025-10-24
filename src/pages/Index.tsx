import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Coverage from "@/components/Coverage";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <About />
      <Coverage />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
