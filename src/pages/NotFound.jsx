import { useNavigate } from "react-router-dom";
import { BsArrowReturnLeft } from "react-icons/bs";


export default function NotFound() {
  const backToHome = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-10 bg-base-100">
      <p className="text-2xl">Esse Caminho Não Existe!</p>
      <button type="button" className="btn btn-ghost" onClick={() => backToHome("/")}>
      <BsArrowReturnLeft className="text-2xl" />
      </button>
    </div>
  )
}
