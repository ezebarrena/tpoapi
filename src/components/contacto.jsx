import NavBar from "./navegation/navBar.js"
import "../cssComponents/cssCompStyles.css"

function contacto () {
    return(
        <div className="row">
            <div className="col md-4"></div>
            <div className="col md-4">
                <div class="SeparadorSupDP"></div>

                <div>
    <               h1 class="Titulo"> Datos Personales </h1>
                </div>

                <div class="SeparadorSup"></div>

                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Casilla de correo</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Mensaje</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </div>
            <div className="col md-4"></div>
        </div>
    )
} 

export default contacto; 