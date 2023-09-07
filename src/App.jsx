import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero.jsx";
import Skills from "./components/Skills.jsx";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="w-full relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
