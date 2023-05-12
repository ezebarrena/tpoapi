import React from 'react'
import "../cssComponents/cssCompStyles.css"
import Zoologic from "../assets/logos/zoo.png"

function experiencia(){
  return (
    <div className="degradado">
        <div className="container" id="exp">
            <div class="SeparadorSupDP"></div>

            <div>
                <h1 class="Titulo"> Experiencia Laboral </h1>
            </div>  

            <div class="SeparadorInt"></div>

            <div class="BoxExperiencia">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title2">
                                <img class="logo" src={Zoologic}></img>
                                    Tecnico Mesa de Ayuda
                                </h6>
                                <a className="linkEmpresa" href="https://www.zoologic.com.ar/" target="_blank">Zoologic</a>
                                <h6 className="yearLaburo">1950-1970</h6>
                                <p class="card-text">Tecnico de Mesa de ayuda para el software Lince de la empresa Zoologic, donde atendia llamados de los diferentes clientes que tenian un problema o requerian una configuracion con el mismo</p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title2">
                                <img class="logo" src={Zoologic}></img>
                                    Tecnico Mesa de Ayuda
                                </h6>
                                <a className="linkEmpresa" href="https://www.zoologic.com.ar/" target="_blank">Zoologic</a>
                                <h6 className="yearLaburo">1950-1970</h6>
                                <p class="card-text">Tecnico de Mesa de ayuda para el software Lince de la empresa Zoologic, donde atendia llamados de los diferentes clientes que tenian un problema o requerian una configuracion con el mismo</p>
                            </div>
                        </div>
                        
                    </div>
                    </div>
                    
                </div>
            </div>

            <div class="SeparadorSup"></div>

        </div>
    
  )
}
export default experiencia
