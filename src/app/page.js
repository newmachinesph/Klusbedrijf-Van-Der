import Contact from "@/components/Contact";
import Diensten from "@/components/Diensten";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Voordelen from "@/components/Voordelen";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero/>
        <Diensten />
        <Voordelen />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
