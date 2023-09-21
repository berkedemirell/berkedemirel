import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero.jsx";
import Skills from "./components/Skills.jsx";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import { useTranslation } from "react-i18next";

function App() {
  
  const [t, i18n] = useTranslation("global")

  
  const handleLangChange = (lang) => {
    i18n.changeLanguage(lang)
  }

  return (
    <div className="w-full relative overflow-x-hidden">
      <Navbar i18n={i18n} handleLangChange={handleLangChange} t={t}/>
      <Hero  t={t}/>
      <Skills t={t}/>
      <Projects t={t}/>
      <Contact t={t}/>
      <Footer t={t}/>
    </div>
  );
}

export default App;
