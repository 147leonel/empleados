import {useLoaderData} from 'react-router-dom'
import Empleado from './Empleado'
import {obtenerEmpleados} from '../data/empleados'

export function loader(){
    const empleados = obtenerEmpleados()
    return empleados
}

function Index() {

    const empleados = useLoaderData()
  return (
    <>
        <h1 className="font-black text-4xl text-green-950">Empleados</h1>
        <p className="mt-3">Administra tus empleados</p>
        {empleados.length ? (
            <table className="w-full text-center bg-white shadow mt-5 table-auto">
                <thead>
                    <tr>
                        <th className="p-2">Nombre</th>
                        <th className="p-2">Contacto</th>
                        <th className="p-2">Fecha de nacimiento</th>
                        <th className="p-2">Puesto</th>
                        <th className="p-2">Acciones</th>
                    </tr>
                    </thead>
                    <tbody>
                        {empleados.map(empleado =>(
                            <Empleado
                                empleado={empleado}
                                key={empleado.id}
                            />
                        ))}
                    </tbody>

            </table>

        ):(
            <p className="text-center mt-10">No tienes empleados</p>
        )}
    </>
  )
}

export default Index