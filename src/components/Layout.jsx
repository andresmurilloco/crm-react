import { Outlet, Link, useLocation } from "react-router-dom"

const Layout = () => {
const location = useLocation();

  return (
    <div className='md:flex md:min-h-screen'>
      <aside className='md:w-1/4 bg-blue-900 px-5 py-10'>
        <h2 className="text-4xl font-black text-center text-white">CRM - Clientes</h2>
        <Link className={`${location.pathname === '/' ? ' text-blue-300' : 'text-white'} text-2xl block hover:text-blue-300`} to='/'>Clientes</Link>
        <Link className={`${location.pathname === '/clientes/nuevo' ? ' text-blue-300' : 'text-white'} text-2xl block hover:text-blue-300`} to='/clientes/nuevo'>Nuevo cliente</Link>
      </aside>
      <div className='md:w-3/4 p-10 md:h-screen overflow-scroll'>
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout