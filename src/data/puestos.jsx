
export async function obtenerPuesto() {
    const url = 'http://localhost:3000/backend/puesto'
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    console.log(resultado)
    return resultado
}