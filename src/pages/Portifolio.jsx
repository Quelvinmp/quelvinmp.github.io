import { useContext } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import { StateContext } from "./context/StateProvider";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";

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
    <div>dawd</div>
    <div>dawd</div>
    <div>dawd</div>
    <div>dawd</div>
    <div>dawd</div>
    <div>dawd</div>
  </main>
  )
}
