import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatIsIt from "@/components/WhatIsIt";
import WhyMatters from "@/components/WhyMatters";
import HowToGet from "@/components/HowToGet";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <WhatIsIt />
      <WhyMatters />
      <HowToGet />
      <Footer />
    </main>
  );
};

export default Index;
