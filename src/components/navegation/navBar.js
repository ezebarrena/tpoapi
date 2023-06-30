import React from 'react';
import {Link} from 'react-router-dom';
/*
import { useNavigate } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
*/
const navBar = () => {

    function login(){
        return(
            window.location.href = '/login'
        )
      }
    function contactar(){
        return(
            window.location.href = '/contacto'
        )
    }
    function admin(){
        return(
            window.location.href ='/admin'
        )
    }
  return (
    <div>
        <nav id="navBar" className="navbar navbar-expand-lg navbar-dark bg-dark" >
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Mi Curriculum</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">

                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/#intro" target="http://localhost:3000">Introducción</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/#dp" target="http://localhost:3000">Datos Personales</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/#skills" target="http://localhost:3000">Skills</a>
                        </li>                     

                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/#est" target="http://localhost:3000">Estudios</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/#exp" target="http://localhost:3000">Experiencia</a>
                        </li>

                    </ul>
                    <button onClick={contactar} className="btn btn-outline-light" type="submit" id="botonContacto">Contacto</button>
                    <button onClick={login} className="btn btn-outline-light" type="submit" id="botonAdmin">Tools</button>
                    
                </div>
            </div>
        </nav>
        
    </div>
  )
}

export default navBar