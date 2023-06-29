import "../layout/cssCompStyles.css"
import First from "../assets/logoCerts/first2.png"
import SN from "../assets/logoCerts/servicenow.jpg"
import ITIL from "../assets/logoCerts/itil.png"


function idiomas_certificaciones(){

    return(

        <div className="container">

            <h2 class="ContenidoE"> Idiomas </h2>

            <div class="SeparadorInt"></div>

            <div className="row">
                <div class="col-md-12" id="boxPills">
                    <div class="boxPills">
                        <div class="idiomasPill"><button className="boton3">Ingles Avanzado </button></div>
                        <div class="idiomasPill"><button className="boton3">Español nativo </button></div>
                    </div>
                </div>
            </div>


            <div class="SeparadorInf"></div>

            <h2 class="ContenidoE"> Certificaciones </h2>

            <div class="SeparadorSup"></div>

            <div className="row">
                <div className="col-md-4">
                    <div class="card">
                        <img src = {First} id="fotoCert"/>
                        <div class="card-body">
                            <h3>B2 First Certificate</h3>
                            <p>First Certificate in english, universidad de Cambridge. Marco Común Europeo.</p>
                            <h5>AACI</h5>
                            <h6>2018</h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card">
                        <img src = {SN} id="fotoCert"/>
                        <div class="card-body">
                            <h3>Certified SysAdmin</h3>
                            <p>Administrador de sistemas certificado para la plataforma ServiceNow</p>
                            <h5>ServiceNow</h5>
                            <h6>2023</h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card">  
                        <img src = {ITIL} id="fotoCert"/>   
                        <div class="card-body">
                            <h3>ITIL v4</h3>
                            <p>Buenas practicas y procedimientos estandarisados para ITSM, Service Management</p>
                            <h5>ITIL Fundation</h5>
                            <h6>2023</h6>
                        </div>
                    </div>
                </div>
                   
            </div>

            <div class="SeparadorSupDP"></div>
            
        </div>


    );

}

export default idiomas_certificaciones;