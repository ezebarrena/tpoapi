import "../cssComponents/cssCompStyles.css"


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
                            <h2 class="ContenidoE">Riverside School</h2>
                            <h5>Bachillerato con orientacion en sociales</h5>
                            <p>2013 - 2018</p>
                        </div>
                        <div class="col-md-6">
                            <h2 class="ContenidoE">Universidad Argentina de la Empresa</h2>
                            <h5>Ingeniera Informatica - Carrera de Grado</h5>
                            <p>2019 - Presente</p>
                        </div>
                    </div>
                </div>

            </div>

            <div class="SeparadorInf"></div>

        </div>

        
            
  );

}

export default estudios;