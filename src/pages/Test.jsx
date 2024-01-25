import { useState } from "react";

export default function Test() {
  const [inputValue, setInputValue] = useState('');
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-4">
      <input type="text" value={inputValue} placeholder="Cole o link do produto aqui..." className="w-96 input input-primary" onChange={({ target: { value } }) => setInputValue(value)} />
      <button onClick={() => window.location.href = `${inputValue}&tag=casamentolq-20`} className="btn btn-primary">IR PARA A LOJA</button>
    </div>
  )
}