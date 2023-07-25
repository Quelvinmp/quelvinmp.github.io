import { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false)
  const [isDisabled, setIsDisabled] = useState(true);
  const [name, setName] = useState('');
  const [Inputemail, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const verifyFields = (email) => {
    const regexEmail = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{3,3})+$/
    const lookEmail = email || Inputemail;

    if (name.length > 0 && regexEmail.test(lookEmail) && message.length > 0) {
      setIsDisabled(false)
      return
    }
    setIsDisabled(true)
  }
  

  const handleFormSubmit = () => {
    setIsLoading(true)
    document.getElementById('form').submit();
  }

  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, [])

  return (
    <div className="bg-base-200 py-14" id="contact">
      <h1 className="mb-8 text-4xl text-center" data-aos="fade" data-aos-duration="1500">Entre em contato!</h1>
      <form data-aos="zoom-in" className="px-4" noValidate action="https://formsubmit.co/0fd0920474cf0cc61ce45d3ef25a103b" method="POST" id="form">
        <input type="hidden" name="_captcha" value="true" />
        <input type="hidden" name="_next" value="https://quelvinmp.github.io/feedback"
        />
        <div className="flex flex-col items-center justify-center w-full gap-8 m-auto">

          <div className="flex flex-col items-center justify-center w-full gap-2">
            <div className="w-full max-w-2xl form-control">
              <label className="label">
                <span className="label-text">Qual o seu nome?</span>
              </label>
              <input type="text" name="name" placeholder="Digite aqui" className="w-full max-w-2xl input input-bordered" value={name} required onChange={({ target: { value } }) => {
                setName(value)
                verifyFields()
              }} />
            </div>

            <div className="w-full max-w-2xl form-control">
              <label className="label">
                <span className="label-text">Qual o seu e-mail?</span>
              </label>
              <input type="email" placeholder="Digite aqui" name="email" className="w-full max-w-2xl input input-bordered" value={Inputemail} required onChange={({ target: { value } }) => {
                setEmail(value)
                verifyFields(value)
              }} />
            </div>
          </div>

          <textarea name="mensagem" placeholder="Sua mensagem" className="w-full max-w-2xl textarea textarea-bordered textarea-lg" value={message} onChange={({ target: { value } }) => {
            setMessage(value)
            verifyFields()
          }}></textarea>

          {/* <button type="submit" className="btn btn-lg btn-primary w-52" disabled={isDisabled} onClick={handleFormSubmit}>
            <span className={`${isLoading ? 'hidden' : 'inline'}`} >Enviar Mensagem</span>
            <span className={`${isLoading ? 'inline' : 'hidden'} loading loading-spinner loadin-lg`}></span>
          </button> */}
          <label htmlFor="inputSubmit">
            {isLoading ? (
              <button className='btn btn-lg btn-primary w-52'><span className="loading loading-spinner loadin-lg"/></button>
            ) : (
              <input id='inputSubmit' type="submit" onClick={handleFormSubmit} className="btn btn-lg btn-primary w-52" disabled={isDisabled} value='Enviar Mensagem' />
            )}
          </label>


        </div>
      </form>
    </div>
  )
}
