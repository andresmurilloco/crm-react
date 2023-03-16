import React from 'react'
import { obtenerCliente, ActualizarCliente } from '../data/clientes';
import { Form, useNavigate, useLoaderData, useActionData, redirect } from 'react-router-dom';
import Formulario from '../components/Formulario';
import Error from '../components/Error';

export async function loader({params}){
    const cliente = await obtenerCliente(params.clienteId);
    if(Object.values(cliente).length == 0){
        throw new Response ('',{
            status: 404,
            statusText: 'No se encuentra la pagina'
        })
    }
    return cliente;
}

export async function action({request, params}){
    const formData = await request.formData();
    const datos = Object.fromEntries(formData);
    const email = formData.get('email');
    const errores = [];
    //Valida si el form está vacío
    if(Object.values(datos).includes('')){
      errores.push('Todos los campos son obligatorios')
    }
    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
  
    if(!regex.test(email)){
      errores.push('El email no es valido');
    }
  
    //Retorna el error.
    if(Object.keys(errores).length){
      return errores;
    }
    //Actualizar cliente
    await ActualizarCliente(params.clienteId, datos);
    console.log(params);
  
    return redirect('/');
  }

const EditarCliente = () => {
    const cliente = useLoaderData();
    const navigate = useNavigate();
    const errores = useActionData();

  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>Editar cliente</h1>
      <p className='mt-3'>Acontinuación podrás editar un usuario</p>

      <div className='flex justify-end'>
        <button className='bg-blue-800 text-white px-3 py-1 font-bold uppercase' onClick={()=>navigate('/')}>
          Volver
        </button>
      </div>
      <div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20'>
        {errores?.length && errores.map((error, i ) => <Error key={i}>{error}</Error>)}
        <Form
          method='post'
          noValidate
        >
          <Formulario cliente = {cliente}/>
          <input
            type="submit"
            className='mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg'
            value="Actualizar Cliente"
          />
        </Form>
      </div>
    </>
  )
}

export default EditarCliente