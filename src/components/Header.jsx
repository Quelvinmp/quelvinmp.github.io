import ChangeTheme from "./ChangeTheme";

export default function Header() {
  return (
    <div className="fixed top-0 left-0 z-10 flex justify-around w-full navbar bg-base-100" id="header">
      <div className="flex justify-between w-full navbar-start lg:block lg:w-fit">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex="0" className="p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li><a href="#habilities">Habilidades</a></li>
            <li><a href="#projects">Projetos</a></li>
            <li><a href="#achievements">Minhas Conquistas</a></li>
            <li><a href="#contact">Contato</a></li>
            <li><a href="#social">Redes</a></li>

            <li><a href="https://drive.google.com/file/d/1Xby0zMHttRihEsUs-huDYXf6f7L8IwgF/view?usp=sharing" target="_blank" rel="noreferrer" className="text-left tooltip-bottom tooltip" data-tip="Abre uma nova aba">Currículo</a></li>
          </ul>
        </div>
        <a href="#top" className="text-xl normal-case btn btn-ghost">Quelvin Machado</a>
        <div className="lg:hidden">
          <ChangeTheme />
        </div>
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul className="px-1 menu menu-horizontal">
          <li><a href="#habilities">Habilidades</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#achievements">Minhas Conquistas</a></li>
          <li><a href="#contact">Contato</a></li>
          <li><a href="#social">Redes</a></li>
          <li><a href="https://drive.google.com/file/d/1Xby0zMHttRihEsUs-huDYXf6f7L8IwgF/view?usp=sharing" target="_blank" rel="noreferrer" className="text-left tooltip-bottom tooltip" data-tip="Abre uma nova aba">Currículo</a></li>
        </ul>
      </div>
      <div className="hidden lg:block">
        <ChangeTheme />
      </div>
    </div>
  )
}
