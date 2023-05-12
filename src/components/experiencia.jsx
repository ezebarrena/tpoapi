import React from 'react'
import "../cssComponents/cssCompStyles.css"
import ITBA from "../assets/logos/itba2.png"
import PWC from "../assets/logos/pwc.png"

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
                                <img class="logo" src={ITBA}></img>
                                    Analista mesa de ayuda
                                </h6>
                                <a className="linkEmpresa" href="https://www.itba.edu.ar/" target="_blank">ITBA</a>
                                <h6 className="yearLaburo">2022</h6>
                                <p class="card-text">Analista de Mesa de ayuda en Instituto Tecnologico de Buenos Aires. Se trabaja para docentes y alumnos de la institucion. Tareas de Help desk e incident management</p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title2">
                                <img class="logo" src={PWC}></img>
                                    ServiceNow developer - Advisory CD&E
                                </h6>
                                <a className="linkEmpresa" href="https://www.pwc.com.ar/" target="_blank">PwC</a>
                                <h6 className="yearLaburo">2022 - actualidad</h6>
                                <p class="card-text">SysAdmin y desarrollador en plataforma ServiceNow (aPaas) para la practica de consultoria en CyberDefence & Engineering para clientes de Estados Unidos y el resto del mundo. Back-End y Front-End. integraciones</p>
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
