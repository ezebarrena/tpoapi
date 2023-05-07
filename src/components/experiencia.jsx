import React from 'react'
import "../cssComponents/cssCompStyles.css"

function experiencia(){
  return (
    <div className="col-md-12">
        <div className="container">
            <div class="SeparadorSup"></div>

            <div>
                <h1 class="Titulo"> Experiencia Laboral </h1>
            </div>  

            <div class="SeparadorSup"></div>

            <div class="BoxExperiencia">
                <div class="row">
                    <div class="col-md-6">
                        <h2 class="ContenidoE">Tecnico de Mesa de Ayuda</h2>
                        <a className="linkEmpresa" href="https://www.zoologic.com.ar/">Zoologic</a>
                        <p>1950-1970</p>
                        <p>Tecnico de Mesa de ayuda para el software Lince de la empresa Zoologic, donde atendia llamados de los diferentes clientes que tenian un problema o requerian una configuracion con el mismo</p>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}
export default experiencia
