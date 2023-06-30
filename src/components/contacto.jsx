
import "../layout/cssCompStyles.css"
import { useHistory } from "react-router-dom";
import React, {useState, useEffect} from 'react'
import postMensaje from "../api/mensajesPost.api.js"
import Swal from 'sweetalert2';

const Contacto = () => {

    const accessToken = sessionStorage.getItem('access-token')
    //const [mensajes, setMensajes] = useState([]);
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [numero, setNumero] = useState('');
    const [texto, setTexto] = useState('');
    const enviado = Boolean; //

    const navigate = useHistory();
    
    setTimeout(function(){
        window.location.reload();
    }, 300000);

    
    const mostrarMensaje =()=>{ //
        Swal.fire({
            icon: 'success',
            title: 'mensaje enviado satisfactoriamente',
          })
    }

    const handleSubmit = async (e) => {
        enviado = true; //
        console.log("PROBANDOOO 1")
        e.preventDefault();
        console.log("PROBANDOOO 2")

        let response = await postMensaje(nombre,email,numero,texto);
        console.log("PROBANDOOO 3")
        console.log(response)
        console.log("Guardo el token en sessionStorage")
        sessionStorage.setItem("access-token",response.token);

        navigate("/")
    }

    useEffect(() => { //
        if(enviado == true){
            mostrarMensaje();
        };
    },[]);
    

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
                        <form onSubmit={handleSubmit}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Nombre y apellido</label>
                                <input type="string" class="form-control" id="exampleFormControlInput1" require value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Juan Perez"></input>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Casilla de correo</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" require value={email} onChange={(e) => setEmail(e.target.value)} placeholder="nombre@ejemplo.com"></input>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Numero telefonico</label>
                                <input type="string" class="form-control" id="exampleFormControlInput1" require value={numero} onChange={(e) => setNumero(e.target.value)} placeholder="011-2453-2352"></input>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Mensaje</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" require value={texto} onChange={(e) => setTexto(e.target.value)} rows="3"></textarea>
                            </div>
                            <div className="boxSignInButtons">
                                <button type="submit" class="boton4">Enviar mensaje</button>
                            </div>
                                
                        </form>
                </div>

                
            </div>
            <div className="col md-4"></div>
        </div> 
        </div>
    )
} 

export default Contacto; 