import "../cssComponents/cssCompStyles.css"
import Prueba from "../assets/pictures/prueba.png"

function idiomas_certificaciones(){

    return(

        <div className="container">

            <h2 class="ContenidoE"> Idiomas </h2>

            <div class="SeparadorInt"></div>

            <div className="row">
                <div class="col-md-11">
                    <div class="idiomasPill"><button className="boton3">Español Nativo </button></div>
                    <div class="idiomasPill"><button className="boton3">Ingles Avanzado </button></div>
                    <div class="idiomasPill"><button className="boton3">Frances Principiante </button></div>
                    <div class="idiomasPill"><button className="boton3">Portugues Principiante </button></div>
                </div>
            </div>


            <div class="SeparadorInf"></div>

            <h2 class="ContenidoE"> Certificaciones </h2>

            <div class="SeparadorSup"></div>

            <div className="row">
                <div className="col-md-4">
                    <div class="card">
                        <img id="fotoCert" src = {Prueba}/>
                        <div class="card-body">
                            <h3>Certificacion</h3>
                            <p>detalles sobre la certificacin</p>
                            <h5>Empresa</h5>
                            <h6>fecha de certificacion</h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card">
                        <img id="fotoCert" src = {Prueba}/>
                        <div class="card-body">
                            <h3>Certificacion</h3>
                            <p>detalles sobre la certificacin</p>
                            <h5>Empresa</h5>
                            <h6>fecha de certificacion</h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card">  
                        <img id="fotoCert" src = {Prueba}/>   
                        <div class="card-body">
                            <h3>Certificacion</h3>
                            <p>detalles sobre la certificacin</p>
                            <h5>Empresa</h5>
                            <h6>fecha de certificacion</h6>
                        </div>
                    </div>
                </div>
                   
            </div>

            <div class="SeparadorSupDP"></div>
            
        </div>


    );

}

export default idiomas_certificaciones;