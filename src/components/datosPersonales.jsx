import "../cssComponents/cssCompStyles.css"
import Messi from "../pictures/Messi.png"

function datosPersonales() {

    return(

        <div class="container">

            <div>
                <h1 class="Titulo"> Datos Personales </h1>
            </div>

            <div class="SeparadorSup"></div>
            
            <div class="row">

                <div className="col-md-2"></div>

                <div class="col-md-2 col-sm-4">
                    <img src = {Messi} class="fotoDP"/>
                </div>

                <div class="col-md-8 col-sm-8">
                    <div className="row">
                        <div class="col-md-5 col-sm-6">
                            <div class>
                                <h2 class="refContenidoDP"> Nombre </h2>
                                <h2 class="refContenidoDP"> Edad </h2>
                                <h2 class="refContenidoDP"> Email </h2>
                                <h2 class="refContenidoDP"> Localidad </h2>
                                <h2 class="refContenidoDP"> Telefono </h2>
                            </div>
                        </div>
                        <div class="col-md-5 col-sm-6">
                            <div>
                                <h2 class="ContenidoDP"> Facundo Camilotto </h2>    
                                <h2 class="ContenidoDP"> 23 años </h2>             
                                <h2 class="ContenidoDP"> facundo@gmail.com </h2>    
                                <h2 class="ContenidoDP"> Caballito </h2>            
                                <h2 class="ContenidoDP"> 11-22334455 </h2> 
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="SeparadorInf"></div>

        </div>

  );

}

export default datosPersonales;