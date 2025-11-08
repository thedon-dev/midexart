import Navbar from "@/components/Navbar";
import About from "@/components/sections/About";
import Explore from "@/components/sections/Explore";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Team from "@/components/sections/Team";
import WhatsappIcon from "@/components/WhatsappIcon";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Explore />
      <Team />
      <Footer />
      <WhatsappIcon />
    </div>
  );
}
