import { BsChevronDoubleDown } from "react-icons/bs";

export default function Hero() {
  return (
    <div className="flex flex-col min-h-screen hero bg-base-200">
      <div className="flex-col flex-1 gap-10 lg:gap-[1rem] hero-content lg:flex-row-reverse w-full lg:justify-around justify-center">
        <img src="src/assets/perfil-remove-bg.png" className="max-w-sm rounded-lg" />
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold leading-tight text-center">Olá, me chamo <span className="text-primary">Quelvin</span>!</h1>
          <p className="max-w-lg pt-6 text-center">Comecei a estudar programação no final de 2021 e desde então não me imagino trabalhando com outra coisa se não nessa área, que tem uma incrível capacidade de resolver tanto pequenos problemas do dia a dia como o de mega empresas!</p>
          <p className="btn btn-link">Posso resolver o da sua?</p>
        </div>
      </div>
      <BsChevronDoubleDown className="text-2xl font-extrabold h-7 w-7 text-primary animate-bounce " />
    </div>
  )
}