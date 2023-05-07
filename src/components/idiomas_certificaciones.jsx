import "../cssComponents/cssCompStyles.css"
import Prueba from "../assets/pictures/prueba.png"

function idiomas_certificaciones(){

    return(

        <div className="container">
            <div className="row">
                <div class="col-md-2">
                    <h2 class="ContenidoE"> Idiomas </h2>
                </div>
                <div class="col-md-8">
                        <div class="idiomasPill"><span class="badge rounded-pill text-bg-primary"><h4> Ingles Avanzado </h4></span></div>
                        <div class="idiomasPill"><span class="badge rounded-pill text-bg-primary"><h4> Chino basico </h4></span></div>
                        <div class="idiomasPill"><span class="badge rounded-pill text-bg-primary"><h4> Frances Intermedio </h4></span></div>
                </div>
            </div>

            <div class="SeparadorInf"></div>

            <h2 class="ContenidoE"> Certificaciones </h2>

            <div class="SeparadorSup"></div>

            <div className="row">
                <div className="col-md-4">
                    <div class="card">
                        <img src = {Prueba}/>
                        <div class="card-body">
                            <h3>Certificacion</h3>
                            <p class="card-text">detalles sobre la certificacin</p>
                            <h5>Empresa</h5>
                            <h6>fecha de certificacion</h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card">
                        <img src = {Prueba}/>
                        <div class="card-body">
                            <h3>Certificacion</h3>
                            <p class="card-text">detalles sobre la certificacin</p>
                            <h5>Empresa</h5>
                            <h6>fecha de certificacion</h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card">  
                        <img src = {Prueba}/>   
                        <div class="card-body">
                            <h3>Certificacion</h3>
                            <p class="card-text">detalles sobre la certificacin</p>
                            <h5>Empresa</h5>
                            <h6>fecha de certificacion</h6>
                        </div>
                    </div>
                </div>
                   
            </div>

            <div class="SeparadorInf"></div>
            
        </div>


    );

}

export default idiomas_certificaciones;