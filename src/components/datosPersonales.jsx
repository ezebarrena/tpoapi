import "../layout/cssCompStyles.css"
import Perfil from "../assets/pictures/fotoDP.png"

function datosPersonales() {

    return(

        <div class="container" id="dp">
            
            <div class="SeparadorInf"></div>

            <div>
                <h1 class="Titulo"> Datos personales </h1>
            </div>

            <div class="SeparadorInt2"></div>
            
            <div class="row">

                <div class="col-md-12 col-12">
                    <div className="row">
                        <div class="col-md-6 col-6">
                            <div class>
                                <h2 class="refContenidoDP"> Nombre </h2>
                                <h2 class="refContenidoDP"> Edad </h2>
                                <h2 class="refContenidoDP"> Email </h2>
                                <h2 class="refContenidoDP"> Localidad </h2>
                                <h2 class="refContenidoDP"> Telefono </h2>
                                <h2 class="refContenidoDP"> Nacionalidad </h2>
                            </div>
                        </div>
                        <div class="col-md-6 col-6">
                            <div>
                                <h2 class="ContenidoDP"> Facundo Camilotto </h2>    
                                <h2 class="ContenidoDP"> 23 años </h2>             
                                <h2 class="ContenidoDP"> facucam@gmail.com </h2>    
                                <h2 class="ContenidoDP"> Gran Buenos Aires </h2>            
                                <h2 class="ContenidoDP"> 11-3122-5717 </h2> 
                                <h2 class="ContenidoDP"> Argentina </h2> 

                            </div>
                        </div>
                    </div>
                    
                 
                </div>
    
            </div>

            <div class="SeparadorInf"></div>

            <div class="row">

                <div class="col-md-2 col-12">
                </div>
                <div class="col-md-8 col-12">
                    <p id="textoDescripcion">
                        Me llamo Facundo, siempre me apaciono el mundo de la Tecnologia y eso me impuso a estudiar la ingeniera en informatica. donde aprendi la mayoria de los conocimientos que hoy domino. Actualmente trabajando en una consultora Internacional. Hincha de Boca Juniors
                    </p>
                </div>
                <div class="col-md-2 col-12">
                </div>

            </div>

            <div class="SeparadorInf"></div>

        </div>

  );

}

export default datosPersonales;