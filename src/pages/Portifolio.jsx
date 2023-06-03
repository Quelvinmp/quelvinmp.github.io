import { useContext } from "react";
import { StateContext } from "../context/StateProvider";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Technologies from "../components/Technologies";
import Projects from "../components/Projects";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Portifolio() {
  const {lightMode} = useContext(StateContext);
  return (
    <main data-theme={`${lightMode ? 'bumblebee' : 'dark'}`}>
    <Header />
    <Hero />
    <Technologies />
    <Projects />
    <Achievements />
    <Contact />
    <Footer />
  </main>
  )
}
