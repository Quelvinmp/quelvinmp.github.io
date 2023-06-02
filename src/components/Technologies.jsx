import { SiHtml5, SiReact, SiRedux, SiTailwindcss, SiMysql, SiTypescript, SiTestinglibrary, SiJest, SiDaisyui, SiNextdotjs, SiCss3, SiJavascript, SiDocker, SiGit, SiFigma, SiTrello, SiGithub } from "react-icons/si";


export default function Technologies() {
  return (
    <div className="w-full max-w-2xl px-8 m-auto py-14 lg:max-w-4xl base-100" id="habilities">
      <div className="flex flex-col items-center w-full gap-5 lg:grid-cols-2 lg:items-start lg:grid lg:gap-x-20">
        <div className="flex flex-col w-full gap-4">
          <div className="text-2xl divider">Front-end</div>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <div className="p-2 w-fit h-fit rounded-xl tooltip" data-tip="HTML 5">
              <SiHtml5 className="text-4xl" />
            </div>
            <div className="p-2 w-fit h-fit rounded-xl tooltip" data-tip="CSS 3">
              <SiCss3 className="text-4xl" />
            </div>
            <div className="p-2 w-fit h-fit rounded-xl tooltip" data-tip="JavaScript">
              <SiJavascript className="text-4xl" />
            </div>
            <div className="p-2 w-fit h-fit rounded-xl tooltip" data-tip="React.js">
              <SiReact className="text-4xl" />
            </div>
            <div className="p-2 w-fit h-fit rounded-xl tooltip" data-tip="Next.js">
              <SiNextdotjs className="text-4xl" />
            </div>
            <div className="p-2 w-fit h-fit rounded-xl tooltip" data-tip="Redux">
              <SiRedux className="text-4xl" />
            </div>
            <div className="p-2 w-fit h-fit rounded-xl tooltip" data-tip="TailwindCSS">
              <SiTailwindcss className="text-4xl" />
            </div>
            <div className="p-2 w-fit h-fit rounded-xl tooltip" data-tip="DaisyUI">
              <SiDaisyui className="text-4xl" />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full gap-4">
          <div className="text-2xl divider">Back-end</div>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <div className="p-2 w-fit h-fit rounded-xl tooltip" data-tip="JavaScript">
              <SiJavascript className="text-4xl" />
            </div>
            <div className="p-2 w-fit h-fit rounded-xl tooltip" data-tip="MySQL">
              <SiMysql className="text-4xl" />
            </div>
            <div className="p-2 w-fit h-fit rounded-xl tooltip" data-tip="Docker">
              <SiDocker className="text-4xl" />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full gap-4">
          <div className="text-2xl divider">Testes</div>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <div className="p-2 w-fit h-fit rounded-xl tooltip" data-tip="React Testing Library">
              <SiTestinglibrary className="text-4xl" />
            </div>
            <div className="p-2 w-fit h-fit rounded-xl tooltip" data-tip="Jest">
              <SiJest className="text-4xl" />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full gap-4">
          <div className="text-2xl divider">Outros</div>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <div className="p-2 w-fit h-fit rounded-xl tooltip" data-tip="Git">
              <SiGit className="text-4xl" />
            </div>
            <div className="p-2 w-fit h-fit rounded-xl tooltip" data-tip="GitHub">
              <SiGithub className="text-4xl" />
            </div>
            <div className="p-2 w-fit h-fit rounded-xl tooltip" data-tip="Trello">
              <SiTrello className="text-4xl" />
            </div>
            <div className="p-2 w-fit h-fit rounded-xl tooltip" data-tip="Figma">
              <SiFigma className="text-4xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}