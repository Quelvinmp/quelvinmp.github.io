import { useContext } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { StateContext } from "./context/StateProvider";

function App() {
  const {lightMode} = useContext(StateContext);

  return (
    <main data-theme={`${lightMode ? 'bumblebee' : 'dark'}`}>
      <Header />
      <Hero />
    </main>
  )
}

export default App
