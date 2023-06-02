import { SiGithub, SiLinkedin, SiTwitter } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="pb-4 rounded pt-14 footer footer-center bg-base-300 text-base-content">
      <div>
        <div className="grid grid-flow-col gap-8">
          <a href="https://github.com/quelvinmp" target="_blank" className="text-3xl cursor-pointer hover:scale-110" rel="noreferrer"><SiGithub /></a>
          <a href="https://www.linkedin.com/in/quelvinmachadodepaula/" target="_blank" className="text-3xl cursor-pointer hover:scale-110" rel="noreferrer"><SiLinkedin /></a>
          <a href="https://twitter.com/quelvinmp" target="_blank" className="text-3xl cursor-pointer hover:scale-110" rel="noreferrer"><SiTwitter /></a>
        </div>
      </div>
      <div>
        <p className="text-xs">Desenvolvido por: <span className="text-secondary link"><a href="https://www.linkedin.com/in/quelvinmachadodepaula/" target="_blank" rel="noreferrer">Quelvin Machado de Paula</a></span></p>
      </div>
    </footer>
  )
}
