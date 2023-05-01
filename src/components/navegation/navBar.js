import React from 'react'
import {Link} from 'react-router-dom'

const navBar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Mi Curriculum</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto">

                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#">Info</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#">Estudios</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link">Experiencia</a>
                        </li>

                    </ul>

                    <form class="d-flex" role="search">
                        <button class="btn btn-outline-success" type="submit" formAction="../sites/pagLogIn.js">Contacto</button>
                    </form>
                </div>
            </div>
        </nav>
        
    </div>
  )
}

export default navBar