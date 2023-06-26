import "../layout/cssCompStyles.css"
import Perfil from "../assets/pictures/fotoDP.png"

function datosPersonales() {

    return(

        <div class="container" id="dp">
            
            <div class="SeparadorSupDP"></div>

            <div>
                <h1 class="Titulo"> Datos Personales </h1>
            </div>

            <div class="SeparadorSup"></div>
            
            <div class="row">

               

                <div class="col-md-4 col-8">
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <img src = {Perfil} class="fotoDP"/>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                    
                </div>

                <div class="col-md-8 col-12">
                    <div className="row">
                        <div class="col-md-5 col-6">
                            <div class>
                                <h2 class="refContenidoDP"> Nombre </h2>
                                <h2 class="refContenidoDP"> Edad </h2>
                                <h2 class="refContenidoDP"> Email </h2>
                                <h2 class="refContenidoDP"> Localidad </h2>
                                <h2 class="refContenidoDP"> Telefono </h2>
                                <h2 class="refContenidoDP"> Nacionalidad </h2>
                            </div>
                        </div>
                        <div class="col-md-5 col-6">
                            <div>
                                <h2 class="ContenidoDP"> Facundo Camilotto </h2>    
                                <h2 class="ContenidoDP"> 23 años </h2>             
                                <h2 class="ContenidoDP"> facucam@gmail.com </h2>    
                                <h2 class="ContenidoDP"> Lomas del Mirador </h2>            
                                <h2 class="ContenidoDP"> 11-3122-5717 </h2> 
                                <h2 class="ContenidoDP"> argentino </h2> 

                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="SeparadorSup"></div>

        </div>

  );

}

export default datosPersonales;