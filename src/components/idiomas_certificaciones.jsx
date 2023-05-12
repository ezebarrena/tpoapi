import "../cssComponents/cssCompStyles.css"
import uba from "../assets/logoCerts/uba.png"
import accenture from "../assets/logoCerts/Accenture.png"

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
                        <img src = {accenture}/>
                        <div class="card-body">
                            <h3>Curso de Excel del programa ABC</h3>
                            <p>detalles sobre la certificacin</p>
                            <h5>Accenture</h5>
                            <h6>07/2019</h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card">
                        <img src = {uba}/>
                        <div class="card-body">
                            <h3>Curso de Python "Exactas Programa"</h3>
                            <p>detalles sobre la certificacin</p>
                            <h5>UBA</h5>
                            <h6>07/2019</h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card">  
                        <img src = {accenture}/>   
                        <div class="card-body">
                            <h3>Curso de Word del programa ABC</h3>
                            <p>detalles sobre la certificacin</p>
                            <h5>Accenture</h5>
                            <h6>f07/2019</h6>
                        </div>
                    </div>
                </div>
                   
            </div>

            <div class="SeparadorSupDP"></div>
            
        </div>


    );

}

export default idiomas_certificaciones;