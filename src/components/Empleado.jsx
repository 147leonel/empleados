function Empleado({empleado}) {
    const {Nombre, Direccion, Telefono, Fecha_nacimiento, id_Puesto} = empleado
  return (
    <tr className="border-b">
        <td className="p-5">
            {Nombre}
        </td>
        <td className="p-5">
            <p className="text-gray-600"><span className="text-gray-800 uppercase font-bold">Direccion: </span>{Direccion}</p>
            <p className="text-gray-600"><span className="text-gray-800 uppercase font-bold">Telefono: </span>{Telefono}</p>
        </td>
        <td className="p-5">
            <p>{Fecha_nacimiento}</p>
        </td>
        <td className="p-5">
            <p>{id_Puesto}</p>
        </td>
        <td className="p-6 flex gap-3 justify-center">
            <button
                type="button"
                className="text-blue-600 hover:text-blue-800 uppercase font-bold text-xs"
            >
                Editar
            </button>

            <button
                type="button"
                className="text-red-600 hover:text-red-800 uppercase font-bold text-xs"
            >
                Eliminar
            </button>
        </td>
    </tr>
  )
}

export default Empleado