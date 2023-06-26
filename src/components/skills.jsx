import Prueba from "../assets/pictures/prueba.png"
import "../layout/cssCompStyles.css"
import LogoGit from "../assets/logos/gitLogo.png"
import LogoPy from "../assets/logos/pythonLogo.png"
import LogoJava from "../assets/logos/javaLogo.png"
import LogoSN from "../assets/logos/sn.png"
import LogoReact from "../assets/logos/reactLogo.png"
import LogoSql from "../assets/logos/sqlLogo.png"
import LogoWEB from "../assets/logos/web.png"
import LogoMongo from "../assets/logos/mongo.png"
import LogoUML from "../assets/logos/uml.png"
import LogoDev from "../assets/logos/dev.png"
import LogoVisual from "../assets/logos/visual.png"
import LogoCura from "../assets/logos/cura.png"


function skills () {
    return (
        
        <div className="boxSkills" id="skills">
          <div className="container">
            <div className="SeparadorSupDP"></div>
            <h2 class="Titulo2">Skills</h2>
            <div class="row">

            <div class="col-md-4">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">
                            <img class="logo" src={LogoDev}></img>
                            Front & Back Dev
                        </h5>
                        <p class="card-text">Conocimientos medios</p>
                        
                    </div>
                    </div>
            </div>
                
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">
                            <img class="logo" src={LogoPy}></img>
                                Python
                            </h5>
                            <p class="card-text"> Conocimientos medios</p>
                        
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">
                        <img class="logo" src={LogoJava}></img>
                            Java
                        
                        </h5>
                        <p class="card-text">Conocimientos medios, POO</p>
                        
                    </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">
                            <img class="logo" src={LogoSN}></img>
                            ServiceNow
                        </h5>
                        <p class="card-text">SysAdmin level</p>
                        
                    </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">
                            <img class="logo" src={LogoSql}></img>
                            SQL
                        </h5>
                        <p class="card-text">SQL Server - Conocimienos basicos</p>
                        
                    </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">
                            <img class="logo" src={LogoWEB}></img>
                            Desarrollo Web
                        </h5>
                        <p class="card-text">HTML - JS - CSS Conocimientos basicos</p>
                        
                    </div>
                    </div>
                </div>
                <div class="col-md-2 col-sm-4 col-6">
                    <div class="card">
                    <div class="card-body">
                        <h7 class="card-title">
                            <img class="logo" src={LogoMongo}></img>
                            Mongo
                        </h7>
                        
                    </div>
                    </div>
                </div>

                <div class="col-md-2 col-sm-4 col-6">
                    <div class="card">
                    <div class="card-body">
                        <h7 class="card-title">
                            <img class="logo" src={LogoUML}></img>
                            UML
                        </h7>                        
                    </div>
                    </div>
                </div>

                <div class="col-md-2 col-sm-4 col-6">
                    <div class="card">
                    <div class="card-body">
                        <h7 class="card-title">
                            <img class="logo" src={LogoReact}></img>
                            ReactJS
                        </h7>                        
                    </div>
                    </div>
                </div>

                <div class="col-md-2 col-sm-4 col-6">
                    <div class="card">
                    <div class="card-body">
                        <h7 class="card-title">
                        <img class="logo" src={LogoGit}></img>
                            Git
                        </h7>                        
                    </div>
                    </div>
                </div>

                <div class="col-md-2 col-sm-4 col-6">
                    <div class="card">
                    <div class="card-body">
                        <h7 class="card-title">
                        <img class="logo" src={LogoVisual}></img>
                            Visual
                        </h7>                        
                    </div>
                    </div>
                </div>

                <div class="col-md-2 col-sm-4 col-6">
                    <div class="card">
                    <div class="card-body">
                        <h7 class="card-title">
                        <img class="logo" src={LogoCura}></img>
                            Cura
                        </h7>                        
                    </div>
                    </div>
                </div>

            </div>

            <div class="SeparadorSup"></div>

        </div>  
        </div>
    )
}

export default skills;