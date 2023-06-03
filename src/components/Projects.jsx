import { SiHtml5, SiReact, SiRedux, SiTailwindcss, SiMysql, SiTypescript, SiTestinglibrary, SiJest, SiDaisyui, SiNextdotjs, SiCss3, SiJavascript, SiDocker, SiGit, SiFigma, SiTrello, SiGithub } from "react-icons/si";
import starWarsDesktop from '../images/star-wars-desktop.gif'
import starWarsMobile from '../images/star-wars-mobile.gif'

export default function Projects() {
  return (
    <div className="bg-base-200 py-14" id="projects">
      <h1 className="text-4xl text-center">Projetos</h1>

      {/* xl:grid-cols-3 lg:grid-cols-2 */}
      <div className="flex flex-col items-center gap-20 px-8 py-14 lg:grid ">

        <div className="flex-col items-center justify-center w-full max-w-lg m-auto shadow-xl max-h-max card card-compact bg-base-300">
          <div className="w-full ">
            <figure><img className="w-full rounded-t-xl" src={starWarsDesktop} alt="star-wars-desktop" /></figure>
          </div>
          <div className="items-center w-full space-y-10 card-body">
            <div className="flex flex-col items-center ">
              <h2 className="card-title">Star Wars Filters</h2>
              <div className="overflow-y-auto max-h-52">
              <p className="text-center">Aplicação consiste uma lógica complexa de vários tipos de filtros que funcionam de forma aninhada</p>
              </div>
            </div>
            <div className="flex items-center justify-around w-full ">
              <div>
                <p className="mb-4 font-bold text-center">Tecnologias Utilizadas</p>
                <div className="grid grid-cols-3 gap-2 gap-x-6 sm:flex sm:gap-4">
                  <SiReact className="text-2xl" />
                  <SiJavascript className="text-2xl" />
                  <SiJest className="text-2xl" />
                  <SiTestinglibrary className="text-2xl" />
                  <SiTailwindcss className="text-2xl" />
                  <SiDaisyui className="text-2xl" />
                </div>
              </div>
              <div className="justify-center card-actions">
                <div className="flex flex-col w-24">
                <a href="https://github.com/Quelvinmp/Star-Wars-Filters-Project" target="_blank" className="btn btn-link text-secondary" rel="noreferrer">Repositório</a>
                <a href="https://quelvinmp-star-wars-filters.netlify.app/" target="_blank" className="btn btn-primary" rel="noreferrer">Deploy</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}