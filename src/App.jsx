import { useState } from "react";
import Layout from "./components/layout/Layout";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects/Projects";
import Skills from "./components/sections/Skills";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

const App = () => {
  const [lang, setLang] = useState("en");

  const toggleLang = () => {
    setLang((prev) => (prev === "en" ? "cs" : "en"));
  };

  return (
    <Layout lang={lang}>
      <Navbar lang={lang} toggleLang={toggleLang} />
      <Hero lang={lang} />
      <Projects lang={lang} />
      <Skills lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
    </Layout>
  );
};

export default App;
