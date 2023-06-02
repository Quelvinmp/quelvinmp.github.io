import { SiHtml5, SiReact, SiRedux, SiTailwindcss, SiMysql, SiTypescript, SiTestinglibrary, SiJest, SiDaisyui, SiNextdotjs, SiCss3, SiJavascript, SiDocker, SiGit, SiFigma, SiTrello, SiGithub } from "react-icons/si";

export default function Projects() {
  return (
    <div className="bg-base-200 py-14" id="projects">
      <h1 className="text-4xl text-center">Projetos</h1>

      {/* xl:grid-cols-3 lg:grid-cols-2 */}
      <div className="flex flex-col items-center gap-20 px-8 lg:gap-x-4 lg:gap-y-20 py-14 lg:grid ">

        <div className="flex-row items-center justify-center w-full max-w-lg m-auto shadow-xl max-h-max lg:flex-col card card-compact bg-base-300">
          <div className="w-2/5 lg:w-full">
            <figure><img className="hidden w-full rounded-t-xl lg:block" src="src/images/star-wars-desktop.gif" alt="star-wars-desktop" /></figure>
            <figure className=""><img className="rounded-xl lg:hidden" src="src/images/star-wars-mobile.gif" alt="star-wars-mobile" /></figure>
          </div>
          <div className="w-3/5 space-y-16 lg:space-y-8 card-body lg:w-full lg:items-center">
            <div className="flex flex-col lg:items-center">
              <h2 className="card-title">Star Wars Filters</h2>
              <p className="lg:text-center">Aplicação consiste uma lógica complexa de vários tipos de filtros que funcionam de forma aninhada</p>
            </div>
            <div>
              <p className="mb-4 font-bold lg:text-center">Tecnologias Utilizadas</p>
              <div className="flex gap-4">
                <SiReact className="text-2xl" />
                <SiJavascript className="text-2xl" />
                <SiJest className="text-2xl" />
                <SiTestinglibrary className="text-2xl" />
                <SiTailwindcss className="text-2xl" />
                <SiDaisyui className="text-2xl" />
              </div>
            </div>
            <div className="justify-end card-actions">
              <a href="https://github.com/Quelvinmp/Star-Wars-Filters-Project" target="_blank" className="btn btn-link text-secondary" rel="noreferrer">Repositório</a>
              <a href="https://quelvinmp-star-wars-filters.netlify.app/" target="_blank" className="btn btn-primary" rel="noreferrer">Deploy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}