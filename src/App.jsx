import { useContext } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import { StateContext } from "./context/StateProvider";
import Projects from "./components/Projects";

function App() {
  const {lightMode} = useContext(StateContext);

  return (
    <main data-theme={`${lightMode ? 'bumblebee' : 'dark'}`}>
      <Header />
      <Hero />
      <Technologies />
      <Projects />
    </main>
  )
}

export default App
