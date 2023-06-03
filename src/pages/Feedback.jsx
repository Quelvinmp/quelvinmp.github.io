import { useNavigate } from "react-router-dom";
import { BsArrowReturnLeft } from "react-icons/bs";
import { useContext } from "react";
import { StateContext } from "../context/StateProvider";

export default function Feedback() {
  const backToHome = useNavigate();
  const {lightMode} = useContext(StateContext);

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-10" data-theme={`${lightMode ? 'bumblebee' : 'dark'}`}>
      <p className="text-2xl">Obrigado pelo Contato!</p>
      <button type="button" className="btn btn-ghost" onClick={() => backToHome("/")}>
      <BsArrowReturnLeft className="text-2xl" />
      </button>
    </div>
  )
}
