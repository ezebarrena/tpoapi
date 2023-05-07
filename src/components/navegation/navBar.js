import React from 'react';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
const navBar = () => {

    function signin(){
        return(
            window.location.href = '/signin'
        )
      }
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Mi Curriculum</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">

                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Inicio</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Info</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Estudios</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link">Experiencia</a>
                        </li>

                    </ul>
                    <button onClick={signin} className="btn btn-outline-success" type="submit" >Contacto</button>
                    <form className="d-flex" role="search" >
                    </form>
                </div>
            </div>
        </nav>
        
    </div>
  )
}

export default navBar