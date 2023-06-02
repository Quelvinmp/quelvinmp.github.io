import { useContext } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import { StateContext } from "./context/StateProvider";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";

function App() {
  const {lightMode} = useContext(StateContext);

  return (
    <main data-theme={`${lightMode ? 'bumblebee' : 'dark'}`}>
      <Header />
      <Hero />
      <Technologies />
      <Projects />
      <Achievements />
      <div>dawd</div>
      <div>dawd</div>
      <div>dawd</div>
      <div>dawd</div>
      <div>dawd</div>
      <div>dawd</div>
    </main>
  )
}

export default App
