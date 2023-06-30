import "../layout/cssCompStyles.css"
import axios from 'axios';

import { useState, useEffect } from 'react';

function Admin () {
    const accessToken = sessionStorage.getItem('access-token')
    const [data, setData] = useState(null);
    const [tablaMensajes, setTablaMensajes] = useState();   

    
    const obtenerMensajes = async () => {
        try {
            console.log('entre al back')
            let url = 'http://localhost:8080/mensajes/getMensaje/'
            console.log('copie url')
            let response = await fetch(url, {
                method: 'GET',
                mode: "cors",
                headers: {
                    'Origin': 'http://localhost:3000/admin'
                },
            
        })
        const data = await response.json(); // Obtener los datos en formato JSON
        console.log(data); // Mostrar los datos en la consola
        
        const filas = data.map(mensaje => (
            <tr key={mensaje.id}>
                <td>{mensaje.nombre}</td>
                <td>{mensaje.email}</td>
                <td>{mensaje.telefono}</td>
                <td>{mensaje.texto}</td>
            </tr>
        ));
        //setTablaMensaje(filas)
        //return data;
        setTablaMensajes(filas);
    } catch (error) {
            console.log("Error", error);
    }}

    
    useEffect(() => {
        obtenerMensajes(setData,accessToken);
    },[setData,accessToken]);

    return(
        <div>
            <div className="row">
                <div className="col md-1"></div>
                <div className="col md-11" id="fondo">

                    <div class="divAdmin"></div>

                    <div className="BoxAdmin">
                        <div>
                            <h1 class="Titulo">Panel Administrador</h1>
                        </div>
                        <div>
                            <p>Bienvenido administrador. Ultimos contactos recibidos</p>
                        </div>
                        
                            <div className="boxTabla">
                                
                                    <table class="table table-stripped">
                                        <thead className="cabezeraTabla">
                                            <tr>
                                                <th id="campoCabezera">Nombre</th>
                                                <th id="campoCabezera">Email</th>
                                                <th id="campoCabezera">Telefono</th>
                                                <th id="campoCabezera">Mensaje</th>
                                            </tr>
                                        </thead>
                                        <tbody className="filasTabla">
                                            {tablaMensajes}
                                            <tr>
                                                <th id="campoFila">Facundo Camilotto</th>
                                                <th id="campoFila">facu@gmail.com</th>
                                                <th id="campofila">11122233</th>
                                                <th id="campofila">Tenemos una propuesta muy interesante para vos rey</th>
                                            </tr>
                                            <tr>
                                                <th id="campoFila">Facu</th>
                                                <th id="campoFila">facu@gmail.com</th>
                                                <th id="campofila">11122233</th>
                                                <th id="campofila"> Un signo de exclamación o signo de admiración​​ (¡ !) es una seña escrita que denota sorpresa, asombro, alegría, súplica, mandato, deseo, etc. Se escribe signo de admiración de apertura («¡») y signo de admiración de cierre («!») para indicar el principio y el final de una exclamación respectivamente.</th>
                                            </tr>
                                            <tr>
                                                <th id="campoFila">Facu</th>
                                                <th id="campoFila">facu@gmail.com</th>
                                                <th id="campofila">11122233</th>
                                                <th id="campofila"> Un signo de exclamación o signo de admiración​​ (¡ !) es una seña escrita que denota sorpresa, asombro, alegría, súplica, mandato, deseo, etc. Se escribe signo de admiración de apertura («¡») y signo de admiración de cierre («!») para indicar el principio y el final de una exclamación respectivamente.</th>
                                            </tr>
                                        </tbody>
                                        
                                    </table>

                            </div>
                    </div>
                </div>
                <div className="col md-1"></div>
            </div> 
        </div>
    )
} 

export default Admin; 