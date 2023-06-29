import "../layout/cssCompStyles.css"


function estudios() {

    return(

        <div class="degradado" >

            <div className="container" id="est">

                <div class="SeparadorSupDP"></div>

                <div>
                    <h1 class="Titulo"> Estudios </h1>
                </div>  

                <div class="SeparadorSup"></div>

                <div class="BoxEstudios">
                    <div class="row">
                        <div class="col-md-6">
                            <h2 class="ContenidoEstudio">Institulo Madre del Buen Consejo</h2>
                            <h5>Educacion nivel primaria y secundaria</h5>
                            <p>2006 - 2017</p>
                        </div>
                        <div class="col-md-6">
                            <h2 class="ContenidoEstudio">Universidad Argentina de la Empresa</h2>
                            <h5>Ingeniera Informatica - Carrera de Grado</h5>
                            <p>2019 - actualidad</p>
                        </div>
                    </div>
                </div>

            </div>

            <div class="SeparadorSupDP"></div>

        </div>

        
            
  );

}

export default estudios;