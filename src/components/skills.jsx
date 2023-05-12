import Prueba from "../assets/pictures/prueba.png"
import "../cssComponents/cssCompStyles.css"
import LogoGit from "../assets/logos/gitLogo.png"
import LogoPy from "../assets/logos/pythonLogo.png"
import LogoJava from "../assets/logos/javaLogo.png"
import LogoMicrosoft from "../assets/logos/microsoftLogo.png"
import LogoReact from "../assets/logos/reactLogo.png"
import LogoSql from "../assets/logos/sqlLogo.png"


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
                        <img class="logo" src={LogoGit}></img>
                            Git
                        </h5>
                        <p class="card-text">Nivel: Principiante</p>
                        
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
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        
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
                        <p class="card-text">Nivel: Intermedio, con conocimiento en programacion orientada a objetos</p>
                        
                    </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">
                            <img class="logo" src={LogoReact}></img>
                            React JS
                        </h5>
                        <p class="card-text">Nivel: Principiante</p>
                        
                    </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">
                            <img class="logo" src={LogoMicrosoft}></img>
                            Pack Office
                        </h5>
                        <p class="card-text">Nivel: Intermedio</p>
                        <p class="card-text">Principalmente Excel, Word y PowerPoint</p>
                        
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
                        <p class="card-text">Nivel: Principiante</p>
                        
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