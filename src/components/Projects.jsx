import { SiHtml5, SiReact, SiRedux, SiTailwindcss, SiMysql, SiTypescript, SiTestinglibrary, SiJest, SiDaisyui, SiNextdotjs, SiCss3, SiJavascript, SiDocker, SiGit, SiFigma, SiTrello, SiGithub } from "react-icons/si";
import starWarsDesktop from '../images/star-wars-desktop.gif'
import minecraftButSatisfying from '../images/minecraftButSatisfyingGif.gif'
import starWarsMobile from '../images/star-wars-mobile.gif'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";

export default function Projects() {

  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, [])

  return (
    <div className="bg-base-200 py-14" id="projects">
      <h1 className="text-4xl text-center" data-aos="fade" data-aos-duration="1500">Projetos</h1>

      {/* xl:grid-cols-3 lg:grid-cols-2 */}
      <div className="flex flex-col items-center gap-10 px-8 lg:flex-row py-14 ">

        <div className="flex-col items-center justify-center w-full max-w-lg m-auto shadow-xl lg:w-96 max-h-max card card-compact bg-base-300" data-aos="zoom-in">
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
        
        <div className="flex-col items-center justify-center w-full max-w-lg m-auto shadow-xl lg:w-96 max-h-max card card-compact bg-base-300" data-aos="zoom-in">
          <div className="w-full ">
            <figure><img className="w-full rounded-t-xl" src={minecraftButSatisfying} alt="minecraft-but-satisfying" /></figure>
          </div>
          <div className="items-center w-full space-y-10 card-body">
            <div className="flex flex-col items-center ">
              <h2 className="card-title">Minecraft But Satisfying</h2>
              <div className="overflow-y-auto max-h-52">
              <p className="text-center">Uma ferramenta que possibilita a criação e montagem de pixel art online com integração ao Minecraft</p>
              </div>
            </div>
            <div className="flex items-center justify-around w-full ">
              <div>
                <p className="mb-4 font-bold text-center">Tecnologias Utilizadas</p>
                <div className="grid grid-cols-3 gap-2 gap-x-6 sm:flex sm:gap-4">
                  <SiReact className="text-2xl" />
                  <SiJavascript className="text-2xl" />
                  <SiTailwindcss className="text-2xl" />
                  <SiDaisyui className="text-2xl" />
                </div>
              </div>
              <div className="justify-center card-actions">
                <div className="flex flex-col w-24">
                <a href="https://www.youtube.com/watch?v=W3W-6PfLQYo&t=7s" target="_blank" className="btn btn-link text-secondary" rel="noreferrer">Tutorial</a>
                <a href="https://minecraft-but-satisfying.vercel.app/" target="_blank" className="btn btn-primary" rel="noreferrer">Deploy</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}