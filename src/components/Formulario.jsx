import { obtenerPuesto } from "../data/puestos"
import {useLoaderData} from 'react-router-dom'
import Empleado from "./Empleado"
import {useState, useEffect} from "react"

export function loader(){
    const puestos = obtenerPuesto()
    return puestos
}
const Formulario = ({empleado}) => {
    const puestos = useLoaderData()
    return (
        <>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="nombre"
                >Nombre: </label>
                <input 
                    id="nombre"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Nombre del empleado"
                    name="nombre"
                />
            </div>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="empresa"
                >Direccion:</label>
                <input 
                    id="direccion"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Direccion del empleado"
                    name="direccion"
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="telefono"
                >Teléfono:</label>
                <input 
                    id="telefono"
                    type="tel"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Teléfono del Cliente"
                    name="telefono"
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="fecha_nacimiento"
                >Fecha de nacimiento:</label>
                <input 
                    id="fecha_nacimiento"
                    type="date"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Fecha de nacimiento"
                    name="fecha_nacimiento"
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="puesto"
                >Puesto:</label>
                <select name="puesto" id="puesto">
                    {puestos.map(puesto =>(
                            <option 
                            key={puesto.id_Puesto} 
                            value={puesto.id_puesto}>
                                {puesto.Puesto}
                            </option>
                    ))}
                </select>
            </div>
        </>
    )
}

export default Formulario