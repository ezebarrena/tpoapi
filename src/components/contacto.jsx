import NavBar from "./navegation/navBar.js"
import "../layout/cssCompStyles.css"
import { useState, useEffect } from "react";
import getMensaje from "../api/mensajesGet.api"

function Contacto () {

    const accessToken = sessionStorage.getItem('access-token')
    const [mensajes, setMensajes] = useState([]);
    
    setTimeout(function(){
        window.location.reload();
    }, 300000);

    useEffect(() => {
        getMensaje(accessToken,setMensajes);
    }, [setMensajes,accessToken]);
    
    return(

        <div className="bg">
                   <div className="row">
            <div className="col md-4"></div>
            <div className="col md-4">

                <div class="divContacto"></div>

                <div className="BoxSignIn2">
                    <div>
    <                   h1 class="Titulo"> Contacto </h1>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Casilla de correo</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="nombre@ejemplo.com"></input>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Numero telefonico</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="54 011-2453-2352"></input>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Mensaje</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="boxSignInButtons">
                        <button type="submit" class="boton4">Enviar mensaje</button>

                    </div>
                </div>

                
            </div>
            <div className="col md-4"></div>
        </div> 
        </div>
    )
} 

export default Contacto; 