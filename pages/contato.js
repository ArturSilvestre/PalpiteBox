import React from 'react';
import PageTitle from '../components/PageTitle';

const Contato = () => {
  return (
    <>
      <PageTitle title="Contato" />
      <main className='conatiner flex flex-col justify-center items-center p-24'>
        <h3 className='text-center font-bold my-4 text-2xl'>What is Lorem Ipsum?</h3>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
        galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        </p>
      </main>
    </>
  )

}

export default Contato;