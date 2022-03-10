import React from "react";
import Link from "next/link";

const Pesquisa = () => {
  return (
    <>
      <main className="container flex flex-col justify-center items-center p-6">
        <h1 className="font-bold text-2xl my-4">Críticas e sugestões</h1>
        <p>
          O restaurante X sempre busca por atender melhor seus clientes.
        </p>
        <p>
          Por isso, estamos sempre abertos a ouvir a sua opnião.
        </p>
        <form className="w-1/5 mt-6">
          <label className="font-bold">Seu nome:</label>
          <input type="text" className="p-2 block shadow bg-blue-100 m-2 rounded"/>

          <label className="font-bold">Email:</label>
          <input type="text" className="p-2 block shadow bg-blue-100 m-2 rounded"/>

          <label className="font-bold">WhatsApp:</label>
          <input type="text" className="p-2 block shadow bg-blue-100 m-2 rounded"/>

          <label className="font-bold">Sua crítica ou sugestão:</label>
          <input type="text" className="p-2 block shadow bg-blue-100 m-2 rounded"/>

          <label className="font-bold">Qual nota você daria para o estabelecimento:</label>
          <fieldset className="flex flex-row">
            <input type="radio" name="1" value="1" className="p-2 block shadow bg-blue-100 m-2 rounded"/>
            <input type="radio" name="2" value="2" className="p-2 block shadow bg-blue-100 m-2 rounded"/>
            <input type="radio" name="3" value="3" className="p-2 block shadow bg-blue-100 m-2 rounded"/>
            <input type="radio" name="4" value="4" className="p-2 block shadow bg-blue-100 m-2 rounded"/>
            <input type="radio" name="5" value="5" className="p-2 block shadow bg-blue-100 m-2 rounded"/>
          </fieldset>

          <label className="font-bold">Você indicaria para um amigo ?</label>
          <fieldset className="flex flex-row">
            <input type="radio" name="sim" value="sim" className="p-2 block shadow bg-blue-100 m-2 rounded"/>
            <input type="radio" name="nao" value="nao" className="p-2 block shadow bg-blue-100 m-2 rounded"/>
          </fieldset>

          <button type="submit" className="btn bg-blue-400 p-4 font-bold rounded hover:shadow shadow-lg">
            Enviar crítica ou sugestão  
          </button>
        </form>
      </main>
    </>
  )
}

export default Pesquisa;