import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error.message);

  return (
    <>
        <h2 className="text-4xl font-black text-center text-blue-800">CRM - Clientes</h2>
        <div className=" bg-red-600 mt-2">
          <p className="text-center text-white font-bold text-lg ">Hubo un error</p>
          <p className="text-center text-white font-bold">{error.statusText || error.message}</p>
        </div>
    </>
  )
}

export default ErrorPage