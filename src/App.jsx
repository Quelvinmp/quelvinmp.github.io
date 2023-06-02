import { useContext } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import { StateContext } from "./context/StateProvider";

function App() {
  const {lightMode} = useContext(StateContext);

  return (
    <main data-theme={`${lightMode ? 'bumblebee' : 'dark'}`}>
      <Header />
      <Hero />
      <Technologies />
      <div>wdadaw</div>
      <div>wdadaw</div>
      <div>wdadaw</div>
      <div>wdadaw</div>
      <div>wdadaw</div>
      <div>wdadaw</div>
      <div>wdadaw</div>
      <div>wdadaw</div>
    </main>
  )
}

export default App
