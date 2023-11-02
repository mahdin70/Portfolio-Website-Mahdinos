import React from "react";
import About from "./components/About/About";
import Achievements from "./components/Achievements/Achievements";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skill";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Achievements />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
