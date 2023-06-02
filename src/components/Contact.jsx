import { useState } from "react";

export default function Contact() {
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
  
  return (
    <div className="bg-base-200 py-14" id="contact">
      <h1 className="mb-8 text-4xl text-center">Entre em contato!</h1>
      <form className="px-4" noValidate action="https://formsubmit.co/quelvinmp@gmail.com" method="POST">
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://quelvinmp.github.io/feedback"
        />
        <div className="flex flex-col items-center justify-center w-full gap-8 m-auto">

          <div className="w-full max-w-2xl form-control">
            <label className="label">
              <span className="label-text">Qual o seu nome?</span>
            </label>
            <input type="text" name="name" placeholder="Digite aqui" className="w-full max-w-2xl input input-bordered" value={name} required onChange={({target: {value}}) => {setName(value)
          verifyFields()}} />
          </div>

          <div className="w-full max-w-2xl form-control">
            <label className="label">
              <span className="label-text">Qual o seu e-mail?</span>
            </label>
            <input type="email" placeholder="Digite aqui" name="email" className="w-full max-w-2xl input input-bordered" value={Inputemail} required onChange={({target: {value}}) => {setEmail(value)
            verifyFields(value)}}/>
          </div>

          <textarea name="mensagem" placeholder="Sua mensagem" className="w-full max-w-2xl textarea textarea-bordered textarea-lg" value={message} onChange={({target: {value}}) => {setMessage(value)
          verifyFields()}}></textarea>

          <button type="submit" className="btn btn-lg btn-primary"  disabled={isDisabled}>Enviar Mensagem</button>

        </div>
      </form>
    </div>
  )
}
