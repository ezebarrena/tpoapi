import Prueba from "../assets/pictures/prueba.png"
import "../cssComponents/cssCompStyles.css"
import LogoGit from "../assets/logos/git.png"
function skills () {
    return (
        <div className="container">
            <h2 class="ContenidoE">Skills</h2>
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
                            <h5 class="card-title">Python</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Java</h5>
                        <p class="card-text">Nivel: Intermedio, con conocimiento en programacion orientada a objetos</p>
                        
                    </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">React JS</h5>
                        <p class="card-text">Nivel: Principiante</p>
                        
                    </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Pack Office</h5>
                        <p class="card-text"></p>
                        
                    </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">SQL</h5>
                        <p class="card-text"></p>
                        
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default skills;