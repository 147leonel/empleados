import {Outlet, Link, useLocation} from 'react-router-dom'
import IconoNuevo from '../img/nuevo-gasto.svg'

function Layout() {
    const location = useLocation()

  return (
    <div className="md:flex md:min-h-screen">
        <aside className="md:w-1/4 bg-green-950 px-5 py-10">
            <h2 className="text-3xl font-black text-center text-white ">147Empresa</h2>
            <nav className="mt-10">
                <Link className={`${location.pathname === '/' ? 'text-green-500' : 'text-white'} text-2xl block mt-2 hover:text-green-500 text-white`} to="/">Empleados</Link>
                <Link className={`${location.pathname === '/empleado/nuevo' ? 'text-green-500' : 'text-white'} text-2xl block mt-2 hover:text-green-500 text-white`} to="/empleado/nuevo">Nuevo</Link>
            </nav>
        </aside>
        <main className="md:w-3/4 p-10 md:h-screen overflow-scroll">
            <Outlet/>
            
        </main>
    </div>
  )
}

export default Layout