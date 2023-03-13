import React from 'react'
import { useNavigate, Form } from 'react-router-dom'
import Formulario from '../components/Formulario';

export function action(){
  console.log('Hola que hace');
}

const NuevoCliente = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>Nuevo cliente</h1>
      <p className='mt-3'>LLena todos los campos para añadir un cliente</p>

      <div className='flex justify-end'>
        <button className='bg-blue-800 text-white px-3 py-1 font-bold uppercase' onClick={()=>navigate('/')}>
          Volver
        </button>
      </div>
      <div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20'>
        <Form
          method='post'
        >
          <Formulario/>
          <input
            type="submit"
            className='mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg'
            value="Registrar Cliente"
          />
        </Form>
      </div>
    </>
  )
}

export default NuevoCliente