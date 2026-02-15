import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Specializations from "../components/Specializations";

export default function Home() {
  return (
    <div className=" text-gray-900 min-h-full w-full">
      <Navbar />
      <Hero />
      <About />
      <Specializations />
      {/*<Projects />
      <Footer /> */}
    </div>
  );
}
