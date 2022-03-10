import React from 'react';
import Link from 'next/link';

const Index = () => {
  return (
    <>
      <main className='conatiner flex flex-col justify-center items-center p-24'>
        <p className='mb-10'>
          O restaurante X sempre busca atender melhor seus clientes. <br />
          Por isso, estamos sempre abertos a ouvir a sua opiniao. 
        </p>
        <Link href="/pesquisa" className="mt-10 mb-8">
          <a className='btn bg-blue-400 px-12 py-4 font-bold rounded hover:shadow shadow-lg'>
            Dar opinião ou sugestão
          </a>
        </Link>
        <p className='mt-10'>
          Mensagem do Desconto
        </p>
      </main>
    </>
  )
}
export default Index;
