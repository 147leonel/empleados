export async function obtenerEmpleados() {
    const url = 'http://localhost:3000/backend/empleado'
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    console.log(resultado)
    return resultado
}
