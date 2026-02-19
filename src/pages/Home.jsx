import { useRef } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Specializations from "../components/Specializations";

export default function Home() {

  const sectionRefs = useRef([]);

  const scrollToSection = (index) => {
    sectionRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="text-gray-900 min-h-full w-full">

      {/* Pass scroll function */}
      <Navbar scrollToSection={scrollToSection} />

        <Hero />

      <div ref={(el) => (sectionRefs.current[0] = el)}>
        <About />
      </div>

      <div ref={(el) => (sectionRefs.current[1] = el)}>
        <Specializations />
      </div>

      <div ref={(el) => (sectionRefs.current[2] = el)}>
        <Projects />
      </div>

      <div ref={(el) => (sectionRefs.current[3] = el)}>
        <Footer />
      </div>

    </div>
  );
}
