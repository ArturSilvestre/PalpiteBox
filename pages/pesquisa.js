import React, { useState } from 'react'

const Pesquisa = () => {
  const [form, setForm] = useState({
    Nome: '',
    Email: '',
    WhatsApp: '',
    Critica: '',
    Nota: 5
  });
  const notas = [0, 1, 2, 3, 4, 5];
  const [sucess, setSuccess] = useState(false)
  const [retorno, setRetorno] = useState({})
  const save = async () => {
    
    try {
      const response = await fetch('/api/save', {
        method: 'POST',
        body: JSON.stringify(form)
      })
      const data = await response.json()
      setSuccess(true)
      setRetorno(data)
    } catch (err) {
    }
  }
  const onChange = evt => {
    const value = evt.target.value
    const key = evt.target.name
    setForm(old => ({
      ...old,
      [key]: value
    }))
  }
  return (
    <div className='pt-6 flex flex-col justify-center items-center'>
      <h1 className='text-center font-bold my-4 text-2xl'>Críticas e sugestões</h1>
      <p> O restaurante X sempre busca por atender melhor seus clientes.</p>
      <p>Por isso, estamos sempre abertos a ouvir a sua opinião.</p>
      
      { !sucess && <div className='w-1/5  '>
        <label className='font-bold'>Seu nome:</label>
        <input 
          type='text' 
          className='p-4 block shadow bg-blue-100 my-2 rounded' placeholder='Nome' 
          onChange={onChange} name='Nome' value={form.Nome} 
        />
        <label className='font-bold'>E-mail:</label>
        <input 
          type='text' 
          className='p-4 block shadow bg-blue-100 my-2 rounded' placeholder='Email' 
          onChange={onChange} name='Email' value={form.Email} 
        />
        <label className='font-bold'>Whatsapp:</label>
        <input 
          type='text' 
          className='p-4 block shadow bg-blue-100 my-2 rounded' placeholder='WhatsApp' 
          onChange={onChange} name='WhatsApp' value={form.WhatsApp} 
        />

        <label className='font-bold'>Sugestão ou crítica:</label>
        <input
          type="area"
          className='p-4 block shadow bg-blue-100 my-2 rounded'  
          onChange={onChange} name='Critica' placeholder='Descreva sua sugestão ou crítica aqui!' value={form.Critica}
        />

        <label className='font-bold'>Nota:</label>
        <div className='flex mb-4'>
          { notas.map(nota => {
            return (
              <label className='block w-1/6 text-center'>
                {nota} <br />
                <input type="radio" name="Nota" value={nota}/>
              </label>) 
            })
          }    
        </div>
        <button className='bg-blue-400 px-12 py-4 mb-6 font-bold rounded-lg shadow-lg hover:shadow' onClick={save}>Salvar</button>
      </div> }
      
      { sucess && <div className='w-1/5 flex flex-col justify-center items-center mt-4'>
        <p className='bg-blue-100 border-t border-blue-500 text-blue-700 px-4 py-3'>
          Obrigado por contribuir com sua sugestão ou crítica.
        </p>
        {
          retorno.showCoupon && <div className='flex flex-col justify-center items-center border p-4 mt-4 mb-4'>
            Seu cupom: <br />
            <span className='font-bold text-2xl'>{retorno.Cupom}</span>
          </div>
        }
        <p className='text-center bg-red-100 border-t border-red-500 text-red-600 px-4 py-3'>
          Tire um pirnt ou foto desta tela e apresente ao realizar o pagamento.
        </p>
        {
          retorno.showCoupon && <div className='flex flex-col justify-center items-center border p-4 mt-4 mb-4'>
            Da Promo: <br />
            <span className='font-bold block mb-2'>{retorno.Promo}</span>
          </div>
        }
      </div> }
    </div>
  )
}
export default Pesquisa