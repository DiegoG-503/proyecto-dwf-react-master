import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>Tienda Kodigo</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav mx-auto">
                    <Link className="nav-link active" aria-current="page" to='/'>Inicio</Link>
                    <Link className="nav-link" to='/storeGames'>Videojuegos</Link>
                    <Link className="nav-link" to='/storeBooks'>Libros</Link>
                </div>
                </div>
            </div>
            </nav>
    </div>
  )
}

export default Navbar