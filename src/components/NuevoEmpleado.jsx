import Formulario from "./Formulario"
function NuevoEmpleado() {
  return (
    <>
        <h1 className="font-black text-4xl text-green-950">Nuevo empleado</h1>
        <p className="mt-3">Agrega tus empleados</p>
        <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10">
          <form >
            <Formulario/>
            <input 
              type="submit"
              className="mt-5 w-full bg-green-900 uppercase text-white text-lg p-3"
              value="Registrar"
            />
          </form>
        </div>
    </>
  )
}

export default NuevoEmpleado