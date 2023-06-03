import { BsChevronDoubleDown } from "react-icons/bs";
import perfil from '../images/perfil-remove-bg.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";

export default function Hero() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="flex flex-col min-h-screen hero bg-base-200" id="top">
      <div className="flex-col flex-1 gap-4 sm:gap-10 lg:gap-[1rem] hero-content lg:flex-row-reverse w-full lg:justify-around justify-center" data-aos="zoom-in" data-aos-duration="1000">
        <img src={perfil} className="max-w-xs rounded-lg sm:max-w-sm" />
        <div className="flex flex-col items-center justify-center gap-2 sm:gap-0 " >
          <h1 className="text-3xl font-bold leading-tight text-center sm:text-5xl">Olá, me chamo <span className="text-primary">Quelvin</span>!</h1>
          <p className="max-w-lg text-sm text-center sm:text-base sm:pt-6">Comecei a estudar programação no final de 2021 e desde então não me imagino trabalhando com outra coisa se não nessa área, que tem uma incrível capacidade de resolver tanto pequenos problemas do dia a dia como o de mega empresas!</p>
          <a href="#contact" className="btn btn-link">Posso resolver o da sua?</a>
        </div>
      </div>
      <BsChevronDoubleDown className="text-2xl font-extrabold h-7 w-7 text-primary animate-bounce" />
    </div>
  )
}