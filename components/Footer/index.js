import React from 'react';

const Footer = () => {
  return (
    <div className='bg-gray-700 p-6 flex justify-center'>
      <div className='container flex flex-col justify-center items-center font-bold text-white'>
        Projeto desenvolvido por: Artur Silvestre
        <div className='flex justify-center items-center space-x-12 mt-2'>
          <img src="/logo_semana_fsm.png" alt="" srcset="" />
          <img src="/logo_devpleno.png" alt="" srcset="" />
        </div>
      </div>
    </div>
  )
}
export default Footer;